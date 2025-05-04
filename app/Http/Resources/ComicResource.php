<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ComicResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'synopsis' => $this->synopsis,
            'tags' => $this->tags->map(function ($tag) {
                return [
                    'id' => $tag->id,
                    'name' => $tag->name,
                ];
            }),
            'cover' => $this->getFirstMediaUrl('cover'),
            'pages' => $this->getMedia('images')->map(function ($media) {
                return [
                    'url' => $media->getUrl(),
                    'name' => $media->name,
                ];
            }),
            'authors' => $this->authors->map(function ($author) {
                return [
                    'id' => $author->id,
                    'name' => $author->name,
                ];
            }),
            'category' => [
                'id' => $this->category->id,
                'name' => $this->category->name,
            ],
            'characters' => $this->characters->map(function ($character) {
                return [
                    'id' => $character->id,
                    'name' => $character->name,
                ];
            }),
        ];
    }
}
