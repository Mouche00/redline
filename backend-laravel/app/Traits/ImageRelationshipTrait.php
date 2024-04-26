<?php

namespace App\Traits;
use App\Models\Image;

trait ImageRelationshipTrait {
    public function image()
    {
        return $this->morphOne(Image::class, 'imageable');
    }
}