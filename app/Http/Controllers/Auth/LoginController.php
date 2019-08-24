<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Dingo\Api\Routing\Helpers;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers, Helpers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }


    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => ['required'],
            'password' => ['required'],
        ]);
        if ($validator->fails()) {
            return $this->response->array(['errors' => $validator->errors()], 422);
        } else {
            $credentials = [
                'email' => $request->email,
                'password' => $request->password,
            ];
            if (auth()->attempt($credentials)) {
                $token_name = Str::random(8);
                $token = $request->user()->createToken($token_name)->accessToken;
                return $this->response->array(['token' => $token], 200);
            }
            $this->response->error('Wrong email and password', 401);
        }

    }

    public function logout(Request $request)
    {
        $user = $request->user();
        if ($user) {
            $user->token()->revoke();
            return $this->response->array([
                'message' => 'Successfully logged out',
            ], 204);
        } else {
            return $this->response->array([
                'message' => 'User unauthenticated',
            ], 404);
        }
    }
}
