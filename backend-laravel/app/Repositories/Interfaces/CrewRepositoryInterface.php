<?php

namespace App\Repositories\Interfaces;

interface CrewRepositoryInterface
{
    public function create(array $data);
    public function query(string $payload);
    public function update(Crew $crew, array $data);
    public function fetch(int $crewID);
    public function delete(Crew $crew);
}
