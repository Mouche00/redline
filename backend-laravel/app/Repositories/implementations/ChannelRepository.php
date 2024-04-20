<?php

namespace App\Repositories\implementations;

use App\Models\Channel;
use App\Repositories\Interfaces\ChannelRepositoryInterface;

class ChannelRepository implements ChannelRepositoryInterface
{
    public function create($payload)
    {
        return Channel::create()->users()->sync($payload);
    }

    public function fetch($user)
    {
        return Channel::whereHas('users', fn($q) => $q->where('users.id', $user))->first();
    }

    public function exists($channel, $user)
    {
        return $channel->users()->find($user)->first();
    }
}
