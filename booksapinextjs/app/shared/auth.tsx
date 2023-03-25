import React from 'react'
import { client } from '../models/client';

const auth: client = {
    clientName: 'siddiqui',
    clientEmail: 'siddiqui@gmail.com'
}

type userToken = {
accessToken : string;
};

async function getToken() {
    if(userToken.accessToken !== null) {
        const token = await fetch('https://simple-books-api.glitch.me/api-clients',{
            method:'POST',
            headers:{
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(auth)
        });
        if(token.ok) {
            userToken.accessToken = await token.json();
            return userToken.accessToken;
        } else if(!token.ok)
          {
            return {message:'no token found'}
        }
    } else return userToken;
    
} 

export default async  function Auth() {
  const token = await getToken();
  console.log(token);
    return (
    <div>
            {token?.toString()}
    </div>
  )
}
