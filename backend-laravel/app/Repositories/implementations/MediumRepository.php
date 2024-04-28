<?php

namespace App\Repositories\implementations;

use App\Models\Category;
use App\Models\Image;
use App\Models\Medium;
use App\Repositories\Interfaces\MediumRepositoryInterface;
use App\Traits\ImageRepositoryTrait;

class MediumRepository implements MediumRepositoryInterface
{
    use ImageRepositoryTrait;
    public function allCategories()
    {
        return Category::all();
    }
    public function all()
    {
        return Medium::all();
    }

    public function fetch($id)
    {
        return Medium::find($id);
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
