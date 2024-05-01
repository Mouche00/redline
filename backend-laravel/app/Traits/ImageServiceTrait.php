<?php

namespace App\Traits;

trait ImageServiceTrait {
    public function uploadImage($id, $payload)
    {
        $name = $this->storeImage($payload);
        if($name){
            $this->repository->uploadImage($id, $name);
        }
    }

    public function updateImage($id, $payload)
    {
        $name = $this->storeImage($payload);
        if($name){
            $this->repository->updateImage($id, $name);
        }
    }

    public function storeImage($payload, $key = 'image')
    {
        if(array_key_exists($key, $payload)){
            $image = $payload[$key];
            return $this->forceStoreImage($image);
        }
        throw new \Exception('Failed to store image');
    }

    public function forceStoreImage($image)
    {
        $name = time() . '-' . trim($image->getClientOriginalName());
        $image->move(public_path('uploads'), $name);
        return $name;
    }
}