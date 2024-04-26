<?php

namespace App\Traits;

trait ImageRepositoryTrait {
    public function uploadImage($model, $image)
    {
        return $model->image()->create([
            'path' => $image
        ]);
    }

    public function updateImage($model, $image)
    {
        return $model->image()->update([
            'path' => $image
        ]);
    }

    public function deleteImage($model)
    {
        return $model->image()->delete();
    }
}