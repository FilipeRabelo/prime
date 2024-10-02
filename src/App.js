
import React from "react";

import RouteApps from "./routes";


// aqui fica o react-toastify - bibiotecla de alerts

// no CDM = >  npm install --save react-toastify


// AQUI PRECISO IMPORTAR O container do react-toastify
import { ToastContainer } from "react-toastify";

// IMPORTE DO CSS DO react-toastify
import 'react-toastify/dist/ReactToastify.css';



function App(){
  return (

      <div className={"app"}>

          <ToastContainer autoClose={3000} />  {/* o alerta fechar sozinha em 3s */}

          <RouteApps/>

      </div>

  );
}

export default App;
