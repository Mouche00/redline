<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function imageable()
    {
        $this->morphTo();
    }

    public function poster()
    {
        return $this->hasOne(Medium::class, 'poster_id');
    }

    public function background()
    {
        return $this->hasOne(Medium::class, 'background_id');
    }
}
