import Link from "next/link"

export default function StudentList(){
    return(
        <div>
            <h1>Student List</h1>
            <ul>
                <li><Link href="/studentlist/1"> Rizwan</Link></li>
                <li> <Link href="/studentlist/2"> Ahmad</Link></li>
                <li> <Link href="/studentlist/3"> Ansari</Link></li>
            </ul>
        </div>
    )
};
