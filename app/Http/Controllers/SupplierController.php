<?php

namespace App\Http\Controllers;

use App\Http\Transformers\SupplierTransformer;
use App\Supplier;
use App\SupplierProduct;
use Dingo\Api\Routing\Helpers;
use Illuminate\Http\Request;

class SupplierController extends Controller
{
    use Helpers;
    protected $transformer;

    /**
     * SupplierController constructor.
     */
    public function __construct(SupplierTransformer $transformer)
    {
        $this->transformer = $transformer;
    }

    public function index(Request $request)
    {
        $suppliers = Supplier::paginate($request->input('per_page', 10));
        return $this->response->paginator($suppliers, $this->transformer);
    }

    public function show($id)
    {
        $supplier = Supplier::findOrfail($id);
        return $this->response->item($supplier, $this->transformer);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required']
        ]);
        $supplier = Supplier::create([
            'name' => $request->input('name')
        ]);
        return $this->response->item($supplier, $this->transformer);
    }

    public function update(Request $request, $id)
    {
        $supplier = Supplier::findOrfail($id);
        $supplier->update($request->only('name'));
        return $this->response->item($supplier, $this->transformer);
    }

    public function destroy($id)
    {
        Supplier::findOrfail($id)->delete();
        return $this->response->noContent();
    }

    public function forceDestroy($id)
    {
        SupplierProduct::where('supplier_id', $id)->forceDelete();
        Supplier::findOrfail($id)->forceDelete();
        return $this->response->noContent();
    }
}
