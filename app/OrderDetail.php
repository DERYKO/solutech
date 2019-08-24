<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderDetail extends Model
{
    protected $fillable = ['order_id', 'product_id'];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
