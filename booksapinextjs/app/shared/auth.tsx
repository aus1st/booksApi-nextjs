'use client'
import {useState} from 'react'
import { client,userToken } from '../models/client';


const auth: client = {
    clientName: 'siddiqui',
    clientEmail: 'siddiqui@abc.com'
}

let token : userToken = {
    accessToken:''
};

const fetcher =(url:string, auth:client) => fetch(url,{
    method:'POST',
    mode:'no-cors',    
    body: JSON.stringify(auth)
}).then((res)=> res.json());

async function getToken(auth:client) {
   
    
} 

export default function Auth() {
//   const token = await getToken();
let [clientName, setName] = useState("");
let [clientEmail, setEmail] = useState("");
//const {data,error,isLoading} = useSWR('https://simple-books-api.glitch.me/api-clients',fetcher)  

//   console.log(token);
    return (
  
        <div
  className="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
  <form>
  <div className="relative mb-6" data-te-input-wrapper-init>
    <label
        >Your Name</label>
        <input
        type="text" onChange={(e)=>setName(e.target.value)} value={clientName}
        className="peer block min-h-[auto] w-full rounded border-1  bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-0 transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id="clientName"
        placeholder="Name" />
      
    </div>
    <div className="relative mb-6" data-te-input-wrapper-init>
    <label 
        className=""
        >Your Email</label>
      <input 
       type="email" onChange={(e)=>setEmail(e.target.value)} value={clientEmail}
       className="peer block min-h-[auto] w-full rounded border-1 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
       id="clientEmail"
        aria-describedby="emailHelp"
        placeholder="Enter email" />
     
    </div>
   
    
    <button 
      type="button" onClick={async ()=>await getToken({clientName,clientEmail})}
      className="inline-block w-full rounded bg-blue-700 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
      data-te-ripple-init
      data-te-ripple-color="light">
      Get Token
    </button>
   
  </form>
</div>
           
  )
}
