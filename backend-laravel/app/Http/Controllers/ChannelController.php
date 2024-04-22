<?php

namespace App\Http\Controllers;

use App\Http\Requests\ChannelRequest;
use App\Services\Interfaces\ChannelServiceInterface;
use App\Traits\ResponseTrait;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ChannelController extends Controller
{
    use ResponseTrait;

    private ChannelServiceInterface $service;
    public function __construct(ChannelServiceInterface $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        try {
            $data = $this->service->all();
        } catch(Exception $e) {
            return $this->responseError($e->getMessage());
        }

        return $this->responseSuccess($data, 'Channels fetched successfully');
    }

    public function show(int $channel)
    {
        try {
            $data = $this->service->get($channel);
        }
        catch(Exception $e) {
            return $this->responseError($e->getMessage());
        }

        return $this->responseSuccess($data, "Channel fetched successfully", 200);
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

    public function reciever(int $channel): JsonResponse
    {
        // $validator = Validator::make($request->all(), [
        //     'channel' => 'exists:channels,id'
        // ]);

        // if(! $validator->fails()){
        //     $payload = $request->only('channel');
        
            try {
                $data = $this->service->reciever($channel);
            }
            catch(Exception $e) {
                return $this->responseError($e->getMessage());
            }

            return $this->responseSuccess($data, "Reciever fetched successfully", 200);
        // } else {
        //     return $this->responseError(null, 'Validation errors', 422);
        // }
        
    }
}
