<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ChannelController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\CrewController;
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

Route::controller(CrewController::class)->group(function () {
    Route::get('/crew', 'search');
    Route::get('/crew/{id}', 'show');
    Route::post('/crew/store', 'store');
    Route::put('/crew/{crew}/update', 'update');
    Route::delete('/crew/{crew}/destroy', 'destroy');
});

Route::controller(MediumController::class)->group(function () {
    Route::get('/mediums/{type}', 'all');
    Route::post('/medium/{medium}/ban', 'ban');
    Route::get('/categories', 'allCategories');
    Route::get('/medium/{medium}', 'show');
    Route::post('/medium/store', 'store');
    Route::put('/medium/{medium}/approve', 'approve');
    Route::delete('/medium/{medium}/reject', 'reject');
});

Route::controller(PostController::class)->group(function () {
    Route::get('/posts/new', 'new');
    Route::get('/posts/popular', 'popular');
    Route::get('/post/{post}', 'show');
    Route::post('/post/{post}/delete', 'delete');
    Route::post('/medium/{medium}/post', 'store');
    Route::post('/image/store', 'storeImage');
});

Route::controller(CommentController::class)->group(function () {
    Route::get('/{commentable}/{id}/comments', 'all');
    Route::get('/comment/{comment}', 'show');
    Route::post('/{commentable}/{id}/comments/store', 'store');
});

Route::controller(VoteController::class)->group(function () {
    Route::post('/{voteable}/{id}/upvote', 'upvote');
    Route::post('/{voteable}/{id}/downvote', 'downvote');
});

Route::controller(ChannelController::class)->group(function() {
    Route::get('/channels', 'index');
    Route::get('/channels/{channel}', 'show');
    Route::post('/channel/store', 'store');
    Route::get('/channels/{channel}/users', 'reciever');

});

Route::controller(MessageController::class)->group(function() {
    Route::post('/message/store', 'store');
});

// ----------- TEST ROUTES

Route::controller(TestController::class)->group(function () {
    Route::get('/test-message', 'message');
    Route::post('/add-message', 'store');
});

