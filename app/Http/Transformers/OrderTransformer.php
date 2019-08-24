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
            'order_number' => $order->order_number,
            'created_at' => $order->created_at->toIso8601String(),
            'updated_at' => $order->updated_at->toIso8601String(),
        ];
    }

}