<?php

namespace App\Repositories\Interfaces;

use App\Models\Medium;

interface PostRepositoryInterface
{
    public function all();
    public function fetch(int $post);
    public function create(array $data, Medium $medium);
}
