
import React from "react";
import "./home.css";
import { useEffect, useState } from "react"
// PRECISO USAR O useEffect e useState por causa do ciclo de vidas. usuario ira modificar

import api from "../../services/api"        // importano o axios
import { Link } from "react-router-dom";

// https://api.themoviedb.org/3/movie/now_playing?api_key=16b8d42d27d0cee3068fda5eea17a741
// nossa rota => /movie/now_playing

function Home() {

  // vamos criar um stado para armazenar os dados
  const [filmes, setFilmes] = useState([]);       //array vazio vai encher pela api
  const [loading, setLoading] = useState(true);  // ele sempre vai comecar true na aplicação

  useEffect(() => {

    // todaz vez sq nosssa aplicação abrir, ele vai chamar o useEffect //
    // e vai buscar a api usando uma funcao assicrona //

    // BUSCA NA REQUISIÇÃO  NA API E COLOCA NO CODIGO
    async function loadFilmes() {   // buscar a api

      // await para esperar miinha requisicao - pq ela pode demorar //

      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "16b8d42d27d0cee3068fda5eea17a741",
          language: "pt-BR",
          pages: 1,
        }
      })

      console.log(response.data.results.slice(0, 20)); // id 0 ate 9 //

      setFilmes(response.data.results.slice(0, 20));   // PASSANDO PARA A useState setFilmes OS DADOS
      // O ARRAY useState ESTAVA VAZIA AGORA RECECEU OS DADOS
      setLoading(false);    //  para tirar o texto de carregando filmes
    }

    loadFilmes();

  }, [])


  // PRECISAR SER ANTES DO RETURN //
  if (loading) {   // se loading estiver true...
    return (
      <div className={ "loading" }>
        <h2>Carregando Filmes...</h2>
      </div>
    )
  }

  // RETURN É ONDE MONTAMOS O COMPONENTE

  return (
    <div className={ "container" }>
      <div className={ "listaFilmes" }>

        { filmes.map((filme) => {

          return (                          // return pq quero retorna algo na tela //

            // <strong>Bem Vindo ao 10 Melhores Filmes do Cinema Br.</strong>

            <article key={ filme.id }>        {/* PROPRIEDADE key OBRIGATORIA  */ }

              <strong>{ filme.title }</strong>

              <img src={ `https://image.tmdb.org/t/p/original/${ filme.backdrop_path }` } alt={ filme.title } />

              <Link to={ `/filme/${ filme.id }` } id={ "linkAcessar" }>Acessar</Link> <br />

              {/*<Link to="/teste"               className="favoritos">Teste</Link>*/ }

            </article>
          )

        }) }

      </div>
    </div>
  )
}

export default Home;