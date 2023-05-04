import { useState } from "react";
import Blog from "./components/Blog";
import Description from "./components/Description";
import Footer from "./components/Footer";
import Goals from "./components/Goals";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Topbar from "./components/Topbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Hamburger from "./components/Hamburger";
// import "./App.css";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    // <Router>
    <div className="gradient">
      <div className="App">
        <Topbar />
        <Hamburger />

        <div className="mainContent">
          <Hero />
          <Work />
          <Description />
          <Blog />
          <Goals />
          <Routes>
            <Route exact path="/" />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
    // </Router>
  );
}

export default App;
