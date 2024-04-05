<?php

namespace App\Interfaces\Services;

use App\Models\Medium;
use Illuminate\Database\Eloquent\Model;

interface CommentServiceInterface
{
    public function store(array $data, string $commentable, int $id);
}
