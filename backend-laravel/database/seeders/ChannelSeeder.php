<?php

namespace Database\Seeders;

use App\Models\Channel;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ChannelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user1 = User::factory()->create([
            'email' => 'test@example.net'
        ]);

        $user2 = User::factory()->create([
            'email' => 'test2@example.net'
        ]);

        Channel::create()->users()->sync([$user1->id, $user2->id]);
    }
}
