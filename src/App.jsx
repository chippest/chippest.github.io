import React, { useState } from "react";
import "./app.css";
import { Projects } from "./Pages/Projects";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";

function App() {
  const [selectedPage, setSelectedPage] = useState("About");
  const colorVariables = [
    { name: "--c1", value: "#092635" },
    { name: "--c2", value: "#1b4242" },
    { name: "--c3", value: "#5c8374" },
    { name: "--c4", value: "#9ec8b9" },
  ];

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
      <div className="colorRef">
        {colorVariables.map((color) => (
          <div
            key={color.name}
            className="colorItem"
            style={{ backgroundColor: color.value }}
          >
            <span>{color.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
