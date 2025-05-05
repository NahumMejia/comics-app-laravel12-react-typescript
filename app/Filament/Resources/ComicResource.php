<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ComicResource\Pages;
use App\Filament\Resources\ComicResource\RelationManagers;
use App\Models\Comic;
use Filament\Forms;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\SpatieMediaLibraryImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Support\Str;
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
                TextInput::make('title')
                    ->required()
                    ->label('Comic Name')
                    ->placeholder('Comic Name')
                    ->maxLength(100)
                    ->live(onBlur: true)
                    ->afterStateUpdated(function (string $operation, $state, callable $set) {
                        $set('slug', Str::slug($state));
                    }),
                TextInput::make('slug')
                    ->required()
                    ->placeholder('slug')
                    ->label('Slug'),
                RichEditor::make('synopsis')
                    ->label('Synopsis')
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
                        'bulletedList',
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
                Select::make('characters')
                    ->relationship('characters', 'name')
                    ->multiple()
                    ->preload()
                    ->label('Related Characters'),
                SpatieMediaLibraryFileUpload::make('cover')
                    ->required()
                    ->collection('cover')
                    ->label(label: 'Comic Cover')
                    ->image()
                    ->panelLayout('grid')
                    ->openable()
                    ->reorderable()
                    ->appendFiles()
                    ->preserveFilenames()
                    ->columnSpan('full'),
                SpatieMediaLibraryFileUpload::make('pages')
                    ->required()
                    ->collection('pages')
                    ->label(label: 'Comic Pages')
                    ->multiple()
                    ->image()
                    ->panelLayout('grid')
                    ->openable()
                    ->reorderable()
                    ->appendFiles()
                    ->preserveFilenames()
                    ->columnSpan('full'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')
                    ->sortable()
                    ->searchable()
                    ->label('Title'),
                TextColumn::make('authors.name')
                    ->label('Authors')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('category.name')
                    ->label('Category')
                    ->sortable()
                    ->searchable(),
                SpatieMediaLibraryImageColumn::make('cover')
                    ->collection('cover')
                    ->alignCenter()
                    ->width(80)
                    ->label('Comic Cover'),

            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
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
            'images' => Pages\ComicImages::route('/{record}/images'),
        ];
    }
}
