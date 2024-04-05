<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostStoreRequest;
use App\Interfaces\Services\PostServiceInterface;
use App\Models\Medium;
use App\Traits\ResponseTrait;
use Exception;
use Illuminate\Http\Request;

class PostController extends Controller
{
    use ResponseTrait;

    private PostServiceInterface $service;
    public function __construct(PostServiceInterface $service)
    {
        $this->service = $service;
    }
    public function index()
    {

    }

    public function store(PostStoreRequest $request, Medium $medium)
    {
        $data = $request->validated();

        try {
            $data = $this->service->store($data, $medium);
        } catch (Exception $e){
            return $this->responseError($e->getMessage());
        }

        return $this->responseSuccess($data, "Post created successfully", 201);
    }
}
