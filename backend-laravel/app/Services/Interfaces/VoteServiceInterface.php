<?php

namespace App\Services\Interfaces;

interface VoteServiceInterface
{
    public function upvote(string $voteable, int $id);
    public function downvote(string $voteable, int $id);
}
