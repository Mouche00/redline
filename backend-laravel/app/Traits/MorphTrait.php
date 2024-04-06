<?php

namespace App\Traits;
use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\JsonResponse;

trait MorphTrait
{
    public function morph($morphable, $id)
    {
        switch ($morphable) {
        case 'post':
            $morphable = Post::findOrFail($id);
            break;
        case 'comment':
            $morphable =  Comment::findOrFail($id);
            break;
        }

        return $morphable;
    }
}
