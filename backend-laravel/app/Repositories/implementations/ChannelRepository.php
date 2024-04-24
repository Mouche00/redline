<?php

namespace App\Repositories\implementations;

use App\Models\Channel;
use App\Repositories\Interfaces\ChannelRepositoryInterface;

class ChannelRepository implements ChannelRepositoryInterface
{
    public function all($user)
    {
        return $user->channels()->with(['users' => fn($q) => $q->whereNot('users.id', $user->id)])->get();
    }

    public function create($payload)
    {
        return Channel::create()->users()->sync($payload);
    }

    public function fetchByUser($user)
    {
        return Channel::whereHas('users', fn($q) => $q->where('users.id', $user))->first();
    }

    public function exists($channel, $user)
    {
        return $channel->users()->find($user);
    }

    public function fetch($channel)
    {
        return Channel::findOrFail($channel)->messages()->with('user')->paginate(30);
    }

    public function users($channel)
    {
        return Channel::find($channel)->users()->get();
    }
}
