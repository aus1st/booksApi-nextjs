import React from 'react'
import { client } from '../models/client';

const auth: client = {
    clientName: 'siddiqui',
    clientEmail: 'siddiqui@gmail.com'
}

let userToken = '';

async function getToken() {
    if(userToken === '') {
        const token = await fetch('https://simple-books-api.glitch.me/api-clients',auth);
        if(token.ok) {
            userToken = await token.json();
            return userToken;
        } else if(!token.ok)
          {
            return {message:'no token found'}
        }
    } else return userToken;
    
} 

export default async  function Auth() {
  //const token = await getToken();
    return (
    <div>
            
    </div>
  )
}
