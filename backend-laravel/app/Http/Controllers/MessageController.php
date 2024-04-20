<?php

namespace App\Http\Controllers;

use App\Http\Requests\MessageRequest;
use App\Services\Interfaces\MessageServiceInterface;
use App\Traits\ResponseTrait;
use Illuminate\Http\JsonResponse;
use Exception;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    use ResponseTrait;
    private MessageServiceInterface $service;
    public function __construct(MessageServiceInterface $service)
    {
        $this->service = $service;
    }
    public function store(MessageRequest $request): JsonResponse
    {
        $data = $request->validated();

        try {
            $data = $this->service->store($data);
        } catch (Exception $e){
            return $this->responseError($e->getMessage());
        }

        return $this->responseSuccess($data, "Message sent successfully", 201);
    }
}
