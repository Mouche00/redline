<?php

namespace App\Providers;

use App\Repositories\implementations\CommentRepository;
use App\Repositories\implementations\MediumRepository;
use App\Repositories\implementations\MessageRepository;
use App\Repositories\implementations\PostRepository;
use App\Repositories\implementations\UserRepository;
use App\Repositories\implementations\VoteRepository;
use App\Repositories\Interfaces\CommentRepositoryInterface;
use App\Repositories\Interfaces\MediumRepositoryInterface;
use App\Repositories\Interfaces\MessageRepositoryInterface;
use App\Repositories\Interfaces\PostRepositoryInterface;
use App\Repositories\Interfaces\UserRepositoryInterface;
use App\Repositories\Interfaces\VoteRepositoryInterface;
use App\Services\implementations\CommentService;
use App\Services\implementations\MediumService;
use App\Services\implementations\MessageService;
use App\Services\implementations\PostService;
use App\Services\implementations\UserService;
use App\Services\implementations\VoteService;
use App\Services\Interfaces\CommentServiceInterface;
use App\Services\Interfaces\MediumServiceInterface;
use App\Services\Interfaces\MessageServiceInterface;
use App\Services\Interfaces\PostServiceInterface;
use App\Services\Interfaces\UserServiceInterface;
use App\Services\Interfaces\VoteServiceInterface;
use Illuminate\Support\ServiceProvider;

class ServiceRepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(UserServiceInterface::class, UserService::class);
        $this->app->bind(UserRepositoryInterface::class, UserRepository::class);

        $this->app->bind(MediumServiceInterface::class, MediumService::class);
        $this->app->bind(MediumRepositoryInterface::class, MediumRepository::class);

        $this->app->bind(PostServiceInterface::class, PostService::class);
        $this->app->bind(PostRepositoryInterface::class, PostRepository::class);

        $this->app->bind(CommentServiceInterface::class, CommentService::class);
        $this->app->bind(CommentRepositoryInterface::class, CommentRepository::class);

        $this->app->bind(VoteServiceInterface::class, VoteService::class);
        $this->app->bind(VoteRepositoryInterface::class, VoteRepository::class);

        $this->app->bind(MessageServiceInterface::class, MessageService::class);
        $this->app->bind(MessageRepositoryInterface::class, MessageRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
