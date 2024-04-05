<?php

namespace App\Http\Controllers;

use App\Interfaces\Services\VoteServiceInterface;
use App\Traits\ResponseTrait;
use Exception;
use Illuminate\Http\Request;

class VoteController extends Controller
{
    use ResponseTrait;

    private VoteServiceInterface $service;
    public function __construct(VoteServiceInterface $service)
    {
        $this->service = $service;
    }
    public function upvote(string $voteable, int $id)
    {
        try {
            $this->service->upvote($voteable, $id);
        } catch (Exception $e){
            return $this->responseError($e->getMessage());
        }

        return $this->responseSuccess("Upvoted successfully", 201);
    }

    public function downvote(string $voteable, int $id)
    {
        try {
            $this->service->downvote($voteable, $id);
        } catch (Exception $e){
            return $this->responseError($e->getMessage());
        }

        return $this->responseSuccess("Downvoted successfully", 201);
    }
}
