<?php

namespace App\Services\implementations;

use App\Events\MessageSent;
use App\Repositories\Interfaces\MessageRepositoryInterface;
use App\Services\Interfaces\MessageServiceInterface;
use App\Traits\ResponseTrait;

class MessageService implements MessageServiceInterface
{
    use ResponseTrait;
    private MessageRepositoryInterface $repository;

    public function __construct(MessageRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function store($data)
    {
        $user = auth()->user();
        extract($data);
        $message = $this->repository->create($user, $channel, $message);

        broadcast(new MessageSent($user, $channel, $message));

        return $message;
    }
}
