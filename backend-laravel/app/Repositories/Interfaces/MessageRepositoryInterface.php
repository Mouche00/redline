<?php

namespace App\Repositories\Interfaces;
use App\Models\User;

interface MessageRepositoryInterface
{
    public function create(User $user, int $channel, array $data);
}
