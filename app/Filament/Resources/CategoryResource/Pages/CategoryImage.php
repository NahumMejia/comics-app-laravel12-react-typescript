<?php

namespace App\Filament\Resources\CategoryResource\Pages;

use App\Filament\Resources\CategoryResource;
use Filament\Actions;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Form;
use Filament\Resources\Pages\EditRecord;

class CategoryImage extends EditRecord
{
    protected static string $resource = CategoryResource::class;

    public function form (Form $form): Form
    {
        return $form
            ->schema([
                SpatieMediaLibraryFileUpload::make('image')
                    ->image()
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
