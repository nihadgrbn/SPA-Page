import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css"; 

function App() {
  return (
    <Router basename="/pages">
      <div className="navbar">
        <div className="navContent">
          <Link to="/">Haqqımda</Link>
          <Link to="/projects">İşlərim</Link>
          <Link to="/contact">Əlaqə</Link>
        </div>
      </div>

      <div className="page">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
