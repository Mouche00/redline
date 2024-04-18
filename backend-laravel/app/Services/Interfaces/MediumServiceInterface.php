<?php

namespace App\Services\Interfaces;

use App\Models\Medium;

interface MediumServiceInterface
{
    public function store(array $data);
    public function approve(Medium $medium);
    public function reject(Medium $medium);
}
