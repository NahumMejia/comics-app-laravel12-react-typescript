<?php

namespace App\Filament\Resources\AuthorResource\Pages;

use App\Filament\Resources\AuthorResource;
use Filament\Actions;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Form;
use Filament\Resources\Pages\EditRecord;

class AuthorImage extends EditRecord
{
    protected static string $resource = AuthorResource::class;

    public function form (Form $form): Form
    {
        return $form
            ->schema([
                SpatieMediaLibraryFileUpload::make('image')
                    ->label(label: 'Author Image')
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
