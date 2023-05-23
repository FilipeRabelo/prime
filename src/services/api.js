
import axios from "axios";

// BASE DA API: https://api.themoviedb.org/3/        isso nunca muda, é a base.
// URL DA API:  https://api.themoviedb.org/3/movie/now_playing?api_key=16b8d42d27d0cee3068fda5eea17a741
// para fazer as requisições HTTP vamos usar uma biblioteca AXIOS e nao o fech()


const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

// VAMOS EXPORTAR A VARIAVEL PARA PODER FAZER AS CHAMADAS api

export default api;