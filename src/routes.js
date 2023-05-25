
// IMPORTANDO AS ROUTES DOS LINK
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importando componentes //
import Header    from "./components/Header";
import Home      from "./pages/Home";
import Filme     from "./pages/Filme";
import Favoritos from "./pages/Favoritos";

import Erro      from "./pages/Erro";


function RouteApps(){
    return(
        <BrowserRouter>

            <Header/>

            <Routes>

                <Route path={"/"}            element={ <Home/>      }/>
                <Route path={"/filme/:id"}   element={ <Filme/>     }/>   {/* useParams = id */}
                <Route path={"/favoritos"}   element={ <Favoritos/> }/>

                <Route path={"*"}            element={ <Erro/>      }/>

            </Routes>

        </BrowserRouter>
    )
}

export default RouteApps;