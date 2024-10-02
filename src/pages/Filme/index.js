
import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";  // PARA PEGAR OS PARAMETROS
import "./filme_info.css";
import api from "../../services/api";
import { toast } from "react-toastify";

// PRECISAMOS PEGAR O id DO FILME PARA UTILIZAR COMO useParans
function Filme() {

  // BUSCANDO O useParams em routes => useParams = :id

  const { id } = useParams();  // ATENÇÃO AS {  }; PEGANDO O ID
  const navigate = useNavigate();

  const [filme, setFilme] = useState({})      // COMEÇA COM UM OBJETO VAZIO
  const [loading, setLoading] = useState(true);   // começa como true


  // PEGUEI O ID PRECISO FAZER UMA REQUISIÇÃO
  // usar o useEffect pq sempre q atualiza ele ativa, assim vai chamar a requisição a api

  useEffect(() => {

    async function loadFilme() {


      //await para ele esperar a requisição // para buscar a api

      await api.get(`/movie/${ id }`, {
        params: {
          api_key: "16b8d42d27d0cee3068fda5eea17a741",
          language: "pt-BR"
        }
      })



        // SE SUCESSO  // SE ACHAR O FILME ELE CAI DENTRO DO them()


        .then((response) => {

          // PRECISO PASSAR A RESPOSTA PARA A useState
          // console.log(response.data);

          setFilme(response.data);       // PASSANDO O FILME COM O ID PARA O useState COM TODOS OS DETALHES DO FILME//

          console.log(response.data);

          setLoading(false);

        })

        // SE DER ERRADO ELE CAI NO CATCH

        .catch(() => {

          console.log("!! FILME NÃO ENCONTRADO !! ");

          // deu errado en ele -> PARA ENVIAR O USUARIO PARA A HOME

          navigate("/", { replace: true });  // ele vai redirecionar para a pagina de home
          return;                          // return para parar a execução do codigo

        })

    }

    loadFilme();
    return () => {
      console.log("COMPONENTE FOI DESMONTADO");
    }

  }, [navigate, id]); // dependencias externas  //

  function salvarFilme() {

    const minhaLista = localStorage.getItem("@primeFlix") // FILMES

    let filmesSalvos = JSON.parse(minhaLista) || [];   // condição acimma, se nao vira array vazio
    const hasFilmes = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id)  // ???

    if (hasFilmes) {     // SE JA TIVER NA SALVO NA LISTA

      // alert("Esta filme já esta na lista !!");

      toast.warn("Esta filme já esta na lista !!");
      return;  // para parar o codigo aqui

    }

    // aqui vou pegar ttodo o objeto do filme (que esta na useState) e salva no localStore

    filmesSalvos.push(filme);   // .push() para colcar mais um item no array que é nosso filme
    // que esat no objeto do useState
    localStorage.setItem("@primeFlix", JSON.stringify(filmesSalvos)); // buscando a chave

    toast.success("Filme Salvo com sucesso..");
  }

  if (loading) {
    return (
      <div className={ "loading" }>
        <h1>Carregando Detalhes</h1>
      </div>
    )
  }

  return (
    <div className={ "filme_info" }>

      <h2>Bem-Vindo a Página Filmes</h2>
      <h3>{ filme.title }</h3>

      <img src={ `https://image.tmdb.org/t/p/original/${ filme.backdrop_path }` } alt={ "filme.title" } />

      <h3>Sinopse</h3>
      <span>{ filme.overview }</span>
      <strong>Avaliação: { filme.vote_average }</strong>

      <div className={ "area_buttons" }>
        <button id={ "btnSlavar" } onClick={ salvarFilme } >Salvar</button>

        <button>
          <a target="blank" rel="external" href={ `https://youtube.com/results?search_query=${ filme.title } Trailer pt-br` }>  {/* URL padrao do youtube */ }
            Trailer
          </a>
        </button>

        <button id={ "btnHome" }>
          <a href={ "/" }>
            Home
          </a>
        </button>
      </div>

    </div>
  )
}

export default Filme;

