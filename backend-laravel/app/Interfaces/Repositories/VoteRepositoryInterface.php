<?php

namespace App\Interfaces\Repositories;

use App\Models\Comment;
use App\Models\Post;

interface VoteRepositoryInterface
{
    public function create(Post|Comment $voteable, $data);
}
