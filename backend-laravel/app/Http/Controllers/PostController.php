<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Models\Medium;
use App\Models\Post;
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

    public function new()
    {
        $data = Post::latest()->get();
        return $this->responseSuccess($data, "Posts fetched successfully");
    }

    public function popular()
    {
        $data = Post::latest()->orderByDesc('points')->get();
        return $this->responseSuccess($data, "Posts fetched successfully");
    }

    public function delete(int $post)
    {
        try {
            $data = $this->service->delete($post);
        } catch (Exception $e){
            return $this->responseError($e->getMessage());
        }

        return $this->responseSuccess($data, "Post deleted successfully");
    }

    public function show(int $post)
    {
        try {
            $data = $this->service->fetch($post);
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
