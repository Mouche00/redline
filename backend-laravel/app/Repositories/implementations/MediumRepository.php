<?php

namespace App\Repositories\implementations;

use App\Models\Category;
use App\Models\Image;
use App\Models\Medium;
use App\Models\User;
use App\Repositories\Interfaces\MediumRepositoryInterface;
use App\Traits\ImageRepositoryTrait;

class MediumRepository implements MediumRepositoryInterface
{
    use ImageRepositoryTrait;
    public function all()
    {
        return Medium::latest()->with('poster', 'background', 'visuals', 'crew', 'users')->get();
    }

    public function new()
    {
        return Medium::latest()->with('poster', 'background')->get();
    }

    public function upcoming()
    {
        return Medium::latest()->where('date', '>', now())->with('poster', 'background')->get();
    }

    public function popular()
    {
        return Medium::latest()->with('poster', 'background', 'posts')->withCount('posts')->orderByDesc('posts_count')->get();
    }

    public function allCategories()
    {
        return Category::all();
    }

    public function ban($medium, $user)
    {
        return User::find($user)->media()->updateExistingPivot($medium, [
            'is_banned_at' => now(),
            'is_moderator_at' => null
        ]);
    }

    public function fetch($id)
    {
        return Medium::find($id)->load('users', 'posts.medium');
    }

    public function uploadPoster($medium, $data)
    {
        $image = Image::create([
            'path' => $data
        ]);

        return $medium->poster()->associate($image)->save();
    }

    public function uploadBackground($medium, $data)
    {
        $image = Image::create([
            'path' => $data
        ]);

        return $medium->background()->associate($image)->save();
    }

    public function create($user, $data)
    {
        return $user->media()->create($data);
    }

    public function attach($medium, $crew)
    {
        return $medium->crew()->attach($crew);
    }

    public function update($medium, $data)
    {
        return $medium->update($data);
    }

    public function delete($medium)
    {
        return $medium->delete();
    }
}
