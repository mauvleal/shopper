import React, { useState } from "react";
import { Link } from "react-router-dom";
import csvReader from "../utils/csvReader";

function Home (){
    const [id, setID] = useState();
    const [file, setFile] = useState(null);

    console.log(file)

    const handleFileSelect = async (event) => {
        const file = event.target.files[0]
        const csvData = await csvReader(file)
        setFile(csvData)
        console.log(file);
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

            <h1>Leitor do Arquivo CSV</h1>
          
          <input className="file-input__input" type="file" accept=".csv" onChange={handleFileSelect}/>
          
            </div>
        )
    }


export default Home;