// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import { Header, Footer } from "./components/index.js";
import { Home, About, Work, Project } from "./sections/index.js";

const App = () => {
  return (
    <>
      <Header />
      <div className="routes">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <div className="page-contents">
                  <Home />
                  <Work />
                  <About />
                </div>
              }
            />
            {/* routes for different projects */}
            <Route path="wandr" element={<Project name="wandr" />} />
            <Route path="childcare" element={<Project name="childcare" />} />
            <Route path="usda" element={<Project name="usda" />} />
            <Route path="charity" element={<Project name="charity" />} />
            <Route path="coffee" element={<Project name="coffee" />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
};

export default App;
