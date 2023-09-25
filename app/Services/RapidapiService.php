<?php

namespace App\Services;

use GuzzleHttp\Client;
use App\Models\ActualEvent;
use Illuminate\Support\Facades\Log;

class RapidapiService
{
    const API_F_LOCALE = 'en_INT';

    public function __construct(
        protected Client $client_o,
        protected Client $client_f
    ) {
    }

    private function getEventInfo($apiEventId)
    {
        if (!$event = ActualEvent::where('os_sports_id', $apiEventId)->first()) {
            Log::error('RapidapiService unknown event', [$apiEventId]);
        }

        $eventId = $apiEventId;
        if (!is_numeric($apiEventId)) {
            $apiEventIdParts = explode('/', $apiEventId);
            if (!empty($apiEventIdParts) && !empty(last($apiEventIdParts))) {
                $eventId = last($apiEventIdParts);
            }
        }

        $params = [
            'query' => [
                'event_id' => $eventId,
            ]
        ];

        if ($event->api == ActualEvent::API_O) {
            $response = $this->client_o->request('GET', '/v1/events/data', $params);
            if ($response->getStatusCode() != 200) {
                Log::error('RapidapiService /v1/events/data response', [$params, $response->getBody()->getContents()]);

                return ['error' => true];
            }

            return json_decode($response->getBody()->getContents(), true);
        } elseif ($event->api == ActualEvent::API_F) {
            $params['query']['locale'] = static::API_F_LOCALE;
            $response = $this->client_f->request('GET', '/v1/events/data', $params);
            if ($response->getStatusCode() != 200) {
                Log::error('RapidapiService /v1/events/data response', [$params, $response->getBody()->getContents()]);

                return ['error' => true];
            }

            return json_decode($response->getBody()->getContents(), true);
        } else {
            Log::error('RapidapiService unknown event api', [$apiEventId]);
        }

        return [];
    }

    public function checkEventStatus($apiEventId)
    {
        if (!$event = ActualEvent::where('os_sports_id', $apiEventId)->first()) {
            Log::error('RapidapiService unknown event', [$apiEventId]);

            return false;
        }

        if (!$eventInfo = $this->getEventInfo($apiEventId)) {
            Log::error('RapidapiService can not get event info', array_merge([$apiEventId], $eventInfo));

            return false;
        }

        if (!empty($eventInfo) && !empty($eventInfo['error'])) {
            return -1;
        }

        if ($event->api == ActualEvent::API_O) {
            if (
                !empty($eventInfo) &&
                !empty($eventInfo['data']) &&
                !empty($eventInfo['data']['status']) &&
                !empty($eventInfo['data']['status']['type']) &&
                !in_array(strtolower($eventInfo['data']['status']['type']), ActualEvent::$finishedStatuses)
            ) {
                return true;
            }
        } elseif ($event->api == ActualEvent::API_F) {
            if (
                !empty($eventInfo) &&
                !empty($eventInfo['DATA']) &&
                !empty($eventInfo['DATA']['EVENT']) &&
                !empty($eventInfo['DATA']['EVENT']['STAGE_TYPE']) &&
                !in_array(strtolower($eventInfo['DATA']['EVENT']['STAGE_TYPE']), ActualEvent::$finishedStatuses)
            ) {
                return true;
            }
        } else {
            Log::error('RapidapiService unknown event api', [$apiEventId]);
        }

        return false;
    }
}
