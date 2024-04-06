<?php

namespace App\Models;

use App\Traits\ContentRelationTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory, ContentRelationTrait;
    protected $guarded = [];

    public function user()
    {
        return $this->hasOneThrough(User::class, Content::class);
    }

    public function medium()
    {
        return $this->hasOneThrough(Medium::class, Content::class);
    }
}
