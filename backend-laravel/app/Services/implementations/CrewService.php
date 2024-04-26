<?php

namespace App\Services\implementations;

use App\Repositories\Interfaces\CrewRepositoryInterface;
use App\Services\Interfaces\CrewServiceInterface;
use App\Traits\ImageServiceTrait;
use App\Traits\ResponseTrait;
use Exception;

class CrewService implements CrewServiceInterface
{
    use ResponseTrait, ImageServiceTrait;
    private CrewRepositoryInterface $repository;

    public function __construct(CrewRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function show($id)
    {
        $crew = $this->repository->fetch($id);
        if(!$crew){
            throw new Exception('No data found');
        }
        return $crew;
    }

    public function search($payload)
    {
        $name = strtolower($payload['query']);
        $crew = $this->repository->query($name);
        if(!$crew->first()){
            throw new Exception('No data found');
        }
        return $crew;
    }

    public function store($payload)
    {
        $crew = $this->repository->create($payload);

        $this->uploadImage($crew, $payload);

        return $crew;
    }

    public function update($crewID, $payload)
    {
        $crew = $this->repository->fetch($crewID);
        if(!$crew){
            dd('notfound');
        }
        $this->repository->update($crew, $payload);
        // $crew = $this->repository->fetch($crewID);
        
        $this->updateImage($crew, $payload);

        return $crew;
    }

    public function destroy($crewID)
    {
        $crew = $this->repository->fetch($crewID);
        if(!$crew){
            throw new Exception('Not Found');
        } else {
            $this->repository->delete($crew);
        }
    }
}
