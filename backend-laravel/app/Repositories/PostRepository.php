<?php

namespace App\Repositories;

use App\Interfaces\Repositories\PostRepositoryInterface;
use App\Models\Post;

class PostRepository implements PostRepositoryInterface
{
    public function all()
    {
        return Post::all();
    }
    public function create($data, $medium)
    {
        return $medium->posts()->create()->content()->create($data);
    }
}
