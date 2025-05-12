<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CharacterController;
use App\Http\Controllers\ComicController;
use App\Http\Controllers\TagController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

//Comics
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [ComicController::class, 'index'])->name('dashboard');
    Route::get('comics/{comic:slug}', [ComicController::class, 'show'])->name('comics.show');
    Route::get('tags/{tag:slug}', [TagController::class, 'show'])->name('tags.show');
    Route::get('characters/{character:slug}', [CharacterController::class, 'show'])->name('characters.show');
    Route::get('categories/{category:slug}', [CategoryController::class, 'show'])->name('categories.show');
    Route::get('authors/{author:slug}', [AuthorController::class, 'show'])->name('authors.show');
    Route::post('comics/{comic}/favorite', [ComicController::class, 'toggleFavorite'])->name('comics.favorite');
    Route::get('favorites', [ComicController::class, 'favorites'])->name('favorites.show');
});


//Category

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
