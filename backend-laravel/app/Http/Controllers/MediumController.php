<?php

namespace App\Http\Controllers;

use App\Http\Requests\MediumRequest;
use App\Models\Medium;
use App\Services\Interfaces\MediumServiceInterface;
use App\Traits\ResponseTrait;
use Exception;
use Illuminate\Http\Request;

class MediumController extends Controller
{
    use ResponseTrait;

    private MediumServiceInterface $service;
    public function __construct(MediumServiceInterface $service)
    {
        $this->service = $service;
    }
    public function all(string $type = 'new')
    {
        try {
            $data = $this->service->all($type);
        } catch (Exception $e){
            return $this->responseError($e->getMessage());
        }

        return $this->responseSuccess($data, "Mediums fetched successfully");
    }

    public function allCategories()
    {
        try {
            $data = $this->service->allCategories();
        } catch (Exception $e){
            return $this->responseError($e->getMessage());
        }

        return $this->responseSuccess($data, "Categories fetched successfully");
    }

    public function ban(int $medium, Request $request)
    {
        $payload = $request->all();
        try {
            $data = $this->service->ban($medium, $payload);
        } catch (Exception $e){
            return $this->responseError($e->getMessage());
        }

        return $this->responseSuccess($payload, "User banned successfully");
    }

    public function show(int $medium)
    {
        try {
            $data = $this->service->fetch($medium);
        } catch (Exception $e){
            return $this->responseError($e->getMessage());
        }

        return $this->responseSuccess($data, "Medium fetched successfully");
    }

    public function store(MediumRequest $request)
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
