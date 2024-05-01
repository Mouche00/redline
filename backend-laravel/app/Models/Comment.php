<?php

namespace App\Models;

use App\Helpers\VoteHelper;
use App\Models\Traits\VoteMorphTrait;
use App\Traits\ContentRelationTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory, ContentRelationTrait;
    protected $guarded = [];
    protected $with = ['content.user', 'votes'];
    protected $appends = ['points'];

    public function commentable()
    {
        return $this->morphTo();
    }
}
