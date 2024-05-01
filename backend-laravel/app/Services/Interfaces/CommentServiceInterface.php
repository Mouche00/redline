<?php

namespace App\Services\Interfaces;

interface CommentServiceInterface
{
    public function all(string $commentable, int $id);
    public function store(array $data, string $commentable, int $id);
    public function fetch(int $comment);
}
