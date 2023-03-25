import React from 'react'
import Image from 'next/image'
import { book } from '@/app/models/book';
import Link from 'next/link'

const baseUrl = 'https://simple-books-api.glitch.me/books/'

async function getBook(id:number) {
    try {
        const book = await fetch(`${baseUrl}${id}`);
       
        if(book.ok) {
            
            return await book.json();
        }
        else {
            return 'no data'
        }
    } catch (error) {
        console.log(error);
    }
}


export default async function Book({params}: {params:{id:number}}) {

    const {id} = params;
    const b:book = await getBook(id);
  return (
    <div>
      <div key={b.id} className=" flex-1 rounded-sm p-5 m-2 shadow-md text-center">
                <div className='rotate-12 flex justify-center mt-2' >
                <Image alt="bookImage" src={"/images/bookplaceholder.png"} width={40} height={40} className='text-center'/>
                </div>
                
                <div> <h2 className='text-lg font-semibold py-2'>{b.name}</h2>
                <h3 className='uppercase font-medium text-blue-600'>{b.type}</h3>
                </div>
                <div>
               <ul>

                <li className='font-semibold'>Author: {b.author}</li>
                <li className='font-semibold text-blue-500'>Price: {b.price}</li>
                <li>ISBN: {b.isbn}</li>
                <li className='text-red-500'>Availble: {b.available?'Yes':'No'}</li>
               </ul>
                
                </div>
                <div className='pt-2 flex space-x-2 justify-center'>
                <Link href="/books" className={`bg-blue-600 text-white py-1 px-4 rounded-md`}>List</Link>

                    <Link href="/order" className={`bg-blue-600 text-white py-1 px-4 rounded-md ${b.available?'cursor-pointer':'cursor-not-allowed'}`}>Order</Link>

                </div>
                </div>
    </div>
  )
}
