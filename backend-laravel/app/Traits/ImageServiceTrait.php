<?php

namespace App\Traits;

trait ImageServiceTrait {
    public function uploadImage($id, $payload)
    {
        if(array_key_exists('image', $payload)){
            $image = $payload['image'];
            $name = time() . '-' . $image->getClientOriginalName();
            $image->move(public_path('uploads'), $name);
            $this->repository->uploadImage($id, $name);
        }
    }

    public function updateImage($id, $payload)
    {
        if(array_key_exists('image', $payload)){
            $image = $payload['image'];
            $name = time() . '-' . $image->getClientOriginalName();
            $image->move(public_path('uploads'), $name);
            $this->repository->updateImage($id, $name);
        }
    }
}