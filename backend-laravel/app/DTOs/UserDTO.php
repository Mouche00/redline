<?php

namespace App\DTOs;

class UserDTO
{

    public function __construct(
        public readonly string $email,
        public readonly string  $password,
        public readonly string  $role = 'user',
        public readonly string  $name = ''
    ){}

    public static function fromRegister (array $data)
    {

        return new self(
            email: $data['email'],
            password: $data['password'],
            name: $data['name'],
        );
    }

    public static function fromLogin (array $data)
    {
        return new self(
            email: $data['email'],
            password: $data['password']
        );
    }
}
