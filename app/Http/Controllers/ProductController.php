<?php

namespace App\Http\Controllers;

use App\Http\Transformers\ProductTransformer;
use App\OrderDetail;
use App\Product;
use App\Supplier;
use App\SupplierProduct;
use Dingo\Api\Routing\Helpers;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    use Helpers;
    protected $transformer;

    /**
     * ProductController constructor.
     */
    public function __construct(ProductTransformer $transformer)
    {
        $this->transformer = $transformer;
    }

    public function index(Request $request)
    {
        $products = Product::paginate($request->input('per_page', 10));
        return $this->response->paginator($products, $this->transformer);
    }

    public function show($id)
    {
        $product = Product::findOrfail($id);
        return $this->response->item($product, $this->transformer);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required'],
            'description' => ['required'],
            'quantity' => ['required']
        ]);
        Product::create([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'quantity' => $request->input('quantity')
        ]);
        $products = Product::paginate($request->input('per_page', 10));
        return $this->response->paginator($products, $this->transformer);
    }

    public function update(Request $request, $id)
    {
        $product = Product::findOrfail($id);
        $product->update($request->only(['name', 'description', 'quantity']));
        $products = Product::paginate($request->input('per_page', 10));
        return $this->response->paginator($products, $this->transformer);
    }

    public function destroy(Request $request, $id)
    {
        OrderDetail::where('product_id', $id)->forceDelete();
        SupplierProduct::where('product_id', $id)->forceDelete();
        $product = Product::findOrfail($id);
        $product->delete();
        $products = Product::paginate($request->input('per_page', 10));
        return $this->response->paginator($products, $this->transformer);
    }

    public function permanentDestroy(Request $request, $id)
    {
        OrderDetail::where('product_id', $id)->forceDelete();
        SupplierProduct::where('product_id', $id)->forceDelete();
        Product::findOrfail($id)->forceDelete();
        $products = Product::paginate($request->input('per_page', 10));
        return $this->response->paginator($products, $this->transformer);
    }
}
