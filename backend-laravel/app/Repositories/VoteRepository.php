<?php

namespace App\Repositories;

use App\Interfaces\Repositories\VoteRepositoryInterface;

class VoteRepository implements VoteRepositoryInterface
{
    public function create($voteable, $data)
    {
        return $voteable->votes()->create($data);
    }
}
