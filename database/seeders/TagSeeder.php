<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Tag;
use Illuminate\Support\Str;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tags = [
            'Fantasy',
            'Science Fiction',
            'Mystery',
            'Romance',
            'Thriller',
            'Horror',
            'Historical Fiction',
            'Non-Fiction',
            'Biography',
            'Self-Help',
            'Poetry',
            'Graphic Novel',
            'Young Adult',
            "Children's Literature",
            'Classic Literature',
            'Dystopian',
            'Adventure',
            'Cookbook',
            'Travel',
            'Science',
            'Philosophy',
            'Religion',
            'Business',
            'Technology',
            'Health & Wellness',
            'Parenting',
            'Sports',
            'Music',
            'Art & Photography',
            'Home & Garden',
            'Crafts & Hobbies',
            'Graphic Design',
            'Web Development',
            'Mobile Development',
            'Data Science',
            'Machine Learning',
            'Artificial Intelligence',
            'Superheroes',
            'Space Exploration',
            'Time Travel',
            'Cyberpunk',
            'Steampunk',
            'Urban Fantasy',
            'Dark Fantasy',
            'Epic Fantasy',
            'Post-Apocalyptic',
            'Supernatural',
            'Mythology',
            'Folklore',
            'Satire',
            'Parody',
            'Drama',
            'Coming of Age',
            'Slice of Life',
            'Detective',
            'Crime',
            'Comedy',
            'War',
            'Zombies',
            'Vampires',
            'Werewolves',
            'Mutants',
            'Antiheroes',
            'Crossover',
            'Origin Stories',
            'Spider-Man',
            'Batman',
            'Superman',
            'Daredevil',
            'Punisher',
            'Jason Todd',
            'Green Lantern',
            'Justice League',
            'Cars',
            'Motorcycles',
            'Minions',
            'Transformers',
            'Star Wars',
            'Star Trek',
            'Doctor Who',
            'The Matrix',
            'Avatar',
            'The Lord of the Rings',
            'Harry Potter',
            'The Hobbit',
            'Percy Jackson',
            'The Chronicles of Narnia',
            'Black Widow',
        ];

        $data = collect($tags)->unique()->map(fn($name) => [
            'name' => $name,
            'slug' => Str::slug($name),
        ])->toArray();

        Tag::insert($data);
    }
}
