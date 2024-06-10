import Link from "next/link"
import './login.css'

export default function Layout({ 
    children 
}) {
    return (
        <div> 
            
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
           
            {
            children
            }           
        </div>
    )}