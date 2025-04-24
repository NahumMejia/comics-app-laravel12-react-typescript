<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ComicResource\Pages;
use App\Filament\Resources\ComicResource\RelationManagers;
use App\Models\Comic;
use Filament\Forms;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ComicResource extends Resource
{
    protected static ?string $model = Comic::class;

    protected static ?string $navigationIcon = 'heroicon-m-book-open';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextInput::make('title')
                    ->label('Title')
                    ->required()
                    ->searchable()
                    ->sortable(),
                RichEditor::make('synopsis')
                    ->label('Synopsis')
                    ->required()
                    ->columnSpanFull()
                    ->disableToolbarButtons([
                        'attachFiles',
                        'codeBlock',
                        'h1',
                        'h2',
                        'h3',
                        'h4',
                        'h5',
                        'h6',
                        'indent',
                        'link',
                        'orderedList',
                        'quote',
                        'strikeThrough',
                        'unorderedList',
                    ]),
                Select::make('authors')
                    ->relationship('authors', 'name')
                    ->multiple()
                    ->preload()
                    ->label('Authors'),
                Select::make('category_id')
                    ->relationship('category', 'name')
                    ->preload()
                    ->label('Category'),
                Select::make('tags')
                    ->relationship('tags', 'name')
                    ->multiple()
                    ->preload()
                    ->label('Tags'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListComics::route('/'),
            'create' => Pages\CreateComic::route('/create'),
            'edit' => Pages\EditComic::route('/{record}/edit'),
        ];
    }
}
