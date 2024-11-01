import View from "./product";
import Product from "./product";
// "use client";
// import { useEffect, useState } from 'react';

// export default function Page() {
//   const [product, setProduct] = useState([]);

//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setProduct(data.products);
//       })
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div>
//       <h1>Product List</h1>
//       {
//         product.map(item => (
//           <h4 key={item.id}>Name : {item.title}, Price : {item.price}</h4>
//         ))
//       }
//     </div>
//   );
// }

async function productList(){
  let data= await fetch("https://dummyjson.com/products");
  data=await data.json();
  return data.products;
}

export default async function page(){
 
  let products= await productList();
  console.log(products)
  return(
    <div>
      <h1>Product List from server API call.</h1>
      {
      products.map((products)=>(
          <div>
             <h1> Title : {products.title} </h1>
             <Product price={products.price}/>
          </div>
      ))
    } 
    </div>
  )
}