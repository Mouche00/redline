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

    public function store($payload)
    {
        $user = auth()->user();
        extract($payload);
        $channel = $this->repository->fetch($reciever);
        $exists = $channel && $this->repository->exists($channel, $user->id);
        if(! $exists){
            $payload = [$reciever, $user->id];
            $channel = $this->repository->create($payload);
        } else {
            throw new Exception('Channel already exists');
        }

        return $channel;
    }
}
