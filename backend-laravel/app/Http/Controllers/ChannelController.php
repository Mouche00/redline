<?php

namespace App\Http\Controllers;

use App\Http\Requests\ChannelRequest;
use App\Services\Interfaces\ChannelServiceInterface;
use App\Traits\ResponseTrait;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ChannelController extends Controller
{
    use ResponseTrait;

    private ChannelServiceInterface $service;
    public function __construct(ChannelServiceInterface $service)
    {
        $this->service = $service;
    }

    public function store(ChannelRequest $request): JsonResponse
    {
        $payload = $request->validated();
        
        try {
            $data = $this->service->store($payload);
        }
        catch(Exception $e) {
            return $this->responseError($e->getMessage());
        }

        return $this->responseSuccess($data, "Channel created successfully", 201);
    }
}
