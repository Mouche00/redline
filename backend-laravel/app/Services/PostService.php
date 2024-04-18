<?php

namespace App\Services;

use App\Repositories\Interfaces\PostRepositoryInterface;
use App\Services\Interfaces\PostServiceInterface;
use App\Traits\ResponseTrait;

class PostService implements PostServiceInterface
{
    use ResponseTrait;
    private PostRepositoryInterface $repository;

    public function __construct(PostRepositoryInterface $repository)
    {
        $this->repository = $repository;
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
