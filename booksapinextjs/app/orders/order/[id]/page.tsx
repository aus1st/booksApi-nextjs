//"use client";
//import { useState } from "react";
import Image from "next/image";
import { book } from "@/app/models/book";
import Link from "next/link";
import { newOrder } from "@/app/models/client";
import PlaceOrder from "@/app/shared/placeOrder";


const baseUrl = "https://simple-books-api.glitch.me/";

async function getBook(id:number) {
  try {
      const book = await fetch(`${baseUrl}books/${id}`);
     
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
const fetcher = (url:any)=> fetch(url,
  {
    method:'GET',
   mode:'no-cors',
    headers:{
      'x-rapidapi-host':'https://simple-books-api.glitch.me/',     
    }
  }
    )
  .then(res=>res.json());

// async function getBook(id: number) {
//   try {
//     const book = await fetch(`${baseUrl}books/${id}`);

//     if (book.ok) {
//       console.log(book);
//       return await book.json();
//     } else {
//       return "no data";
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

const token =
  "76c4ff6c90d78ac346c9d49b17df2a3fda12f3f1310a3466527d0a8b3e97ce43";

async function PlaceNewOrder(order: newOrder) {
  await fetch(`${baseUrl}orders`, {
    method: "POST",
    mode:'no-cors',
    headers: {
      'x-rapidapi-host':'https://simple-books-api.glitch.me/',
      
      //Authentication: `Bearer ${token}`,
    },
 
    body: JSON.stringify( order),
  });
}

export  default async function Order({ params }: { params: { id: number } }) {
  //let [customerName, setName] = useState("");
  const { id } = params;
  //const {data,error,isLoading} = useSWR(`${baseUrl}books/${id}`,fetcher);
  //console.log(error);
  
//   if(isLoading) return <>Loading....</>
//   if(error) return <>error</>
//  else{
 
  const b:book = await getBook(id);
 
  const bookId = id;
  return (
    <div>
      
      <div key={b.id} className=" flex-1 rounded-sm p-5 m-2 shadow-md text-center">
        <div className="rotate-12 flex justify-center mt-2">
          <Image
            alt="bookImage"
            src={"/images/bookplaceholder.png"}
            width={40}
            height={40}
            className="text-center"
          />
        </div>

        <div>
         
          <h2 className="text-lg font-semibold py-2">{b.name}</h2>
          <h3 className="uppercase font-medium text-blue-600">{b.type}</h3>
        </div>
        <div>
          <ul>
            <li className="font-semibold">Author: {b.author}</li>
            <li className="font-semibold text-blue-500">Price: {b.price}</li>
          </ul>
        </div>

        {/* <div className="relative mb-6" data-te-input-wrapper-init>
          <label>Your Name</label>
          <input
            type="text"
            //onChange={(e) => setName(e.target.value)}
            value='ahmed'
            className="peer block min-h-[auto] w-full rounded border-1  bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-0 transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="customerName"
            placeholder="Name"
          />
        </div> */}

        <div className="pt-2 flex space-x-2 justify-center">
          <Link href="/books" className={`bg-blue-600 text-white py-1 px-4 rounded-md`}
          >
            List
          </Link>
          <PlaceOrder {...{bookId: b.id, customerName:'ahmed'}}/>

         {/* <PlaceOrder bookId={b.id} customerName={"ahmed"}/> */}
        </div>
      </div>
    </div>
  )
//};
}
