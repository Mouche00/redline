<?php

namespace App\Services;

use App\DTOs\UserDTO;
use App\Interfaces\Repositories\MediumRepositoryInterface;
use App\Interfaces\Services\MediumServiceInterface;
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
}
