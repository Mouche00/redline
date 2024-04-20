<?php

namespace App\Services\implementations;

use App\Repositories\Interfaces\CommentRepositoryInterface;
use App\Services\Interfaces\CommentServiceInterface;
use App\Traits\MorphTrait;
use App\Traits\ResponseTrait;

class CommentService implements CommentServiceInterface
{
    use ResponseTrait, MorphTrait;
    private CommentRepositoryInterface $repository;

    public function __construct(CommentRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function store($data, $commentable, $id)
    {
        $user = auth()->user();
        $data = array_merge($data , [
            'user_id' => $user->id
        ]);

        $commentable = $this->morph($commentable, $id);

        $comment = $this->repository->create($data, $commentable);

        return $comment;
    }
}
