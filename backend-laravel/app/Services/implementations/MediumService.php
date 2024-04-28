<?php

namespace App\Services\implementations;

use App\Helpers\ArrayHelper;
use App\Models\Crew;
use App\Repositories\Interfaces\MediumRepositoryInterface;
use App\Services\Interfaces\MediumServiceInterface;
use App\Traits\ImageServiceTrait;
use App\Traits\ResponseTrait;

class MediumService implements MediumServiceInterface
{
    use ResponseTrait, ImageServiceTrait;
    private MediumRepositoryInterface $repository;

    public function __construct(MediumRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function allCategories()
    {
        $categories = $this->repository->allCategories();

        return $categories;
    }

    public function store($data)
    {
        $filteredData = ArrayHelper::filterByKey($data, ['crew', 'poster', 'background', 'visuals'], FALSE);

        $user = auth()->user();
        $medium = $this->repository->create($user, $filteredData);

        $path = $this->storeImage($data, 'poster');
        $this->repository->uploadPoster($medium, $path);

        $path = $this->storeImage($data, 'background');
        $this->repository->uploadBackground($medium, $path);

        $medium->users()->updateExistingPivot($user, [
            'is_moderator_at' => now()
        ]);

        $visuals = ArrayHelper::filterByKey($data, ['visuals']);
        if($visuals) {
            foreach($visuals as $visual){
                $path = $this->forceStoreImage($visual);
                $this->repository->uploadImage($medium, $path);
            }
        }

        $crew = ArrayHelper::filterByKey($data, ['crew']);
        if($crew){
            foreach($crew as $id){
                Crew::find($id)->update([
                    'validated_at' => now()
                ]);
            }
            $this->repository->attach($medium, $crew);
        }

        return $medium;
    }

    public function approve($medium)
    {
        $data = [
            'validated_at' => now()
        ];
        $this->repository->update($medium, $data);
    }

    public function reject($medium)
    {
        $this->repository->delete($medium);
    }
}
