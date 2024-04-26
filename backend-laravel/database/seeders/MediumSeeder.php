<?php

namespace Database\Seeders;

use App\Models\Crew;
use App\Models\Medium;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MediumSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Medium::factory(3)->has(Crew::factory(3))->create();
    }
}
