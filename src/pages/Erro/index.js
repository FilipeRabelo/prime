
import { Link } from "react-router-dom";
import "./erro.css";

function Erro(){
    return(
        <div className={"divErro"}>

            <h1>ERRO 404</h1> <br/>
            <h3>Página não Encontrada...</h3><br/><br/>

            <Link to={"/"} className={"linkErro"}>VOLTAR PARA HOME</Link>

        </div>
    )
}

export default Erro;