import Image from "next/image"
// import logo from "../../../public/vercel.svg"
import logo from "../Image/IMG_1.jpg"

export default function Home(){
    console.log(logo)
    return(
        <main>
            <h1>Image Optimization in Next Js</h1>         
           {<Image  src={logo} alt="logo" /> }
        </main>
    )
}