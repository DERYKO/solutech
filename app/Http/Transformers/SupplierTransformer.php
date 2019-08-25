<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 8/24/19
 * Time: 1:01 PM
 */

namespace App\Http\Transformers;


use App\Supplier;
use League\Fractal\TransformerAbstract;

class SupplierTransformer extends TransformerAbstract
{
    public function transform(Supplier $supplier)
    {
        return [
            'id' => $supplier->id,
            'name' => $supplier->name,
            'created_at' => $supplier->created_at->toIso8601String(),
            'updated_at' => $supplier->updated_at->toIso8601String(),
            'products' => $supplier->products->map(function ($product){
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