<?php

namespace App\Models;

use App\Traits\ImageRelationshipTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Crew extends Model
{
    use HasFactory, ImageRelationshipTrait;
    protected $fillable = ['name', 'function'];
    protected $table = 'crew';
    protected $with = ['image'];

    public function media()
    {
        return $this->belongsToMany(Medium::class);
    }
}
