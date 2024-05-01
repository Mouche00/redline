<?php

namespace App\Repositories\implementations;

use App\Models\Comment;
use App\Models\Post;
use App\Repositories\Interfaces\CommentRepositoryInterface;

class CommentRepository implements CommentRepositoryInterface
{
    public function all($commentable)
    {
        return $commentable->comments()->latest()->get();
    }

    public function fetch($comment)
    {
        return Comment::latest()->find($comment);
    }
    public function create($data, $commentable)
    {
        return $commentable->comments()->create()->content()->create($data);
    }
}
