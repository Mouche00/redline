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

    public function all($type)
    {
        switch($type){
            case 'new':
                $mediums = $this->repository->new();
                break;
            case 'popular':
                $mediums = $this->repository->popular();
                break;
            case 'upcoming':
                $mediums = $this->repository->upcoming();
                break;
        }

        return $mediums;
    }

    public function allCategories()
    {
        $categories = $this->repository->allCategories();

        return $categories;
    }

    public function ban($medium, $payload)
    {
        $userID = $payload['user_id'];
        $ban = $this->repository->ban($medium, $userID);

        return $ban;
    }

    public function fetch($id)
    {
        $medium = $this->repository->fetch($id);

        return $medium;
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
        if(array_key_exists('visuals', $data)){
            $visuals = ArrayHelper::filterByKey($data, ['visuals']);
            if($visuals) {
                foreach($visuals as $visual){
                    $path = $this->forceStoreImage($visual);
                    $this->repository->uploadImage($medium, $path);
                }
            }
        }

        if(array_key_exists('crew', $data)){
            $crew = ArrayHelper::filterByKey($data, ['crew']);
            if($crew){
                foreach($crew as $id){
                    Crew::find($id)->update([
                        'validated_at' => now()
                    ]);
                }
                $this->repository->attach($medium, $crew);
            }
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
