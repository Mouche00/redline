<?php

namespace App\Traits;
use App\Helpers\VoteHelper;
use App\Models\Comment;
use App\Models\Content;
use App\Models\User;
use App\Models\Vote;

trait ContentRelationTrait {
    public function votes()
    {
        return $this->morphMany(Vote::class, 'voteable');
    }

    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    public function content()
    {
        return $this->morphOne(Content::class, 'contentable');
    }

    public function user()
    {
        return $this->hasOneThrough(User::class, Content::class);
    }

    public function getPointsAttribute()
    {
        return VoteHelper::calculate($this->votes);
    }
}
