import Link from "next/link";

const AboutCollage=()=>{
    return(
       <div>
        <h1 className="heading">About Collage</h1>
        <Link href='/'>Goto Home Page</Link> <br/>
        <Link href='/About/AboutStudent'>Goto About Student</Link>
        </div>
    )
}

export default AboutCollage;