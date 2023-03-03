<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;

    protected $fillable = ['user_id','product_id','created_at','updated_at'];
    protected function users(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne('users','id','user_id');
    }

}
