import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Shopper.com.br</h1>
                <Link to="/products">
                    <button type="button">Produtos</button>
                </Link>
            </div>
        )
    }
}

export default Home;