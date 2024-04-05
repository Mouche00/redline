<?php

namespace App\Interfaces\Repositories;

use App\Models\Medium;
use App\Models\User;

interface PostRepositoryInterface
{
    public function all();
    public function create(array $data);
}
