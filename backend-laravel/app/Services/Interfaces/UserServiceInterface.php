<?php

namespace App\Services\Interfaces;

use App\DTOs\UserDTO;

interface UserServiceInterface
{
    public function store(UserDTO $data);
    public function login(UserDTO $data);
    public function createToken(string $token);

    public function logout();
}
