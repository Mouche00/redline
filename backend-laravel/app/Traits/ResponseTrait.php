<?php

namespace App\Traits;
use Illuminate\Http\JsonResponse;

trait ResponseTrait
{
    public function responseSuccess($data = null, $message = "Success", $status = JsonResponse::HTTP_OK): JsonResponse
    {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $data
        ], $status);
    }

    public function responseError($errors = null, $message = "Error", $status = JsonResponse::HTTP_BAD_REQUEST): JsonResponse
    {
        return response()->json([
            'success' => false,
            'message' => $message,
            'errors' => $errors
        ], $status);
    }
}
