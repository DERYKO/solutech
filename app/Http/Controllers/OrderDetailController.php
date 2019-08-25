<?php

namespace App\Http\Controllers;

use App\Http\Transformers\OrderTransformer;
use App\Order;
use App\OrderDetail;
use Dingo\Api\Routing\Helpers;
use Illuminate\Http\Request;

class OrderDetailController extends Controller
{
    use Helpers;

    public function store(Request $request)
    {
        $request->validate([
            'order_id' => ['required', 'exists:orders,id'],
            'product_id' => ['required', 'exists:products,id']
        ]);
        OrderDetail::create([
            'order_id' => $request->input('order_id'),
            'product_id' => $request->input('product_id')
        ]);
        $order = Order::where('id',$request->input('order_id'))->first();
        return $this->response->item($order,new OrderTransformer());
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'product_id' => ['required', 'exists:products,id']
        ]);
        $supplier_product = OrderDetail::findOrfail($id);
        $supplier_product->update($request->only(['product_id']));
        $order = Order::where('id',$supplier_product->order_id)->first();
        return $this->response->item($order,new OrderTransformer());
    }

    public function destroy($id)
    {
        $supplier_product = OrderDetail::findOrfail($id);
        $supplier_product->delete();
        $order = Order::where('id',$supplier_product->order_id)->first();
        return $this->response->item($order,new OrderTransformer());
    }

    public function forceDestroy($id)
    {
        $supplier_product = OrderDetail::findOrfail($id);
        $supplier_product->forceDelete();
        return $this->response->noContent();
    }
}
