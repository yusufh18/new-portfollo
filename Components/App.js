import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./AboutMe";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
