<?php

use App\Http\Controllers\ComicController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [ComicController::class, 'index'])->name('dashboard');
    Route::get('comics/{comic:slug}', [ComicController::class, 'show'])->name('comics.show');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
