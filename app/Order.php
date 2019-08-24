<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = ['order_number'];

    public function order_detail()
    {
        return $this->hasOne(OrderDetail::class);
    }
}
