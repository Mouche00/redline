<?php

namespace App\Providers;

use App\Repositories\CommentRepository;
use App\Repositories\Interfaces\CommentRepositoryInterface;
use App\Repositories\Interfaces\MediumRepositoryInterface;
use App\Repositories\Interfaces\PostRepositoryInterface;
use App\Repositories\Interfaces\UserRepositoryInterface;
use App\Repositories\Interfaces\VoteRepositoryInterface;
use App\Repositories\MediumRepository;
use App\Repositories\PostRepository;
use App\Repositories\UserRepository;
use App\Repositories\VoteRepository;
use App\Services\CommentService;
use App\Services\Interfaces\CommentServiceInterface;
use App\Services\Interfaces\MediumServiceInterface;
use App\Services\Interfaces\PostServiceInterface;
use App\Services\Interfaces\UserServiceInterface;
use App\Services\Interfaces\VoteServiceInterface;
use App\Services\MediumService;
use App\Services\PostService;
use App\Services\UserService;
use App\Services\VoteService;
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
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
