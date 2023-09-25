<?php

namespace App\Http\Controllers\Panel;

use Illuminate\Http\Request;
use App\Models\ActualAdminProp;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ActualAdminPropsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        return response()->json([
            "success" => "true",
            "message" => "Actual admin props list.",
            ActualAdminProp::all()->toArray()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $request->validate([
            "key"                   => "sometimes|string",
            "value"                 => "sometimes|string",
        ]);
        $admin_prop = ActualAdminProp::create($request->toArray());

        return response()->json([
            "success" => "true",
            "message" => "Actual admin prop successfully created.",
            $admin_prop
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function show($id)
    {
        $admin_prop = $this->get($id);

        return response()->json([
            "success" => "true",
            "message" => "Actual admin prop data.",
            $admin_prop
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  int  $id
     * @return JsonResponse
     */
    public function update(Request $request, $id)
    {

        $admin_prop = $this->get($id);

        $admin_prop->update($request->toArray());

        return response()->json([
            "success" => "true",
            "message" => "Actual admin prop successfully updated.",
            $admin_prop
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function destroy($id)
    {
        $admin_prop = $this->get($id);

        $admin_prop->delete();

        return response()->json([
            "success" => "true",
            "message" => "Actual admin prop successfully deleted."
        ]);
    }


    /**
     * @param $id
     *
     * @return ActualAdminProp
     * @throws
     */
    public function get($id): ActualAdminProp
    {
        $admin_prop = ActualAdminProp::where('id', $id)->first();
        if (!$admin_prop) {
            throw new ModelNotFoundException("Actual admin prop not found.", 404);
        }
        return $admin_prop;
    }



}
