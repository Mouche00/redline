<?php

namespace App\Repositories\implementations;

use App\Models\Post;
use App\Repositories\Interfaces\PostRepositoryInterface;

class PostRepository implements PostRepositoryInterface
{
    public function all()
    {
        return Post::latest()->get();
    }

    public function fetch($post)
    {
        return Post::find($post)->load('medium');
    }
    public function create($data, $medium)
    {
        return $medium->posts()->create()->content()->create($data);
    }
}
