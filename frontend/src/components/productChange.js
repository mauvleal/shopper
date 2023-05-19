import React from 'react';

function ProductChange({ product }) {
    return (
        <main>

    <div>
            <p>{`Codigo: ${product.product_code}`} - {`New Price: R$ ${product.new_price}`}</p>      
    </div>
        </main>
    );
};

export default ProductChange;