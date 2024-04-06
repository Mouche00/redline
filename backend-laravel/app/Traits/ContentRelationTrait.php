<?php

namespace App\Traits;
use App\Models\Comment;
use App\Models\Content;
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
}