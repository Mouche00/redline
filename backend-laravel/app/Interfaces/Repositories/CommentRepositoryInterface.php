<?php

namespace App\Interfaces\Repositories;

use App\Models\Comment;
use App\Models\Post;

interface CommentRepositoryInterface
{
    public function all();
    public function create(array $data, Post|Comment $commentable);
}
