<?php

namespace App\Providers;

use App\Interfaces\Repositories\MediumRepositoryInterface;
use App\Interfaces\Repositories\PostRepositoryInterface;
use App\Interfaces\Repositories\UserRepositoryInterface;
use App\Interfaces\Services\MediumServiceInterface;
use App\Interfaces\Services\PostServiceInterface;
use App\Interfaces\Services\UserServiceInterface;
use App\Repositories\MediumRepository;
use App\Repositories\PostRepository;
use App\Repositories\UserRepository;
use App\Services\MediumService;
use App\Services\PostService;
use App\Services\UserService;
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
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
