import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductChange from "../components/productChange";
import csvReader from "../utils/csvReader";

function Home (){
    const [id, setID] = useState();
    const [file, setFile] = useState(null);
    const [isValid] = useState(false);
    

    const handleFile = async (event) => {
        const file = event.target.files[0]
        const csvData = await csvReader(file)
        setFile(csvData)
      };


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
            <div>
            _____________________________________

            <h2>Alterar produtos pelo Arquivo CSV</h2>
            <input className="file-input__input" type="file" accept=".csv" onChange={handleFile}/>
            </div>
            {file && (
                <div>
                <h3>Produtos a alterar</h3>
                <button>Validar</button>
                <button disabled={!isValid}>Atualizar</button>
                </div>
                
            )}

            {file && 
                 file.data.map((product) => {
                    return <ProductChange key={product.product_code} product={product} />
                })
                
            }
                
            </div>
        )
    }


export default Home;