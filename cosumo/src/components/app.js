import React from  'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Personas from '../pages/personas';
import Index from '../pages/index';
import Planetas from '../pages/planetas';
import Peliculas from '../pages/Peliculas';
import Especies from '../pages/Especies';
import Vehiculos from '../pages/vehiculos';
import Naves from '../pages/starships';



function App(){
    return (
        <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Index}/>    
        <Route exact path="/Personas" component={Personas}/>   
        <Route exact path="/Planetas" component={Planetas}/>
        <Route exact path="/Peliculas" component={Peliculas}/> 
        <Route exact path="/Especies" component={Especies}/>  
        <Route exact path="/Vehiculos" component={Vehiculos}/>   
        <Route exact path="/Naves" component={Naves}/>           




        </Switch>

        </BrowserRouter>
    )

}
export default App;