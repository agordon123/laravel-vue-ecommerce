<?php

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use App\Providers\RouteServiceProvider;

class AuthStoreController extends Controller
{
    public function getUser(AuthStore $authStore)
    {
        $user = $authStore->user;
        // Do something with the authenticated user
        if( User::findOrFail($user->id) == $user){
            return response()->redirectTo('/dashboard',302,[]);
        }
    }
}

