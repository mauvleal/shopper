import React, { useEffect, useState } from "react";
import ProductCard from "../components/productCard";
import Axios from "axios";

function Products() {
    const [products, setProducts] = useState([]);

    console.log(products)
    useEffect(() => {
      Axios.get("http://localhost:3001/products").then((response) => {
        console.log(response);
        setProducts(response.data.result)
    })
    }, []);
    
        return (
            <main>

            <div>
                <h1>Todos os Produtos</h1>
            </div>
            <div>
                
            </div>
           { typeof products !== "undefined" && products.map((product) => {
               return <ProductCard key={product.id} product={product} />
            })}

        <button> VALIDAR </button>
        <button> ATUALIZAR </button>
            </main>
        )
    }


export default Products;

