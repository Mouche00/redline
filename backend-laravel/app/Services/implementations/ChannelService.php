<?php

namespace App\Services\implementations;

use App\Events\MessageSent;
use App\Repositories\Interfaces\ChannelRepositoryInterface;
use App\Services\Interfaces\ChannelServiceInterface;
use App\Traits\ResponseTrait;
use Exception;

class ChannelService implements ChannelServiceInterface
{
    use ResponseTrait;
    private ChannelRepositoryInterface $repository;

    public function __construct(ChannelRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function all()
    {
        $user = auth()->user();
        $channels = $this->repository->all($user);
        return $channels;
    }

    public function store($payload)
    {
        $user = auth()->user();
        extract($payload);
        $channel = $this->repository->fetchByUser($reciever);
        $exists = $channel && $this->repository->exists($channel, $user->id);
        if(! $exists){
            $payload = [$reciever, $user->id];
            $channel = $this->repository->create($payload);
        } else {
            throw new Exception('Channel already exists');
        }

        return $channel;
    }

    public function get($channel)
    {
        $channel = $this->repository->fetch($channel);
        return $channel;
    }

    public function reciever($channel)
    {
        $user = auth()->user();
        $users = $this->repository->users($channel);
        $reciever = $users->filter(fn($item) => $item->id != $user->id)->first();
        return $reciever;
    }
}
