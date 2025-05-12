<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Comic extends Model implements HasMedia
{
    use InteractsWithMedia;

    public function authors()
    {
        return $this->belongsToMany(Author::class, 'author_comic');
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'comic_tag');
    }

    public function characters()
    {
        return $this->belongsToMany(Character::class, 'character_comic');
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('cover')->useDisk('public')->singleFile();
        $this->addMediaCollection('pages')->useDisk('public');;
    }
    public function favoritedByUsers()
    {
        return $this->belongsToMany(User::class, 'comic_user', 'comic_id', 'user_id');
    }
}
