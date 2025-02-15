import React, { useState } from "react";
import { Projects } from "./Pages/Projects";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";

function App() {
  const [selectedPage, setSelectedPage] = useState("About");

  return (
    <div className="app">
      <h1>Chipp</h1>
      <div className="container">
        <div className="pageNav">
          <div className="button" onClick={() => setSelectedPage("About")}>
            About
          </div>
          <div className="button" onClick={() => setSelectedPage("Projects")}>
            Projects
          </div>
          <div className="button" onClick={() => setSelectedPage("Contact")}>
            Contact
          </div>
        </div>
        <div className="page">
          {selectedPage === "About" && <About />}
          {selectedPage === "Projects" && <Projects />}
          {selectedPage === "Contact" && <Contact />}
        </div>
      </div>
    </div>
  );
}

export default App;
