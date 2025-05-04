<?php

namespace App\Http\Controllers;

use App\Http\Resources\ComicListResource;
use App\Http\Resources\ComicResource;
use App\Models\Comic;
use Illuminate\Http\Request;
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
}
