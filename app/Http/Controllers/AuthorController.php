<?php

namespace App\Http\Controllers;

use App\Http\Resources\ComicResource;
use App\Models\Author;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthorController extends Controller
{
    public function show(Author $author)
    {
        $comics = $author->comics()->with(['category', 'authors', 'characters', 'media'])->get();

        return Inertia::render('Author/Show', [
            'author' => $author,
            'comics' => ComicResource::collection($comics)->resolve(),
        ]);
    }
}
