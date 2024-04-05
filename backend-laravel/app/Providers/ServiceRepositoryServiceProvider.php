<?php

namespace App\Providers;

use App\Interfaces\Repositories\CommentRepositoryInterface;
use App\Interfaces\Repositories\MediumRepositoryInterface;
use App\Interfaces\Repositories\PostRepositoryInterface;
use App\Interfaces\Repositories\UserRepositoryInterface;
use App\Interfaces\Repositories\VoteRepositoryInterface;
use App\Interfaces\Services\CommentServiceInterface;
use App\Interfaces\Services\MediumServiceInterface;
use App\Interfaces\Services\PostServiceInterface;
use App\Interfaces\Services\UserServiceInterface;
use App\Interfaces\Services\VoteServiceInterface;
use App\Repositories\CommentRepository;
use App\Repositories\MediumRepository;
use App\Repositories\PostRepository;
use App\Repositories\UserRepository;
use App\Repositories\VoteRepository;
use App\Services\CommentService;
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
