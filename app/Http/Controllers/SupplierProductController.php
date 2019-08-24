<?php

namespace App\Http\Controllers;

use App\SupplierProduct;
use Dingo\Api\Routing\Helpers;
use Illuminate\Http\Request;

class SupplierProductController extends Controller
{
    use Helpers;

    public function store(Request $request)
    {
        $request->validate([
            'supplier_id' => ['required', 'exists:suppliers,id'],
            'product_id' => ['required', 'exists:products,id']
        ]);
        SupplierProduct::create([
            'supplier_id' => $request->input('supplier_id'),
            'product_id' => $request->input('product_id')
        ]);
        return $this->response->created();
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'product_id' => ['required', 'exists:products,id']
        ]);
        $supplier_product = SupplierProduct::findOrfail($id);
        $supplier_product->update($request->only(['product_id']));
        return $this->response->accepted();
    }

    public function destroy($id)
    {
        $supplier_product = SupplierProduct::findOrfail($id);
        $supplier_product->delete();
        return $this->response->noContent();
    }

    public function forceDestroy($id)
    {
        $supplier_product = SupplierProduct::findOrfail($id);
        $supplier_product->forceDelete();
        return $this->response->noContent();
    }
}
