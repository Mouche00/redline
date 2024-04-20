<?php

namespace App\Services\implementations;

use App\Repositories\Interfaces\VoteRepositoryInterface;
use App\Services\Interfaces\VoteServiceInterface;
use App\Traits\MorphTrait;
use App\Traits\ResponseTrait;

class VoteService implements VoteServiceInterface
{
    use ResponseTrait, MorphTrait;
    private VoteRepositoryInterface $repository;

    public function __construct(VoteRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function upvote($voteable, $id)
    {
        $exists = $this->repository->exists($voteable, $id);
        if($exists){

        } else {
            $user = auth()->user();
            $data = [
                'up' => true,
                'user_id' => $user->id
            ];

            $voteable = $this->morph($voteable, $id);

            $this->repository->create($voteable, $data);
        }
    }

    public function downvote($voteable, $id)
    {
        $exists = $this->repository->exists($voteable, $id);
        if($exists){

        } else {
            $user = auth()->user();
            $data = [
                'up' => false,
                'user_id' => $user->id
            ];

            $voteable = $this->morph($voteable, $id);

            $this->repository->create($voteable, $data);
        }
    }

    public function vote($voteable, $id)
    {

    }
}
