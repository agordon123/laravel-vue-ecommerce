<?php

namespace App\Models\Api;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class GPTUser extends User
{
    use HasFactory;
    protected $connection = 'mysqli';
    protected $fillable = ['user_id','api_token','user_prompt','user_answer'];
    protected $casts = [
        'user_id'=>'integer',
        'api_token'=>'text',
        'user_prompt'=>'text',
        'user_answer'=>'text'];
    private mixed $api_token;

    protected function users(): array
    {
        return $this->hasOne(User::class,'user_id','id')->where('user_id','=','id');
    }
    protected function api_token()
    {
        return $this->api_token;
    }

}
