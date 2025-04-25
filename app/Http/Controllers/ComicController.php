<?php

namespace App\Http\Controllers;

use App\Http\Resources\ComicListResource;
use App\Models\Comic;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ComicController extends Controller
{
    public function index(){

    $comics = Comic::with('media')->get();

    return Inertia::render('dashboard', [
        'comics' => ComicListResource::collection($comics),
    ]);
}

    public function show(Comic $comic){
        
    }
}
