import React from 'react';
import Input from './Input.js';
import Cities from './cities.json';
import { useState } from 'react';

function handleChange1(event,setMyHint){
   let flag = 0;
   if(event.target.value.length ===0){
      setMyHint(null);
   }else{
      for(let i=0;i<Cities.length;i++){
         if(Cities[i].startsWith(event.target.value)){
            //console.log(Cities[i]);
            flag = 1;
            setMyHint(Cities[i]);
            break;
         }   
      }
   }
   if(flag === 0){
      setMyHint(null);
   }
}



function App() {
   const [myHint,setMyHint]=useState(null);
   return <div><Input handleChange={(event)=>handleChange1(event,setMyHint)} hint={myHint} /></div>
}

export default App;
