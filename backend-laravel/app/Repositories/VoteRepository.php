<?php

namespace App\Repositories;

use App\Repositories\Interfaces\VoteRepositoryInterface;

class VoteRepository implements VoteRepositoryInterface
{
    public function create($voteable, $data)
    {
        return $voteable->votes()->create($data);
    }
}
