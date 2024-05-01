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
        $user = auth()->user();
        $voteable = $this->morph($voteable, $id);
        $vote = $this->repository->fetch($user->id, $voteable, $id);
        if($vote){
            $vote->delete();
        } else {
            $user = auth()->user();
            $data = [
                'up' => true,
                'user_id' => $user->id
            ];


            $this->repository->create($voteable, $data);
        }
    }

    public function downvote($voteable, $id)
    {
        $user = auth()->user();
        $voteable = $this->morph($voteable, $id);
        $vote = $this->repository->fetch($user->id, $voteable, $id);
        if($vote){
            $vote->delete();
        } else {
            $user = auth()->user();
            $data = [
                'up' => false,
                'user_id' => $user->id
            ];


            $this->repository->create($voteable, $data);
        }
    }
}
