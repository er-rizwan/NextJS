'use client'

import Link from "next/link";
import {useRouter} from 'next/navigation';

const Login=()=>{
    const router=useRouter();
    const navi=(page)=>{
        router.push('/Login/'+page)
    }
    return(
        <div>
             <h1 className="heading">Login Home Page</h1>
       <br/><br/>
        <button onClick={()=>navi('LoginStudent')}>Goto Login Student Page</button> <br/>  <br/>
        <button onClick={()=>navi('LoginTeacher')}> Goto Login Collage Page</button>
        </div>
    )
}

export default Login;