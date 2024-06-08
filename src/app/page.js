'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {

  const [name, setName]=useState('Rizwan');

  const Apple=()=>{
   setName("Ansari")
  } 

  return (
    <main className={styles.main}>
      <h1>{name}</h1>
      <button onClick={()=>Apple()}>Click Me</button>
    </main>
  );
}
