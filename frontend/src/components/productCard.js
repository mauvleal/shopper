import React from 'react';

function ProductCard({ product }) {
    return (
        <main>

    <div>
            <h3>{`Nome: ${product.name}`}</h3>
            <p>{`Codigo: ${product.code}`}</p>
            <p>{`Preço de Custo: R$ ${product.cost_price}`}</p>
            <p>{`Preço de Venda: R$ ${product.sales_price}`}</p>
            {/* <div>{product.name}</div>
            <div>{product.code}</div>
            <div>{product.cost}</div>
            <div>{product.price}</div> */}
            <input></input>      
    </div>
     
        </main>
    );
};

export default ProductCard;