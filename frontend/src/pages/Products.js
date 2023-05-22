import React, { useEffect, useState } from "react";
import ProductCard from "../components/productCard";
import API from "../api/api";

function Products() {
    const [products, setProducts] = useState([]);
    const [enableButton] = useState(true);

    useEffect(() => {
        const fetchProducts = async () =>{
            const response = await API.getALLProducts()
            setProducts(response.data.result)
        };
     fetchProducts();
    }, []);
    
        return (
            <main>

            <div>
                <h1>Todos os Produtos</h1>
                <button> VALIDAR ALTERAÇÕES </button>
                <section>
                <button
                    disabled={ enableButton }
                    // onClick={ updatePrices }
                >Atualizar
                </button>
              
            </section>
            </div>
            <div>
                
            </div>
         c


            </main>
        )
    }


export default Products;

