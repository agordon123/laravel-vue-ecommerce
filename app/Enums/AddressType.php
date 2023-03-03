<?php


namespace App\Enums;

enum AddressType: string
{
    case Shipping="Shipping";
    case Billing='billing';
}
