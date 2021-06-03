import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inicio from './paginas/inicio';
import Agenda from './paginas/agenda';
import Ingresos from './paginas/ingresos';
import Clientes from './paginas/clientes';
import MisRedes from './paginas/misRedes';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/inicio' exact component={Inicio}/>
          <Route path='/agenda' exact component={Agenda}/>
          <Route path='/ingresos' exact component={Ingresos}/>
          <Route path='/clientes' exact component={Clientes}/>
          <Route path='/redes' exact component={MisRedes}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
