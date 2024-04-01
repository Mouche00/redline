<?php

namespace App\Services;

use App\DTOs\UserDTO;
use App\Interfaces\UserRepositoryInterface;
use App\Interfaces\UserServiceInterface;
use App\Repositories\UserRepository;
use App\Traits\ResponseTrait;

class UserService implements UserServiceInterface
{
    use ResponseTrait;
    private UserRepositoryInterface $repository;

    public function __construct(UserRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function store(UserDTO $data)
    {
        $data = get_object_vars($data);
        $user = $this->repository->create($data);
        $token = auth()->login($user);
        $authorization = $this->createToken($token);

        return array_merge(compact("user"), compact('authorization'));
    }

    public function login(array $data)
    {
        $token = auth()->attempt($data);
        $user = auth()->user();
        $authorization = $this->createToken($token);

        return array_merge(compact("user"), compact('authorization'));
    }

    public function createToken(string $token)
    {
        return [
          'token' => $token,
          'type' => 'bearer',
          'expires_in' => auth()->factory()->getTTL() * 60,
        ];
    }
}
