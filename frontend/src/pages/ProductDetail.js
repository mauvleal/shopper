import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ProductCard from "../components/productCard";
import API from "../api/api";

function ProductDetail() {
    const [product, setProduct] = useState([]);
    const [enableButton] = useState(false);
    const [newPrice, setNewPrice] = useState('')

    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () =>{
            const response = await API.getById(id)
            setProduct(response.data)
        };
     fetchProduct();
    }, []);

    const handleUpdate = async () => {
        const data = {
            "sales_price": newPrice
        }
        await API.upDate(id, data);
        window.location.reload();
        console.log(data, id);
      };

    const upDatePrice = r => {
        setNewPrice(r)
        console.log(r);
    }

  
        return (
            <main>

            <div>
                <h1>Todos os Produtos</h1>
                <button> Validar </button>
            <section>
                <button
                    disabled={ enableButton }
                    onClick={ handleUpdate }
                >Atualizar
                </button>
            
            </section>
            </div>
            <div>
                
            </div>
          
            <div>
             <ProductCard handlePrice={upDatePrice} key={product.id} product={product} />
            </div>
         
            </main>
        )
    }

export default ProductDetail