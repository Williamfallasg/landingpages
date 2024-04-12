

import Cards from './componentes/Cards';
import Footer from './componentes/Footer';
import Jumbotron from './componentes/Jumbotron';
import Navbar from './componentes/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Jumbotron/>
       <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
