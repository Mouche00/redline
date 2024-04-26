<?php

namespace Database\Seeders;

use App\Models\Crew;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CrewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Crew::factory(5)->create();
    }
}
