<?php

namespace Database\Seeders;

use App\Enum\PermissionsEnum;
use App\Enum\RolesEnum;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $userRole = Role::create(['name' => RolesEnum::User->value]);
        $moderatorRole = Role::create(['name' => RolesEnum::Moderator->value]);
        $adminRole = Role::create(['name' => RolesEnum::Admin->value]);

        $approveModerators = Permission::create(['name' => PermissionsEnum::ApproveModerators->value]); 
        $writeComments = Permission::create(['name' => PermissionsEnum::WriteComments->value]);
        $deleteComments = Permission::create(['name' => PermissionsEnum::DeleteComments->value]);      
        $favoriteComics = Permission::create(['name' => PermissionsEnum::FavoriteComics->value]);   
        $createComics = Permission::create(['name' => PermissionsEnum::CreateComics->value]);   
        $editComics = Permission::create(['name' => PermissionsEnum::EditComics->value]);   
        $deleteComics = Permission::create(['name' => PermissionsEnum::DeleteComics->value]);
        
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
