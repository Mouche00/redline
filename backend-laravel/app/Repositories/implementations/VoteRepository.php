<?php

namespace App\Repositories\implementations;

use App\Repositories\Interfaces\VoteRepositoryInterface;

class VoteRepository implements VoteRepositoryInterface
{
    public function fetch($user, $voteable, $id)
    {
        return $voteable->find($id)->votes()->where('user_id', $user)->first();
    }
    public function create($voteable, $data)
    {
        return $voteable->votes()->create($data);
    }
}
