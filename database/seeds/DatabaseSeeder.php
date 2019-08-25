<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Product::class,15)->create();
        factory(\App\Supplier::class,20)->create();
        factory(\App\Order::class,20)->create();
    }
}
