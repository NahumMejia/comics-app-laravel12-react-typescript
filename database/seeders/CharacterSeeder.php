<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\Character;

class CharacterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $characters = [
            'Superman',
            'Batman',
            'Spider-Man',
            'Iron Man',
            'Wonder Woman',
            'The Flash',
            'Hulk',
            'Captain America',
            'Thor',
            'Deadpool',
            'Black Widow',
            'Joker',
            'Harley Quinn',
            'Green Lantern',
            'Aquaman',
            'Wolverine',
            'Doctor Strange',
            'Vision',
            'Scarlet Witch',
            'Ant-Man',
            'Wasp',
            'Falcon',
            'Winter Soldier',
            'Hawkeye',
            'Loki',
            'Thanos',
            'Venom',
            'Magneto',
            'Professor X',
            'Storm',
            'Cyclops',
            'Jean Grey',
            'Rogue',
            'Gambit',
            'Beast',
            'Nightcrawler',
            'Colossus',
            'Mystique',
            'Silver Surfer',
            'Black Panther',
            'Shuri',
            'Star-Lord',
            'Gamora',
            'Drax',
            'Groot',
            'Rocket Raccoon',
            'Yondu',
            'Mantis',
            'Nebula',
            'Doctor Doom',
            'Lex Luthor',
            'Catwoman',
            'Bane',
            'Riddler',
            'Penguin',
            'Two-Face',
            'Ra\'s al Ghul',
            'Talia al Ghul',
            'Zatanna',
            'Constantine',
            'Martian Manhunter',
            'Cyborg',
            'Shazam',
            'Black Adam',
            'Blue Beetle',
            'Supergirl',
            'Batgirl',
            'Nightwing',
            'Robin',
            'Red Hood',
            'Jason Todd',
            'Beast Boy',
            'Raven',
            'Starfire',
        ];

        $data = collect($characters)->unique()->map(fn($name) => [
            'name' => $name,
            'slug' => Str::slug($name),
        ])->toArray();

        Character::insert($data);
    }
}
