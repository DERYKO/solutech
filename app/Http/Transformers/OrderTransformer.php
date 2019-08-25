<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 8/24/19
 * Time: 12:20 PM
 */

namespace App\Http\Transformers;


use App\Order;
use League\Fractal\TransformerAbstract;

class OrderTransformer extends TransformerAbstract
{
    public function transform(Order $order)
    {
        return [
            'id' => $order->id,
            'order_number' => $order->order_number,
            'created_at' => $order->created_at->toIso8601String(),
            'updated_at' => $order->updated_at->toIso8601String(),
            'products' => $order->order_detail->map(function ($product) {
                return [
                    'id' => $product->id,
                    'name' => $product->product->name,
                    'quantity' =>$product->product->quantity,
                    'description' =>$product->product->description,
                    'created_at' => $product->product->created_at->toIso8601String(),
                ];
            })
        ];
    }

}