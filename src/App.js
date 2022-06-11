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
        <Routes>
          <Route
            path="/"
            element={
              <div className="page-contents">
                <Home />
                <About />
                <Work />
              </div>
            }
          />
          {/* routes for different projects */}
          {/* <Route path="wandr" element={<About />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
