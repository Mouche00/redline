<?php

namespace App\Repositories\Interfaces;

interface ImageRepositoryInterface
{
    public function create(Crew|User $imageable, string $image);
    public function update(Crew|User $imageable, string $image);
}
