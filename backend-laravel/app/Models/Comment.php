<?php

namespace App\Models;

use App\Models\Traits\VoteMorphTrait;
use App\Traits\ContentRelationTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory, ContentRelationTrait;
    protected $guarded = [];

    public function commentable()
    {
        return $this->morphTo();
    }
}
