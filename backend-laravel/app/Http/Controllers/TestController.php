<?php

namespace App\Http\Controllers;

use App\Events\TestMessage;
use App\Events\TestSend;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function message(){
        TestMessage::dispatch('testing');
        return response()->json('success', 200);
    }

    public function store(Request $request){
        $message = $request->message;
        $user = auth()->user()->id;
        $channel = $request->channel;
        broadcast(new TestSend($message, $user, $channel));
    }
}
