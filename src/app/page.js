'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function Home() {
  const router= useRouter();
  const [name, setName]=useState('Rizwan');

  const Apple=()=>{
   setName("Bhutoo")
  } 

  const InnerComp=()=>{
    return(
      <h1>Inner Component</h1>
    )
  }

  const Navig =(rName)=>{
    router.push(rName)
  }

  
  return (
    <main className={styles.main}>
      <h1>{name}</h1>
      <Link href="/Login">Go to Login Page</Link>
      <Link href="/About">Go to About Page</Link>
      <button onClick={()=>Navig('/Login')}>Go To Login</button>
      <button onClick={()=>Navig('/About')}>Go To About</button>
      {InnerComp()}
      <button onClick={()=>Apple()}>Click Me</button>
    </main>
  );

}
