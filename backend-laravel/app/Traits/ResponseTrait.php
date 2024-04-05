<?php

namespace App\Traits;
use Illuminate\Http\JsonResponse;

trait ResponseTrait
{
    public function responseSuccess($message = "Success", $status = JsonResponse::HTTP_OK, $data = null) : JsonResponse
    {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $data
        ], $status);
    }

    public function responseError($message = "Error", $status = JsonResponse::HTTP_BAD_REQUEST, $errors = null) : JsonResponse
    {
        return response()->json([
            'success' => false,
            'message' => $message,
            'errors' => $errors
        ], $status);
    }
}
