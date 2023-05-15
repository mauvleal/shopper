import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home (){
    const [id, setID] = useState();


        return (
            <div>
                <h1>Shopper.com.br</h1>
                <Link to="/products">
                    <button type="button">Alterar Multiplos Produtos</button>
                </Link>

            <div>
            <input
                type="number"
                placeholder="Buscar pelo ID"
                value={id}
                onChange={e => setID(e.target.value)}
            />
            <Link to={`/products/${id}`}>
            <button >Buscar</button>
            </Link>
            </div>
            </div>
        )
    }


export default Home;