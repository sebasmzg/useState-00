'use client'

import React, { useState } from "react";
import Button from "./components/buttons";
import InputText from "./components/input";
import { HumanProps } from "./types/generalTypes";


export default function Home() {
  
  const initialHuman: HumanProps = {
    name: '',
    email: '',
    phone: ''
  };

  const [human,setHuman] = useState(initialHuman);

  const handledAccept = () => {
    console.log({human});
    console.log('clicked');
  };

  const handledChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const id = e.target.id;

    console.log({id, value})
    
    setHuman({...human, [id]:value});
  };

  return (
    <main className="main">
      <div className="topBar">Hi Mars!</div>
      <div className="content">
        <InputText 
          type={"text"} 
          placeholder="Enter your name" 
          onChange={handledChange} 
          className="input" id={"name"}
        />
        <InputText 
          type={"email"} 
          placeholder="Enter your email" 
          onChange={handledChange} 
          className="input" 
          id={"email"}
        />
        <InputText 
          type={"text"} 
          placeholder="Enter your phone" 
          onChange={handledChange} 
          className="input" 
          id={"phone"}
        />
      </div>
      <Button onClick={handledAccept} label={"aceptar"} className="button"/>
    </main>
  );
}
