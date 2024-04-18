<?php

namespace App\Services\Interfaces;

use App\Models\Medium;

interface PostServiceInterface
{
    public function store(array $data, Medium $medium);
}
