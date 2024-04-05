<?php

namespace App\Http\Controllers;

use App\Http\Requests\MediumStoreRequest;
use App\Interfaces\Services\MediumServiceInterface;
use App\Models\Medium;
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

        return $this->responseSuccess($data, "Medium created successfully");
    }

    public function approve(Medium $medium)
    {
        try {
            $this->service->approve($medium);
        } catch (Exception $e){
            return $this->responseError($e->getMessage());
        }

        return $this->responseSuccess("Medium approved successfully");
    }

    public function reject(Medium $medium)
    {
        try {
            $this->service->reject($medium);
        } catch (Exception $e){
            return $this->responseError($e->getMessage());
        }

        return $this->responseSuccess("Medium rejected successfully");
    }
}
