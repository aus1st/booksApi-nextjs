import Link from 'next/link'
import React from 'react'

const routes = [
    {id:1, name:'Books',path:'/books'},
    {id:2, name:'Orders',path:'/orders'}   
    
]

export default function Navbar() {
  return (
    <div className='bg-white stick top-0 flex justify-end p-5 m-2 shadow-md items-center '>
     
     <Link href='/books'>
     <h2 className='text-lg font-semibold mr-4'>BOOKS API</h2>
</Link>
      <ul className='flex  font-semibold space-x-4'>
       
        {
            routes.map(r=>(
                <li key={r.id}>
                <Link href={r.path}>{r.name}</Link>
                </li>
            ))
        }
      </ul>
    </div>
  )
}
