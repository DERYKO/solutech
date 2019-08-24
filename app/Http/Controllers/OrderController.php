<?php

namespace App\Http\Controllers;

use App\Http\Transformers\OrderTransformer;
use App\Order;
use App\OrderDetail;
use Dingo\Api\Routing\Helpers;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    use Helpers;
    protected $transformer;

    /**
     * OrderController constructor.
     */
    public function __construct(OrderTransformer $transformer)
    {
        $this->transformer = $transformer;
    }

    public function index(Request $request)
    {
        $orders = Order::paginate($request->input('per_page', 10));
        return $this->response->paginator($orders, $this->transformer);
    }

    public function show($id)
    {
        $order = Order::findOrfail($id);
        return $this->response->item($order, $this->transformer);
    }

    public function store(Request $request)
    {
        $request->validate([
            'order_number' => ['required']
        ]);
        $order = Order::create([
            'order_number' => $request->input('order_number')
        ]);
        return $this->response->item($order, $this->transformer);
    }

    public function update(Request $request, $id)
    {
        $order = Order::findOrfail($id);
        $order->update($request->only('order_number'));
        return $this->response->item($order, $this->transformer);
    }

    public function destroy($id)
    {
        $order = Order::findOrfail($id);
        $order->delete();
        return $this->response->noContent();
    }

    public function permanentDestroy($id)
    {
        OrderDetail::where('order_id', $id)->forceDelete();
        Order::findOrfail($id)->forceDelete();
        return $this->response->noContent();
    }
}

