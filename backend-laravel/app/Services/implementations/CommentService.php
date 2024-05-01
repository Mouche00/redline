<?php

namespace App\Services\implementations;

use App\Helpers\VoteHelper;
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

    public function all($commentable, $id)
    {
        $commentable = $this->morph($commentable, $id);
        $comments = $this->repository->all($commentable);

        // $comments = VoteHelper::concatPoints($comments);
        return $comments;
    }

    public function fetch($comment)
    {
        $comment = $this->repository->fetch($comment);
        // $comment['points'] = VoteHelper::calculate($comment->votes);

        if(! $comment)
        {
            throw new \Exception('Comment not found');
        }
        
        return $comment;
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
