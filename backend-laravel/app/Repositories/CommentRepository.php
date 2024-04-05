<?php

namespace App\Repositories;

use App\Interfaces\Repositories\CommentRepositoryInterface;
use App\Models\Post;

class CommentRepository implements CommentRepositoryInterface
{
    public function all()
    {
        return Post::all();
    }
    public function create($data, $commentable)
    {
        return $commentable->comments()->create()->content()->create($data);
    }
}
