import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ProductCard from "../components/productCard";
import API from "../api/api";

function ProductDetail() {
    const [product, setProduct] = useState([]);
    const [message] = useState("Aumento pendente de validação");
    const [enableButton] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () =>{
            const response = await API.getById(id)
            setProduct(response.data)
        };
     fetchProduct();
    }, []);

  
        return (
            <main>

            <div>
                <h1>Todos os Produtos</h1>
                <button> VALIDAR ALTERAÇÕES </button>
            <section>
                <button
                    disabled={ enableButton }
                    // onClick={ updatePric }
                >Atualizar
                </button>
                {
                    message && <p>{ message }</p>
                }
            </section>
            </div>
            <div>
                
            </div>
          
            <div>
             <ProductCard key={product.id} product={product} />
            </div>
         
            </main>
        )
    }

export default ProductDetail