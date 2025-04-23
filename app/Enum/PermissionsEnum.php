<?php

namespace App\Enum;

enum PermissionsEnum:string
{
    case ApproveModerators = 'ApproveModerators';
    case WriteComments = 'WriteComments';
    case DeleteComments = 'DeleteComments';
    case FavoriteComics = 'FavoriteComics';
    case CreateComics = 'CreateComics';
    case EditComics = 'EditComics';
    case DeleteComics = 'DeleteComics'; 
}
