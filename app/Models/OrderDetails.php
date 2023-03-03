<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderDetails extends Model
{
    use HasFactory;
    protected $connection = 'mysqli';
    protected $table = 'order_details';
    protected $fillable = ['first_name','last_name','email','phone','address1','address2','city','state','zipcode','country_code','created_at','updated_at'];

    protected $primaryKey = 'id';



}
