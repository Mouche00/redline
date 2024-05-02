<?php

namespace App\Services\implementations;

use App\Repositories\Interfaces\PostRepositoryInterface;
use App\Services\Interfaces\PostServiceInterface;
use App\Traits\ImageServiceTrait;
use App\Traits\ResponseTrait;

class PostService implements PostServiceInterface
{
    use ResponseTrait, ImageServiceTrait;
    private PostRepositoryInterface $repository;

    public function __construct(PostRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function delete($post)
    {
        $post = $this->repository->delete($post);

        return $post;
    }

    public function fetch($post)
    {
        $post = $this->repository->fetch($post);

        return $post;
    }

    public function store($data, $medium)
    {
        $user = auth()->user();
        $data = array_merge($data , [
            'user_id' => $user->id
        ]);
        $post = $this->repository->create($data, $medium);

        return $post;
    }
}
