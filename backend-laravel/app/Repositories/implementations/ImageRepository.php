<?php

namespace App\Repositories\implementations;

use App\Repositories\Interfaces\ImageRepositoryInterface;

class ImageRepository implements ImageRepositoryInterface
{
    public function create($imageable, $image)
    {
        return $imageable->image()->create([
            'path' => $image
        ]);
    }

    public function update($imageable, $image)
    {
        return $imageable->image()->update([
            'path' => $image
        ]);
    }
}
