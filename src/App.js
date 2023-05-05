import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/DataMagik' exact Component={Home} />
          <Route path='/menu' exact Component={Menu} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;