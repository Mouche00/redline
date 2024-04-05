<?php

namespace App\Interfaces\Services;

use App\Models\Medium;
use Illuminate\Database\Eloquent\Model;

interface VoteServiceInterface
{
    public function upvote(string $voteable, int $id);
    public function downvote(string $voteable, int $id);
}
