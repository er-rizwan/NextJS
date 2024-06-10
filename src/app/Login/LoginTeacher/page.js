import Link from "next/link";

const LoginTeacher=()=>{
    return(
       <div>
        <h1 className="heading">Teacher Login Page</h1>
        <Link href='/'>Goto Home Page</Link> <br/>
        <Link href='/Login/LoginStudent'>Goto Login Student Page</Link>
        </div>
    )
}

export default LoginTeacher;