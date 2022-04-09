// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import { Header, Footer } from './components/index.js';
import { About, Work } from './pages/index.js';

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/about" element={ <About/> } />
          <Route path="/work" element={ <Work/> } />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
