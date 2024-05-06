<?php

namespace App\Repositories\Interfaces;

use App\Models\Medium;
use App\Models\User;

interface MediumRepositoryInterface
{
    public function all();
    public function fetch(int $medium);
    public function allCategories();
    public function create(User $user, array $data);
    public function uploadPoster(Medium $medium, string $path);
    public function uploadBackground(Medium $medium, string $path);
    public function attach(Medium $medium, array $crew);
    public function update(Medium $medium, array $data);
    public function delete(Medium $medium);
}
