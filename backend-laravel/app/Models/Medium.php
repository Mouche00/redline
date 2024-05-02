<?php

namespace App\Models;

use App\Traits\ImageRelationshipTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Medium extends Model
{
    use HasFactory, SoftDeletes, ImageRelationshipTrait;

    protected $guarded = [];
    protected $with = ['poster', 'background', 'posts', 'crew', 'visuals', 'users'];

    public function users()
    {
        return $this->belongsToMany(User::class)->withPivot('is_banned_at', 'is_moderator_at');
    }

    public function crew()
    {
        return $this->belongsToMany(Crew::class);
    }

    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    public function poster()
    {
        return $this->belongsTo(Image::class, 'poster_id');
    }

    public function background()
    {
        return $this->belongsTo(Image::class, 'background_id');
    }

    public function visuals()
    {
        return $this->morphMany(Image::class, 'imageable');
    }

}
