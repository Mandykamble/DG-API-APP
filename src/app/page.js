"use client"
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

// const [username, setUsername] = useState("")    
const [image, setImage] = useState("") 

const getImage = async () =>{
    try {
      let resopnce = await axios.get('https://dog.ceo/api/breeds/image/random');
      let data=resopnce.data;
      let url=data.massage;
      // console.log(data);
      setImage(data.message);
      console.log(image);
    } catch (error) {
        console.log(error);
    }
}
  return (
    <>
      <div>

      <h1>Welcome  bro </h1>

      <h2>Hear i got some of your pics take a look</h2>

      <h2>click bellow👇</h2>
      

      <button onClick={getImage} className="border-2 p-1 rounded-2xl text-black bg-green-400 border-pink-950"> Get Image</button>
      <img src={image} />
      </div>
    </>
  );
}
