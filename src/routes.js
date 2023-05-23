
// IMPORTANDO AS ROUTES DOS LINK
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importando componentes //
import Header from "./components/Header";
import Home   from "./pages/Home";
import Filme from "./pages/Filme";
import Teste  from "./pages/Teste";

import Erro   from "./pages/Erro";



function RouteApps(){
    return(
        <BrowserRouter>

            <Header/>

            <Routes>

                <Route path={"/"}            element={ <Home/>   }/>
                <Route path={"/filme/:id"}   element={ <Filme/>  }/>
                <Route path={"/teste"}       element={ <Teste/>  }/>

                <Route path={"*"}            element={ <Erro/>   }/>

            </Routes>

        </BrowserRouter>
    )
}

export default RouteApps;