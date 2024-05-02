<?php

namespace App\Repositories\Interfaces;

use App\Models\Medium;
use App\Models\User;

interface MediumRepositoryInterface
{
    public function all();
    public function new();
    public function upcoming();
    public function popular();
    public function fetch(int $id);
    public function allCategories();
    public function ban(int $medium, int $userID);
    public function create(User $user, array $data);
    public function uploadPoster(Medium $medium, string $path);
    public function uploadBackground(Medium $medium, string $path);
    public function attach(Medium $medium, array $crew);
    public function update(Medium $medium, array $data);
    public function delete(Medium $medium);
}
