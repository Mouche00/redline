<?php

namespace App\Repositories;

use App\Interfaces\Repositories\MediumRepositoryInterface;
use App\Models\Medium;

class MediumRepository implements MediumRepositoryInterface
{
    public function all()
    {
        return Medium::all();
    }
    public function create($user, $data)
    {
        return $user->media()->create($data);
    }
}
