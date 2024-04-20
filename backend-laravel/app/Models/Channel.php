<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Channel extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'type'
    ];

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class)->withPivot('message')->withTimestamps();
    }
}
