<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Content extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function contentable()
    {
        return $this->morphTo();
    }

    public function media()
    {
        return $this->belongsTo(Medium::class);
    }

    public function user()
    {
        return $this->hasOneThrough(User::class, Content::class);
    }
}
