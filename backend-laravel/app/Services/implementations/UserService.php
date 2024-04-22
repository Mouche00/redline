<?php

namespace App\Services\implementations;

use App\DTOs\UserDTO;
use App\Repositories\Interfaces\UserRepositoryInterface;
use App\Services\Interfaces\UserServiceInterface;
use App\Traits\ResponseTrait;

class UserService implements UserServiceInterface
{
    use ResponseTrait;
    private UserRepositoryInterface $repository;

    public function __construct(UserRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function store($data)
    {
        $data = $this->getData($data);
        $user = $this->repository->create($data);
        $token = auth()->login($user);
        $authorization = $this->createToken($token);

        return array_merge(compact("user"), compact('authorization'));
    }

    public function login($data)
    {
        $data = $this->getData($data);
        $data = array_filter($data, fn($data) => in_array($data, ['email', 'password']), ARRAY_FILTER_USE_KEY);
        $token = auth()->attempt($data);
        $user = auth()->user();
        $authorization = $this->createToken($token);

        return $this->compactData($user, $authorization);
    }

    public function logout()
    {
        auth()->logout();
    }

    public function getData(UserDTO $data)
    {
        return get_object_vars($data);
    }

    public function compactData($user, $authorization)
    {
        return array_merge(compact("user"), compact('authorization'));
    }

    public function createToken(string $token)
    {
        return [
          'token' => $token,
          'type' => 'bearer',
          'expires_in' => auth()->factory()->getTTL() * 60 * 24 * 7,
        ];
    }
}
