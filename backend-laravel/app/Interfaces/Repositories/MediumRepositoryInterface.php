<?php

namespace App\Interfaces\Repositories;

use App\Models\User;

interface MediumRepositoryInterface
{
    public function all();
    public function create(User $user, array $data);
}
