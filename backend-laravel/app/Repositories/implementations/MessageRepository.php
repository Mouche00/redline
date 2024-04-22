<?php

namespace App\Repositories\implementations;

use App\Repositories\Interfaces\MessageRepositoryInterface;

class MessageRepository implements MessageRepositoryInterface
{
    public function create($user, $channel, $payload)
    {
        return $user->messages()->create([
            'message' => $payload,
            'channel_id' => $channel
        ]);
    }
}
