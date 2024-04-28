<?php

namespace App\Helpers;

class ArrayHelper
{
    public static function filterByKey(array $array, array $keys, bool $include = TRUE)
    {
        $newArray = array_filter($array, fn($item) => $include ? in_array($item, $keys) : !in_array($item, $keys), ARRAY_FILTER_USE_KEY);
        return sizeof($keys) > 1 ? $newArray : $newArray[$keys[0]];
    }
}