<?php

namespace App\Repositories\implementations;

use App\Models\User;
use App\Repositories\Interfaces\UserRepositoryInterface;
use App\Traits\ImageRepositoryTrait;

class UserRepository implements UserRepositoryInterface
{
    use ImageRepositoryTrait;
    public function create($data)
    {
        return User::create($data);
    }
}
