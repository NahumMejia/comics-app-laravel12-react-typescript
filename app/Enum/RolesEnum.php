<?php

namespace App\Enum;

enum RolesEnum: string
{
    case Admin = 'Admin';
    case Moderator = 'Moderator';
    case User = 'User';
}
