<?php

namespace App\Http\Controllers;

use App\Http\Requests\CommentStoreRequest;
use App\Services\Interfaces\CommentServiceInterface;
use App\Traits\ResponseTrait;
use Exception;

class CommentController extends Controller
{
    use ResponseTrait;

    private CommentServiceInterface $service;
    public function __construct(CommentServiceInterface $service)
    {
        $this->service = $service;
    }
    public function index($commentable, $id)
    {

        try {
            $data = $this->service->store($data, $commentable, $id);
        } catch (Exception $e){
            return $this->responseError($e->getMessage());
        }

        return $this->responseSuccess($data, "Comment created successfully", 201);
    }

    public function store(CommentStoreRequest $request, $commentable, $id)
    {
        $data = $request->validated();

        try {
            $data = $this->service->store($data, $commentable, $id);
        } catch (Exception $e){
            return $this->responseError($e->getMessage());
        }

        return $this->responseSuccess($data, "Comment created successfully", 201);
    }
}
