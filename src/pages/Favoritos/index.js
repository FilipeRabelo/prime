import React from "react";
import "./favoritos.css";

import { Link } from "react-router-dom";

function Favoritos(){
    return(
        <div className={"favoritosFilmes"}>
            <h1>Ola mundo, estou em FAVORITOS</h1><br/>

            <Link to={"/"} className={"link"}>Home</Link>
        </div>
    )
}

export default Favoritos;