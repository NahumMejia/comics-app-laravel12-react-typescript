<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            'Action',
            'Adventure',
            'Comedy',
            'Drama',
            'Fantasy',
            'Horror',
            'Mystery',
            'Romance',
            'Science Fiction',
            'Superhero',
            'Thriller',
            'Slice of Life',
            'Historical',
            'Crime',
            'Noir',
            'Western',
            'Martial Arts',
            'Military',
            'Post-Apocalyptic',
            'Dystopian',
            'Steampunk',
            'Cyberpunk',
            'Mythology',
            'Supernatural',
            'Psychological',
            'Espionage',
            'Political',
            'Educational',
            'Parody',
            'Satire',
            'Graphic Novel',
            'Manga',
            'Anime Adaptation',
            'TV Series',
            'Movies',
            'Webcomic',
            'One-shot',
            'Kids',
            'Young Adult',
            'Adult',
            'Anthology',
            'Crossover',
            'Origin Story',
            'Reboot',
            'Spin-off',
            'Classic',
        ];

        $data = collect($categories)->unique()->map(fn($name) => [
            'name' => $name,
            'slug' => Str::slug($name),
        ])->toArray();

        Category::insert($data);
    }
}
