<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('media', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('description');
            $table->unsignedBigInteger('poster')->nullable();
            $table->foreign('poster')->references('id')->on('images')->cascadeOnDelete()->cascadeOnUpdate();
            $table->unsignedBigInteger('background')->nullable();
            $table->foreign('background')->references('id')->on('images')->cascadeOnDelete()->cascadeOnUpdate();
            $table->string('genre');
            $table->date('date');
            $table->string('studio');
            $table->json('misc')->nullable();
            $table->timestamp('validated_at')->nullable();
            $table->string('category');
            $table->foreign('category')->references('name')->on('categories');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('media');
    }
};
