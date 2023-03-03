<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomerAddresses extends Model
{
    use HasFactory;
    protected $fillable = ['type','address1','address2','city','state','zipcode','country_code','customer_id','created_at','updated_at'];
    protected $connection = 'mysqli';
    protected $table = 'customer_addresses';

    protected function customers(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(Customer::class);
    }
}
