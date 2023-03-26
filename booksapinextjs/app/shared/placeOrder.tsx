'use client'
import React from 'react'
import { newOrder } from '../models/client';

const token = '76c4ff6c90d78ac346c9d49b17df2a3fda12f3f1310a3466527d0a8b3e97ce43'

async function PlaceNewOrder(order:newOrder){
await fetch('https://simple-books-api.glitch.me/orders',{
    method:'POST',
    headers:{
        Authentication:`Bearer ${token}`
    },
    body: JSON.stringify({order})
});
}

export default function PlaceOrder() {
  return (
    <div>
        <button type="button"></button>
    </div>
  )
}
