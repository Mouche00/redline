<?php

namespace App\Repositories\Interfaces;

use App\Models\Comment;
use App\Models\Post;

interface CommentRepositoryInterface
{
    public function all(Post|Comment $commentable);
    public function fetch(int $comment);
    public function create(array $data, Post|Comment $commentable);
}
