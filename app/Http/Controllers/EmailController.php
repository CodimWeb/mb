<?php

namespace App\Http\Controllers;

use App\Models\Email;
use Illuminate\Http\Request;

class EmailController extends Controller
{
    public function add(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        $email = new Email($request->all());
        $email->save();

        return response()->json(["success" => true, "message" => "Success"]);
    }
}
