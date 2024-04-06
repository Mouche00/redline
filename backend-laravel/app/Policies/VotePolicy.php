<?php

namespace App\Policies;

use App\Models\Comment;
use App\Models\Post;
use App\Models\User;

class VotePolicy
{
    /**
     * Create a new policy instance.
     */
    public function __construct()
    {
        //
    }

    public function vote(User $user, Post|Comment $vote): bool
    {
        return $user !== $vote->user()->first();
    }
}
