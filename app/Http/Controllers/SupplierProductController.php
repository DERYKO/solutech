<?php

namespace App\Http\Controllers;

use App\Http\Transformers\SupplierTransformer;
use App\Supplier;
use App\SupplierProduct;
use Dingo\Api\Routing\Helpers;
use Illuminate\Http\Request;

class SupplierProductController extends Controller
{
    use Helpers;

    public function store(Request $request)
    {
        $request->validate([
            'supplier_id' => ['required','exists:suppliers,id'],
            'product_id' => ['required','exists:products,id']
        ]);
        SupplierProduct::create([
            'supplier_id' => $request->input('supplier_id'),
            'product_id' => $request->input('product_id')
        ]);
        $supplier = Supplier::where('id',$request->input('supplier_id'))->first();
        return $this->response->item($supplier,new SupplierTransformer());
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'product_id' => ['required','exists:products,id']
        ]);
        $supplier_product = SupplierProduct::findOrfail($id);
        $supplier_product->update($request->only(['product_id']));
        $supplier = Supplier::where('id',$id)->first();
        return $this->response->item($supplier,new SupplierTransformer());
    }

    public function destroy($product_id)
    {
        $supplier_product = SupplierProduct::findOrfail($product_id);
        $supplier = Supplier::where('id',$supplier_product->supplier_id)->first();
        $supplier_product->delete();
        return $this->response->item($supplier,new SupplierTransformer());
    }

    public function forceDestroy($id)
    {
        $supplier_product = SupplierProduct::findOrfail($id);
        $supplier_product->forceDelete();
        return $this->response->noContent();
    }
}
