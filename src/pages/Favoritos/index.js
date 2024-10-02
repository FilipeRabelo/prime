import React from "react";
import { Link } from "react-router-dom";
import "./favoritos.css";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

function Favoritos() {

  const [filmes, setFilmes] = useState([])  // vai ser um array vazio - uma lista dos filmes

  useEffect(() => {

    const minhaLista = localStorage.getItem("@primeFlix"); // @primeFlix é a chave
    setFilmes(JSON.parse(minhaLista) || [])  // convertendo para um array DE VOLTA
    // se nao crio um array vazio
  }, []);

  function excluirFilme(id) {  // posso percorrer os dados para tirar o item

    let filtroFilmes = filmes.filter((item) => {
      return (item.id !== id); // vou deolver todos os filmes menos o que esstou clicando
    })

    setFilmes(filtroFilmes); // retornado pra tela
    localStorage.setItem("@primeFlix", JSON.stringify(filtroFilmes));

    // alert("Filme: EXCLUIDO com SUCESSO");

    toast.success("Filme Excluido com Sucesso !!");
  }

  return (
    <div className={ "favoritosFilmes" }>

      <h1>Meus Filmes</h1><br />

      { filmes.length === 0 && <span id={ "spanSemFilmes" }>Você NÃO possui nenhum Filme Salvo :(</span> }

      <ul className="divFavoritos">
        { filmes.map((item) => (
          <li key={ item.id }>
            {/* <span>{ item.title }</span> */}

            <div className="tituloFilme"> {/* Nova div para o título */ }
              <span>{ item.title }</span>
            </div>

            <div className="acoesFilme">
              <Link className="btnVer" to={ `/filme/${ item.id }` }>Ver</Link>
              <button onClick={ () => excluirFilme(item.id) } className="btnExcluir">Excluir</button>
            </div>
          </li>
        )) }
      </ul>

    </div>
  )
}

export default Favoritos;