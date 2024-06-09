'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Home() {

  const [name, setName]=useState('Rizwan');

  const Apple=()=>{
   setName("Bhutoo")
  } 

  const InnerComp=()=>{
    return(
      <h1>Inner Component</h1>
    )
  }


  
  return (
    <main className={styles.main}>
      <h1>{name}</h1>
      <InnerComp/>
      <Link href="/Login">Go to Login Page</Link>
      <Link href="/About">Go to About Page</Link>
      {InnerComp()}
      <button onClick={()=>Apple()}>Click Me</button>
    </main>
  );

}
