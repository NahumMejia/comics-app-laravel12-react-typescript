<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tag;
use App\Http\Resources\ComicResource;
use Inertia\Inertia;

class TagController extends Controller
{
    public function show(Tag $tag)
    {
        $comics = $tag->comics()->with(['category', 'authors', 'characters', 'media'])->get();

        return Inertia::render('Tag/Show', [
            'tag' => $tag,
            'comics' => ComicResource::collection($comics)->resolve(),
        ]);
    }
}
