<?php

namespace App\Repositories\Interfaces;

use App\Models\Medium;
use App\Models\User;

interface MediumRepositoryInterface
{
    public function all();
    public function create(User $user, array $data);
    public function update(Medium $medium, array $data);
    public function delete(Medium $medium);
}
