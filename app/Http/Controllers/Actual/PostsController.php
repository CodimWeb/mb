<?php

namespace App\Http\Controllers\Actual;

use App\Models\ActualPost;
use Illuminate\Http\Request;
use App\Models\ActualLanguage;
use App\Models\ActualPostCategory;
use App\Http\Controllers\Controller;

class PostsController extends Controller
{
    public function list(Request $request)
    {
        $request->validate([
          "language" => "required|min:2",
          "category" => "required"
        ]);

        $post_category = ActualPostCategory::where('slug', $request->category)->first();
        $post_language = ActualLanguage::where("slug", $request->language)->first();

        if (empty($post_category) || empty($post_language)) {
            return response()->json();
        }

        $posts = ActualPost::where([
          ["category", '=', $post_category->id],
          ["language", '=', $post_language->id]
        ])->get();

        return response()->json($posts);
    }

    public function get(Request $request, $slug)
    {
        $request->validate([
          "language" => "required|min:2"
        ]);

        $post_language = ActualLanguage::where('slug', $request->language)->first();

        $post = ActualPost::where([
          "language" => $post_language->id,
          "slug" => $slug
        ])->first();

        return response()->json($post, 200);
    }
}
