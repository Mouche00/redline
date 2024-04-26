<?php

namespace App\Repositories\implementations;

use App\Models\Crew;
use App\Repositories\Interfaces\CrewRepositoryInterface;
use App\Traits\ImageRepositoryTrait;
use Illuminate\Database\Eloquent\Builder;

class CrewRepository implements CrewRepositoryInterface
{
    use ImageRepositoryTrait;
    public function create($data)
    {
        return Crew::create($data);
    }

    public function query($payload)
    {
        return Crew::query()->when(
            $payload,
            fn(Builder $builder) => $builder->where('name', 'ilike', "%" . $payload . "%")
        )->latest()->get();
    }

    public function update($crew, $data)
    {
        return $crew->update($data);
    }

    public function fetch($crewID)
    {
        return Crew::find($crewID);
    }

    public function delete($crew)
    {
        $crew->image()->delete();
        return $crew->delete();
    }
}
