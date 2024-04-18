<?php

namespace App\Services\Interfaces;

interface CommentServiceInterface
{
    public function store(array $data, string $commentable, int $id);
}
