import Link from "next/link";

const AboutStudent=()=>{
    return(
       <div>
        <h1 className="heading">About Student</h1>
        <Link href='/'>Goto Home Page</Link> <br/>
        <Link href='/About/AboutCollage'>Goto About Collage Page</Link>
        </div>
    )
}

export default AboutStudent;