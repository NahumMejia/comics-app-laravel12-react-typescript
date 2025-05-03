<?php

namespace Database\Seeders;

use App\Enum\PermissionsEnum;
use App\Enum\RolesEnum;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    public function run(): void
    {
        $userRole = Role::findOrCreate(RolesEnum::User->value, 'web');
        $moderatorRole = Role::findOrCreate(RolesEnum::Moderator->value, 'web');
        $adminRole = Role::findOrCreate(RolesEnum::Admin->value, 'web');

        $approveModerators = Permission::findOrCreate(PermissionsEnum::ApproveModerators->value, 'web');
        $writeComments = Permission::findOrCreate(PermissionsEnum::WriteComments->value, 'web');
        $deleteComments = Permission::findOrCreate(PermissionsEnum::DeleteComments->value, 'web');
        $favoriteComics = Permission::findOrCreate(PermissionsEnum::FavoriteComics->value, 'web');
        $createComics = Permission::findOrCreate(PermissionsEnum::CreateComics->value, 'web');
        $editComics = Permission::findOrCreate(PermissionsEnum::EditComics->value, 'web');
        $deleteComics = Permission::findOrCreate(PermissionsEnum::DeleteComics->value, 'web');

        $userRole->syncPermissions([
            $writeComments,
            $favoriteComics,
        ]);

        $moderatorRole->syncPermissions([
            $writeComments,
            $favoriteComics,
            $deleteComments,
        ]);

        $adminRole->syncPermissions([
            $writeComments,
            $favoriteComics,
            $createComics,
            $editComics,
            $deleteComics,
            $deleteComments,
            $approveModerators,
        ]);
    }
}
