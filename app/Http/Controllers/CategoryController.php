<?php

namespace App\Http\Controllers;

use App\Http\Resources\ComicResource;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function show(Category $category)
    {
        $comics = $category->comics()->with([
            'category',
            'media'
        ])->get();

        return inertia('Category/Show', [
            'category' => $category,
            'comics' => ComicResource::collection($comics)->resolve(),
        ]);
    }
}
