<?php

namespace App\Http\Controllers\Actual;

use Illuminate\Http\Request;
use App\Services\EventService;
use App\Models\ActualFavourite;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;

class FavouriteController extends Controller
{
    private function get_favourites($user_id)
    {
        return ActualFavourite::where('user', $user_id)->get();
    }

    public function list(Request $request): JsonResponse
    {
        return response()->json($this->get_favourites($request->user()->id));
    }

    public function add(Request $request): JsonResponse
    {
        $request->validate([
          "event" => 'required|numeric'
        ]);

        $favourite = ActualFavourite::where('user', $request->user()?->id)
            ->where('event', $request->event)
            ->delete();

        if ($favourite) {
            return response()->json($this->get_favourites($request->user()->id));
        }

        $favourite = new ActualFavourite([
          "user" => $request->user()->id,
          "event" => $request->event
        ]);
        $favourite->save();

        return response()->json($this->get_favourites($request->user()->id));
    }

    public function events(Request $request, EventService $eventService): JsonResponse
    {
        return response()->json(
            $eventService->formatEvents($eventService->getFavoriteEvents($request->user()?->id))
        );
    }

    public function remove(Request $request, EventService $eventService, int $id)
    {
        ActualFavourite::where('user', $request->user()?->id)
            ->where('event', $id)
            ->delete();
        return response()->json(
            $eventService->formatEvents($eventService->getFavoriteEvents($request->user()?->id))
        );
    }
}
