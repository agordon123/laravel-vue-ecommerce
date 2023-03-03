<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payments extends Model
{
    use HasFactory;
    protected $fillable = ['order_id','amount','status','type','created_at','updated_at'];
    protected $table = 'payments';
    protected $connection = 'mysqli';

    public function orders(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(Order::class,'order_id','id');
    }
}
