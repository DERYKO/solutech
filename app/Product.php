<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['name', 'description', 'quantity'];

    public function order_details()
    {
        return $this->belongsToMany(OrderDetail::class);
    }

    public function supplier_products()
    {
        return $this->belongsToMany(SupplierProduct::class);
    }
}
