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
        Schema::create('crew_medium', function (Blueprint $table) {
            $table->id();
            $table->foreignId('medium_id')->constrained('media')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('crew_id')->constrained('crew')->cascadeOnDelete()->cascadeOnUpdate();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('crew_medium');
    }
};