<?php

namespace App\Repositories\implementations;

use App\Models\Post;
use App\Repositories\Interfaces\CommentRepositoryInterface;

class CommentRepository implements CommentRepositoryInterface
{
    public function all($commentable)
    {
        return $commentable->comments()->with('content')->get();
    }
    public function create($data, $commentable)
    {
        return $commentable->comments()->create()->content()->create($data);
    }
}
