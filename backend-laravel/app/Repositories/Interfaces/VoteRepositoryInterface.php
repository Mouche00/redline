<?php

namespace App\Repositories\Interfaces;

use App\Models\Comment;
use App\Models\Post;

interface VoteRepositoryInterface
{
    public function create(Post|Comment $voteable, $data);
}
