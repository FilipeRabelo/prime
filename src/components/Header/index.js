import React    from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header(){
    return(
      <header id={"header"}>

          <Link to="/" className="logo">Prime Cine </Link>

          <Link to="/filme"  className="favoritos">Meus Filmes</Link>

          {/*<Link to="/teste"  className="favoritos">Teste</Link>*/}

      </header>
    );
}

export default Header;