<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 8/24/19
 * Time: 12:38 PM
 */

namespace App\Http\Transformers;


use App\Product;
use League\Fractal\TransformerAbstract;

class ProductTransformer extends TransformerAbstract
{
    public function transform(Product $product)
    {
        return [
            'name' => $product->name,
            'description' => $product->description,
            'quantity' => $product->quantity,
            'created_at' => $product->created_at->toIso8601String(),
            'updated_at' => $product->updated_at->toIso8601String(),
        ];
    }

}