<?php

namespace App\Http\Controllers\Panel;

use Illuminate\Http\Request;
use App\Models\ActualPromoCodes;
use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class PromoCodeAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json([
            "success" => "true",
            "message" => "Actual promo code list.",
            ActualPromoCodes::all()->toArray()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $request->validate([
            "code"        => "required|string",
            "sum"         => "required|numeric|min:1",
            "is_personal" => "sometimes|boolean",
            "user"        => "required|integer",
            "active"      => "required|boolean",
        ]);
        $promo_code = ActualPromoCodes::create($request->toArray());

        return response()->json([
            "success" => true,
            "message" => "Actual promo code successfully created.",
            "promocode" => $promo_code
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $promo_code = $this->get($id);

        return response()->json([
            "success" => true,
            "message" => "Actual promo code data.",
            $promo_code
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $promo_code = $this->get($id);

        $promo_code->update($request->toArray());

        return response()->json([
            "success" => true,
            "message" => "Actual promo code successfully updated.",
            $promo_code
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $promo_code = $this->get($id);

        $promo_code->delete();

        return response()->json([
            "success" => true,
            "message" => "Actual promo code successfully deleted."
        ]);
    }


    /**
     * @param $id
     *
     * @return ActualPromoCodes
     * @throws
     */
    public function get($id): ActualPromoCodes
    {
         $promo_code = ActualPromoCodes::where('id', $id)->first();
        if (! $promo_code) {
            throw new ModelNotFoundException("Actual promo code not found.", 404);
        }
        return  $promo_code;
    }
}
