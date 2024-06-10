import Link from "next/link";

const LoginStudent=()=>{
    return(
       <div>
        <h1 className="heading">Student Login Page</h1>
        <Link href='/'>Goto Home Page</Link> <br/>
        <Link href='/Login/LoginTeacher'>Goto Login Teacher Page</Link>
        </div>
    )
}

export default LoginStudent;