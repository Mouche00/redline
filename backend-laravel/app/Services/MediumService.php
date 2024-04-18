<?php

namespace App\Services;

use App\Repositories\Interfaces\MediumRepositoryInterface;
use App\Services\Interfaces\MediumServiceInterface;
use App\Traits\ResponseTrait;

class MediumService implements MediumServiceInterface
{
    use ResponseTrait;
    private MediumRepositoryInterface $repository;

    public function __construct(MediumRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function store($data)
    {
        $people = $data['people'];
        $data = array_filter($data, fn($data) => !in_array($data, ['people']), ARRAY_FILTER_USE_KEY);

        $user = auth()->user();
        $medium = $this->repository->create($user, $data);
        $medium->users()->updateExistingPivot($user, [
            'is_moderator_at' => now()
        ]);

        $medium->people()->attach($people);

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
