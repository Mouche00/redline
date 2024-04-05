<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    protected $guarded = [];

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

    public function medium()
    {
        return $this->hasOneThrough(Medium::class, Content::class);
    }
}
