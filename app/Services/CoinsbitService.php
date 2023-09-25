<?php

namespace App\Services;

use GuzzleHttp\Client;
use Illuminate\Support\Carbon;
use Illuminate\Http\JsonResponse;

class CoinsbitService
{
    public function __construct(
        protected Client $client,
        protected string $url,
        protected string $apiKey,
        protected string $apiSecret
    ) {
    }

    public function getPairCourse($ticker1, $ticker2)
    {
        $request = '/api/v1/public/ticker?market=' . $ticker1 . '_' . $ticker2;

        $data = [
            'request' => $request,
            'nonce' => (string) Carbon::now()->timestamp,
        ];

        $completeUrl = $this->url . $request;
        $dataJsonStr = json_encode($data, JSON_UNESCAPED_SLASHES);
        $payload = base64_encode($dataJsonStr);
        $signature = hash_hmac('sha512', $payload, $this->apiSecret);

        $client = new Client();
        try {
            $res = $client->get($completeUrl, [
                'headers' => [
                    'Content-type' => 'application/json',
                    'X-TXC-APIKEY' => $this->apiKey,
                    'X-TXC-PAYLOAD' => $payload,
                    'X-TXC-SIGNATURE' => $signature
                ],
                'body' => json_encode($data, JSON_UNESCAPED_SLASHES)
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()]);
        }

        return json_decode($res->getBody()->getContents(), true);
    }
}
