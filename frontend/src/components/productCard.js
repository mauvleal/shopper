import React from 'react';
// import { useState } from 'react';

function ProductCard(props) {
    const { product } = props;
    // const [newPrice, setNewPrice] = useState();

    const handleChange = (event) => {
        props.handlePrice(event.target.value)
        console.log(event.target.value);
        // console.log(product.code);
    }

    return (
        <main>

    <div>
            <h3>{`Nome: ${product.name}`}</h3>
            <p>{`Codigo: ${product.code}`}</p>
            <p>{`Preço de Custo: R$ ${product.cost_price}`}</p>
            <p>{`Preço de Venda: R$ ${product.sales_price}`}</p>
            <input placeholder='Novo Preço R$ 00.00' onChange={handleChange}></input>      
    </div>
     
        </main>
    );
};

export default ProductCard;