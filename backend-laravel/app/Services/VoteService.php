<?php

namespace App\Services;

use App\Interfaces\Repositories\VoteRepositoryInterface;
use App\Interfaces\Services\VoteServiceInterface;
use App\Models\Comment;
use App\Models\Post;
use App\Traits\MorphTrait;
use App\Traits\ResponseTrait;

class VoteService implements VoteServiceInterface
{
    use ResponseTrait, MorphTrait;
    private VoteRepositoryInterface $repository;

    public function __construct(VoteRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function upvote($voteable, $id)
    {
        $user = auth()->user();
        $data = [
            'up' => true
        ];

        $voteable = $this->morph($voteable, $id);

        $this->repository->create($voteable, $data);
    }

    public function downvote($voteable, $id)
    {
        $data = [
            'up' => false
        ];

        $voteable = $this->morph($voteable, $id);

        $this->repository->create($voteable, $data);
    }
}
