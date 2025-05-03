<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Author;
use Illuminate\Support\Str;

class AuthorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $authors = [
            'Unknown',
            'Stephen King',
            'J.K. Rowling',
            'George R.R. Martin',
            'Agatha Christie',
            'Masashi Kishimoto',
            'Stan Lee',
            'Jack Kirby',
            'Alan Moore',
            'Frank Miller',
            'Neil Gaiman',
            'Brian K. Vaughan',
            'Garth Ennis',
            'Robert Kirkman',
            'Grant Morrison',
            'Marjane Satrapi',
            'Raina Telgemeier',
            'Rumiko Takahashi',
            'Hiromu Arakawa',
            'Katsuhiro Otomo',
            'Naoki Urasawa',
            'Junji Ito',
            'Osamu Tezuka',
            'Hajime Isayama',
            'Kentaro Miura',
            'Eiichiro Oda',
            'Akira Toriyama',
            'Takeshi Obata',
            'Tsugumi Ohba',
            'Mike Mignola',
            'Jeff Lemire',
            'Jason Aaron',
            'Joe Hill',
            'Noelle Stevenson',
            'Alison Bechdel',
            'Derf Backderf',
            'Charles Burns',
            'Daniel Clowes',
            'Fiona Staples',
            'Cliff Chiang',
            'Skottie Young',
            'Tom King',
            'Chip Zdarsky',
            'Brian Michael Bendis',
            'Gail Simone',
            'Kelly Sue DeConnick',
            'Matt Fraction',
            'Ed Brubaker',
            'Greg Rucka',
        ];

        $data = collect($authors)->map(fn($name) => [
            'name' => $name,
            'slug' => Str::slug($name),
        ])->toArray();

        Author::insert($data);
    }
}
