<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Models\Medium;
use App\Services\Interfaces\PostServiceInterface;
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

    public function show(int $post)
    {
        try {
            $data = $this->service->show($post);
        } catch (Exception $e){
            return $this->responseError($e->getMessage());
        }

        return $this->responseSuccess($data, "Post fetched successfully");
    }

    public function store(PostRequest $request, Medium $medium)
    {
        $data = $request->validated();

        try {
            $data = $this->service->store($data, $medium);
        } catch (Exception $e){
            return $this->responseError($e->getMessage());
        }

        return $this->responseSuccess($data, "Post created successfully", 201);
    }

    public function storeImage(Request $request)
    {
        $data = $request->all();

        try {
            $data = $this->service->storeImage($data);
        } catch (Exception $e){
            return $this->responseError($e->getMessage());
        }

        return $this->responseSuccess($data, "Image stored successfully", 201);
    }
}
