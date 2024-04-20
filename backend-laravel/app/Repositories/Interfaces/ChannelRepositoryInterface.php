<?php

namespace App\Repositories\Interfaces;
use App\Models\Channel;

interface ChannelRepositoryInterface
{
    public function create(array $payload);
    public function fetch(int $user);
    public function exists(Channel $channel, int $user);
}
