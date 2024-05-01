<?php

namespace App\Repositories\Interfaces;

use App\Models\Comment;
use App\Models\Post;

interface VoteRepositoryInterface
{
    public function fetch(User $user, Post|Comment $voteable, int $id);
    public function create(Post|Comment $voteable, array $data);
    public function update(Vote $vote, array $data);
}
