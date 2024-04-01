<?php

namespace App\Interfaces;

use App\DTOs\UserDTO;

interface UserServiceInterface
{
    public function store(UserDTO $data);
    public function login(array $data);
    public function createToken(string $token);
}
