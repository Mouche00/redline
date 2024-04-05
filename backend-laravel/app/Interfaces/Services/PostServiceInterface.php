<?php

namespace App\Interfaces\Services;

use App\Models\Medium;

interface PostServiceInterface
{
    public function store(array $data, Medium $medium);
}
