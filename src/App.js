// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import { Header, Footer } from "./components/index.js";
import { Home, About, Work } from "./sections/index.js";

const App = () => {
  return (
    <>
      <Router>
      <Header />
      {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
        </Routes> */}
      <Home />
      <About />
      <Work />
      <Footer />
      </Router>
    </>
  );
};

export default App;
