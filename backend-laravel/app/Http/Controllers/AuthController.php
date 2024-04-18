<?php

namespace App\Http\Controllers;

use App\DTOs\UserDTO;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Services\Interfaces\UserServiceInterface;
use App\Traits\ResponseTrait;
use Exception;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller
{
    use ResponseTrait;

    private UserServiceInterface $service;
    public function __construct(UserServiceInterface $service)
    {
        $this->service = $service;
    }

    public function register(RegisterRequest $request): JsonResponse
    {
//        $credentials = new UserDTO(...$request->all());
        $credentials = UserDTO::fromRegister($request->all());

        try {
            $data = $this->service->store($credentials);
        } catch (Exception $e){
            return $this->responseError($e->getMessage());
        }

        return $this->responseSuccess($data, "User created successfully", 201);
    }

    public function login(LoginRequest $request): JsonResponse
    {
        $credentials = UserDTO::fromLogin($request->all());

        try {
            $data = $this->service->login($credentials);
        } catch (Exception $e){
            return $this->responseError($e->getMessage());
        }

        if($data['user']) {

            return $this->responseSuccess($data, "User logged in successfully", 201);
        } else {

            return $this->responseError("Login failed");

        }
    }

    public function logout()
    {
        $this->service->logout();
        return $this->responseSuccess(null, "Successfully logged out");
    }
}
