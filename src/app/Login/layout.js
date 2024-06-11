'use client'
import Link from "next/link"
import './login.css'
import { usePathname } from "next/navigation"

export default function Layout({ children }) {
    const pathName=usePathname();
    console.log(pathName);
    return (
        <div> 
            {
            pathName!=='/Login/LoginTeacher'?
            <ul className="login-menu">
                <li>
                   <h4>Login NavBar </h4> 
                </li>
                <li>
                <Link href='/Login'>Goto Home Login</Link>
                </li>
                <li>
                <Link href='/Login/LoginStudent'>Goto Login Student Page</Link>
                </li>
                <li>
                <Link href='/Login/LoginTeacher'>Goto Login Teacher Page</Link>
                </li>
            </ul>
            :<Link href='/Login'>Go to Main Login Page</Link>
        }
            { children}                
      
        </div>
    )}