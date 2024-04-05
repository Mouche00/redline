<?php

namespace App\Services;

use App\Interfaces\Repositories\VoteRepositoryInterface;
use App\Interfaces\Services\VoteServiceInterface;
use App\Models\Comment;
use App\Models\Post;
use App\Traits\ResponseTrait;

class VoteService implements VoteServiceInterface
{
    use ResponseTrait;
    private VoteRepositoryInterface $repository;

    public function __construct(VoteRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function upvote($voteable, $id)
    {
        $data = [
            'up' => true
        ];

        switch ($voteable) {
            case 'post':
                $voteable = Post::find($id);
                break;
            case 'comment':
                $voteable = Comment::find($id);
                break;
        }

        $this->repository->create($voteable, $data);
    }

    public function downvote($voteable, $id)
    {
        $data = [
            'up' => false
        ];

        switch ($voteable) {
            case 'post':
                $voteable = Post::find($id);
                break;
            case 'comment':
                $voteable = Comment::find($id);
                break;
        }

        $this->repository->create($voteable, $data);
    }
}
