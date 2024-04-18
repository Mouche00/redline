<?php

namespace App\Http\Controllers;

use App\Http\Requests\MediumStoreRequest;
use App\Models\Medium;
use App\Services\Interfaces\MediumServiceInterface;
use App\Traits\ResponseTrait;
use Exception;

class MediumController extends Controller
{
    use ResponseTrait;

    private MediumServiceInterface $service;
    public function __construct(MediumServiceInterface $service)
    {
        $this->service = $service;
    }
    public function index()
    {

    }

    public function store(MediumStoreRequest $request)
    {
        $data = $request->validated();

        try {
            $data = $this->service->store($data);
        } catch (Exception $e){
            return $this->responseError($e->getMessage());
        }

        return $this->responseSuccess($data, "Medium created successfully", 201);
    }

    public function approve(Medium $medium)
    {
        try {
            $this->service->approve($medium);
        } catch (Exception $e){
            return $this->responseError($e->getMessage());
        }

        return $this->responseSuccess(null, "Medium approved successfully");
    }

    public function reject(Medium $medium)
    {
        try {
            $this->service->reject($medium);
        } catch (Exception $e){
            return $this->responseError($e->getMessage());
        }

        return $this->responseSuccess(null, "Medium rejected successfully");
    }
}
