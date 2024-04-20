<?php

namespace App\Repositories\implementations;

use App\Models\User;
use App\Repositories\Interfaces\UserRepositoryInterface;

class UserRepository implements UserRepositoryInterface
{
    public function create($data)
    {
        return User::create($data);
    }
}
