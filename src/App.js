//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Inicio';
import Servicios from './components/Servicios';
import Proyectos from './components/Proyectos';
import SobreNosotros from './components/SobreNosotros';
import Galeria from './components/Galeria';
import Contacto from './components/Contacto';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Servicios" component={Servicios} />
            <Route exact path="/Proyectos" component={Proyectos} />
            <Route exact path="/Sobre-Nosotros" component={SobreNosotros} />
            <Route exact path="/Galeria" component={Galeria} />
            <Route exact path="/Contacto" component={Contacto} />
            {/* Puedes agregar más rutas aquí */}
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
