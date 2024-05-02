<?php

namespace App\Repositories\implementations;

use App\Models\Post;
use App\Repositories\Interfaces\PostRepositoryInterface;

class PostRepository implements PostRepositoryInterface
{
    public function all()
    {
        return Post::all();
    }

    public function delete($id)
    {
        return Post::find($id)->delete();
    }

    public function fetch($id)
    {
        return Post::find($id)->load('medium');
    }
    public function create($data, $medium)
    {
        return $medium->posts()->create()->content()->create($data);
    }
}
