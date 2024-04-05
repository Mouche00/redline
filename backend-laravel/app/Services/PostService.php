<?php

namespace App\Services;

use App\Interfaces\Repositories\PostRepositoryInterface;
use App\Interfaces\Services\PostServiceInterface;
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
