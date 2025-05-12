<?php

namespace App\Http\Controllers;

use App\Http\Resources\ComicListResource;
use App\Http\Resources\ComicResource;
use App\Models\Comic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Inertia\Inertia;

class ComicController extends Controller
{
    public function index()
    {

        $comics = Comic::with('media')->get();

        return Inertia::render('dashboard', [
            'comics' => ComicListResource::collection($comics),
        ]);
    }


    public function show(Comic $comic)
    {
        return Inertia::render('Comic/Show', [
            'comic' => (new ComicResource($comic))->resolve(),
        ]);
    }
    public function toggleFavorite(Comic $comic)
    {
        $user = Auth::user();

        if (!$user) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $user->favoritedComics()->toggle($comic->id);

        return response()->json([
            'message' => 'Favorite status toggled successfully',
            'isFavorited' => $user->favoritedComics()->where('comic_id', $comic->id)->exists(),
        ]);
    }
    public function favorites()
    {
        $user = Auth::user();

        if (!$user) {
            return redirect()->route('login')->with('error', 'You need to log in to view your favorites.');
        }

        $favorites = $user->favoritedComics()->with('media', 'authors', 'category')->get();

        if ($favorites->isEmpty()) {
            Log::info('No favorite comics found for user ID: ' . $user->id);
        }

        return Inertia::render('Favorites/Show', [
            'favorites' => ComicListResource::collection($favorites),
        ]);
    }
}
