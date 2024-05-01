<?php

namespace App\Helpers;

class VoteHelper
{
    public static function calculate($votes)
    {
        $upvotes = $votes->filter(fn($vote) => $vote->up)->all();
        $downvotes = $votes->filter(fn($vote) => !$vote->up)->all();
        $votes = sizeof($upvotes) - sizeof($downvotes);
        return $votes;
    }

    public static function concatPoints($collection)
    {
        return $collection->map(function($item) {
            $item['points'] = VoteHelper::calculate($item->votes);
            return $item;
        });
    }
}