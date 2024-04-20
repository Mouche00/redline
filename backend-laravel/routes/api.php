<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ChannelController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\MediumController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\VoteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(AuthController::class)->group(function () {
    Route::post('/register', 'register');
    Route::post('/login', 'login');
});

Route::controller(MediumController::class)->group(function () {
    Route::post('/medium/store', 'store');
    Route::put('/medium/{medium}/approve', 'approve');
    Route::delete('/medium/{medium}/reject', 'reject');
});

Route::controller(PostController::class)->group(function () {
    Route::post('/medium/{medium}/post/store', 'store');
});

Route::controller(CommentController::class)->group(function () {
    Route::post('/{commentable}/{id}/comment/store', 'store');
});

Route::controller(VoteController::class)->group(function () {
    Route::post('/{voteable}/{id}/upvote', 'upvote');
    Route::post('/{voteable}/{id}/downvote', 'downvote');
});

Route::controller(ChannelController::class)->group(function() {
    Route::post('/chat/store', 'store');
});

Route::controller(MessageController::class)->group(function() {
    Route::post('/message/store', 'store');
});

// ----------- TEST ROUTES

Route::controller(TestController::class)->group(function () {
    Route::get('/test-message', 'message');
    Route::post('/add-message', 'store');
});

