<?php

namespace App\Services\Interfaces;
use App\Models\Crew;

interface CrewServiceInterface
{
    public function show(int $payload);
    public function search(array $payload);
    public function store(array $payload);
    public function update(int $crewID, array $payload);
    public function destroy(int $crewID);
}
