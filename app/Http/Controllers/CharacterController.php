<?php

namespace App\Http\Controllers;

use App\Models\Character;
use Illuminate\Http\Request;
use App\Http\Resources\ComicResource;
use Inertia\Inertia;

class CharacterController extends Controller
{
    public function show(Character $character)
    {
        $comics = $character->comics()->with(['category', 'authors', 'characters', 'media'])->get();

        return Inertia::render('Character/Show', [
            'character' => $character,
            'comics' => ComicResource::collection($comics)->resolve(),
        ]);
    }
}
