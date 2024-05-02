<?php

namespace App\Services\Interfaces;

use App\Models\Medium;

interface PostServiceInterface
{
    public function fetch(int $post);
    public function delete(int $post);
    public function store(array $data, Medium $medium);
}
