import React from 'react'
import { book } from '../models/book';
import Image from 'next/image';
import Link from 'next/link';


const baseUrl = 'https://simple-books-api.glitch.me/books'

async function getAllBooks() {
    try {
        const books = await fetch(baseUrl);
       
        if(books.ok) {
            
            return await books.json();
        }
        else {
            return 'no data'
        }
    } catch (error) {
        console.log(error);
    }
}


export default async function Books() {
  const data:book[] = await getAllBooks();
    return (
    <div>
      <ul className='m-3 mt-15 flex justify-center flex-col sm:flex-row gap-1 text-center '>
        {
            data?.map(b=>(
           
                <div key={b.id} className=" flex-1 rounded-sm p-5 m-2 shadow-md text-center">
                <div className='rotate-12 flex justify-center mt-2' >
                <Image alt="bookImage" src={"/images/bookplaceholder.png"} width={40} height={40} className='text-center'/>
                </div>
                
                <div> <h2 className='text-lg font-semibold py-2'>{b.name}</h2>
                <h3 className='uppercase font-medium text-blue-600'>{b.type}</h3>
                </div>
                <div className='h-72'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsum eaque architecto itaque veniam saepe ut commodi nemo velit libero aliquam iure soluta at, esse ducimus enim culpa animi? Repellat.</p>
                </div>
                <div className='pt-2 flex space-x-2 justify-center'>

                    <Link href={`/books/${b.id}`} className='bg-blue-600 text-white py-1 px-4 rounded-md'>Details</Link>
                    <Link href="#" className='bg-blue-600 text-white py-1 px-4 rounded-md'>Order</Link>

                </div>
                </div>
                   
           
           
            ))
        }
      </ul>
    </div>
  )
}
