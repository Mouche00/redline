<?php

namespace App\Repositories\implementations;

use App\Models\Category;
use App\Models\Medium;
use App\Repositories\Interfaces\MediumRepositoryInterface;

class MediumRepository implements MediumRepositoryInterface
{
    public function allCategories()
    {
        return Category::all();
    }
    public function all()
    {
        return Medium::all();
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
