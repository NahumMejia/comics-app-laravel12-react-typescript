<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    public function comics()
    {
        return $this->belongsToMany(Comic::class, 'comic_tag');
    }
}
