<?php

namespace App\Http\Controllers;

use App\Http\Requests\CrewRequest;
use App\Models\Crew;
use App\Services\Interfaces\CrewServiceInterface;
use App\Traits\ResponseTrait;
use Exception;
use Throwable;
use Illuminate\Http\Request;

class CrewController extends Controller
{
    use ResponseTrait;
    private CrewServiceInterface $service;
    public function __construct(CrewServiceInterface $service)
    {
        $this->service = $service;
    }

    public function show(int $id)
    {
        try {
            $data = $this->service->show($id);
        } catch(Exception $e) {
            return $this->responseError($e->getMessage());
        }

        return $this->responseSuccess($data, 'Crew fetched successfully');
    }

    public function search(Request $request)
    {
        $payload = $request->all();

        try {
            $data = $this->service->search($payload);
        } catch(Exception $e) {
            return $this->responseError($e->getMessage());
        }

        return $this->responseSuccess($data, 'Crew fetched successfully');
    }
    
    public function store(CrewRequest $request)
    {
        $payload = $request->validated();

        try {
            $data = $this->service->store($payload);
        } catch(Exception $e) {
            return $this->responseError($e->getMessage());
        }

        return $this->responseSuccess($data, 'Crew created successfully', 201);
    }

    public function update(int $crewID, CrewRequest $request)
    {
        $payload = $request->validated();

        try {
            $data = $this->service->update($crewID, $payload);
        } catch(Exception $e) {
            return $this->responseError($e->getMessage());
        }

        return $this->responseSuccess($data, 'Crew updated successfully');
    }

    public function destroy(int $crewID)
    {
        try {
            $this->service->destroy($crewID);
        } catch(Throwable $e) {
            return $this->responseError($e->getMessage());
        }

        return $this->responseSuccess(null, 'Crew deleted successfully');
    }
}
