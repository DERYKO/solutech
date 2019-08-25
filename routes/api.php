<?php

use Dingo\Api\Routing\Router;

$api = app(Router::class);
$api->version('v1', function (Router $api) {
    $api->group(['namespace' => 'App\Http\Controllers'], function (Router $api) {
        $api->post('/login', 'Auth\\LoginController@login');
        $api->get('/logout', 'Auth\\LoginController@logout');
        $api->post('/register','Auth\\RegisterController@register');
        $api->group(['middleware' => ['auth:api']], function (Router $api) {
            $api->resource('/order', 'OrderController');
            $api->resource('/product', 'ProductController');
            $api->resource('/supplier', 'SupplierController');
            $api->resource('/supplier_product', 'SupplierProductController');
            $api->resource('/order_detail', 'OrderDetailController');
            $api->get('/profile',function (\Illuminate\Http\Request $request){
               return $request->user();
            });
        });
    });
});