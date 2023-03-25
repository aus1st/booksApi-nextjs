import React from 'react'
import { book } from '../models/book';


const baseUrl = 'https://simple-books-api.glitch.me/'

async function getAllBooks() {
    try {
        const books = await fetch(baseUrl);
       
        if(books.ok) {
            console.log(await books.json());
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
  const data: book[] = await getAllBooks();
    return (
    <div>
      <ul>
        {
            data?.map(b=>(
            <li key={b.id}>
                    {b.name}
            </li>
            ))
        }
      </ul>
    </div>
  )
}
