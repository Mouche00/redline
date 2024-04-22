<?php

namespace App\Repositories\Interfaces;
use App\Models\Channel;

interface ChannelRepositoryInterface
{
    public function all(User $user);
    public function create(array $payload);
    public function fetchByUser(int $user);
    public function exists(Channel $channel, int $user);
    public function fetch(int $channel);
    public function users(Channel $channel);


}
