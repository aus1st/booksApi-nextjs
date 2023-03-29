'use client'
import { NextPage } from 'next';
import React from 'react'
import { newOrder } from '../models/client';


const token = '6d2344f30a967651bb18967444ddfb8a0a24f53e21e6b0f27cde101c4cfb4d23'


async function PlaceNewOrder(order:newOrder){
  const options:any = {  
    method: 'POST',
    mode:'no-cors',
    headers: {
     
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({order})
  }
const res = await fetch('https://simple-books-api.glitch.me/orders',options);
if(res.ok) {
 return await res.json();
} else {
  console.log(res);
}
}

const PlaceOrder: NextPage<newOrder> = (props)=>{
  const {bookId,customerName } = props;
  return (
    <div>
        <button             className={`bg-blue-600 text-white py-1 px-4 rounded-md`}
 type="button" onClick={async ()=> await PlaceNewOrder({bookId,customerName})}>Place Order</button>
    </div>
  )
}


// export default function PlaceOrder:NextPage<newOrder> (newOrder: newOrder)=> {
//   const {bookId,customerName } = newOrder;
//   return (
//     <div>
//       <form>
//         <button type="submit"></button>
//         </form>
//     </div>
//   )
// }

export default PlaceOrder;