<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CharacterResource\Pages;
use App\Filament\Resources\CharacterResource\RelationManagers;
use App\Models\Character;
use App\Filament\Resources\CharacterResource\Pages\CharacterImage;
use App\Filament\Resources\CharacterResource\Pages\EditCharacter;
use Filament\Tables\Columns\SpatieMediaLibraryImageColumn;
use Filament\Forms;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Pages\Page;
use Filament\Pages\SubNavigationPosition;
use Illuminate\Support\Str;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class CharacterResource extends Resource
{
    protected static ?string $model = Character::class;

    protected static ?string $navigationIcon = 'heroicon-c-ticket';

    protected static SubNavigationPosition $subNavigationPosition = SubNavigationPosition::End;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')
                ->required()
                ->label('Character Name')
                ->placeholder('Character Name')
                ->maxLength(100)
                ->live(onBlur: true)
                ->afterStateUpdated(function(string $operation, $state, callable $set) {
                    $set('slug', Str::slug($state));
                }),
                TextInput::make('slug')
                    ->required()
                    ->placeholder('slug')
                    ->label('Slug'),
                RichEditor::make('description')
                    ->required()
                    ->toolbarButtons([
                        'blockquote',
                        'bold',
                        'bulletList',
                        'h2',
                        'h3',
                        'italic',
                        'link',
                        'orderedList',
                        'redo',
                        'strike',
                        'underline',
                        'undo',
                        'table',
                    ])
                    ->columnSpan('2'),
                SpatieMediaLibraryFileUpload::make('image')
                    ->required()
                    ->label(label: 'Character Header Image')
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
                TextColumn::make('name')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('description')
                    ->label('Description')
                    ->limit(100)
                    ->wrap()
                    ->html(),
                SpatieMediaLibraryImageColumn::make('image')
                    ->alignCenter()
                    ->width(80)
                    ->label('Character Header Image')
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
            'index' => Pages\ListCharacters::route('/'),
            'create' => Pages\CreateCharacter::route('/create'),
            'edit' => Pages\EditCharacter::route('/{record}/edit'),
        ];
    }

    public static function getRecordSubNavigation(Page $page): array {
        return $page->generateNavigationItems([
            EditCharacter::class,
        ]);
    }
}
