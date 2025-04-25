<?php

namespace App\Filament\Resources\ComicResource\Pages;

use App\Filament\Resources\CharacterResource;
use Filament\Actions;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Form;
use Filament\Resources\Pages\EditRecord;

class ComicImages extends EditRecord
{
    protected static string $resource = CharacterResource::class;

    public function form (Form $form): Form
    {
        return $form
            ->schema([
                SpatieMediaLibraryFileUpload::make('image')
                    ->label(label: 'Comic Pages')
                    ->image()
                    ->panelLayout('grid')
                    ->openable()
                    ->reorderable()
                    ->appendFiles()
                    ->preserveFilenames()
                    ->columnSpan('full'),
            ]);
    }


    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }

}
