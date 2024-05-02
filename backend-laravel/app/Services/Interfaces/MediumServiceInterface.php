<?php

namespace App\Services\Interfaces;

use App\Models\Medium;

interface MediumServiceInterface
{
    public function all(string $type);
    public function allCategories();
    public function ban(int $medium, array $data);
    public function fetch(int $medium);
    public function store(array $data);
    public function approve(Medium $medium);
    public function reject(Medium $medium);
}
