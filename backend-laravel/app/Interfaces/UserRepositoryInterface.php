<?php

namespace App\Interfaces;

use App\DTOs\UserDTO;

interface UserRepositoryInterface
{
    public function create(array $data);
}
