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
            'name' => $supplier->name,
            'created_at' => $supplier->created_at->toIso8601String(),
            'updated_at' => $supplier->updated_at->toIso8601String(),
        ];
    }

}