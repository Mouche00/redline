<?php

namespace App\Services\Interfaces;


interface ChannelServiceInterface
{
    public function all();
    public function store(array $payload);
    public function get(int $channel);
    public function reciever($channel);
}