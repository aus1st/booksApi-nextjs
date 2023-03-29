import React from 'react'
import Image from 'next/image'
import Link from 'next/link';


const url = 'https://simple-books-api.glitch.me/orders'
const token = '6d2344f30a967651bb18967444ddfb8a0a24f53e21e6b0f27cde101c4cfb4d23'

async function getOrders() {
  const res = await fetch(url,{
    method:'GET',
    mode:'no-cors',
    headers: {      
      
      'Authorization': `Bearer ${token}`,
    }
  });

  if(!res.ok) {
    console.log(res)
  } 

  return await res.json();
}

export default async function Orders() {
  const ord = await getOrders();
  const {id,bookId,customerName,createdBy,quantity,timestamp} = ord;
  return (
    <div>
      <div key={id} className=" flex-1 rounded-sm p-5 m-2 shadow-md text-center">
                <div className='rotate-12 flex justify-center mt-2' >
                <Image alt="bookImage" src={"/images/bookplaceholder.png"} width={40} height={40} className='text-center'/>
                </div>
                
                <div> <h2 className='text-lg font-semibold py-2'>Book Id: {bookId}</h2>
                <h3 className='uppercase font-medium text-blue-600'>Customer: {customerName}</h3>
                </div>
                <div>
               <ul>

                <li className='font-semibold'>Quantity: {quantity}</li>
                
               </ul>
                
                </div>
                <div className='pt-2 flex space-x-2 justify-center'>
                <Link href="/books" className={`bg-blue-600 text-white py-1 px-4 rounded-md`}>List</Link>
                   
                </div>
                </div>
    </div>
  )
}
