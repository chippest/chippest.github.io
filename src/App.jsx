import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Page } from "./Classes/Pages";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Projects } from "./Pages/Projects";

function App() {
  const pages = [
    new Page("Home", "Home page"),
    new Page("About", "About page"),
    new Page("Contact", "Contact page"),
    new Page("Projects", "Projects page"),
  ];
  const [currentPage, setCurrentPage] = useState(null);

  useEffect(() => {
    const path = window.location.pathname.substring(1);
    setCurrentPage(path);
  }, []);

  return (
    <BrowserRouter>
      <div className="main">
        {pages.map((page, index) => (
          <div key={index}>
            <Link to={`/${page.title.toLowerCase()}`}>
              <button
                onClick={() => {
                  setCurrentPage(page.title.toLowerCase());
                }}
              >
                {page.title}
              </button>
            </Link>
            <Routes>
              <Route
                path={`/${page.title.toLowerCase()}`}
                element={
                  <div>
                    {page.title.toLowerCase() === currentPage &&
                    currentPage === "home" ? (
                      <Home />
                    ) : currentPage === "about" ? (
                      <About />
                    ) : currentPage === "contact" ? (
                      <Contact />
                    ) : (
                      currentPage === "projects" && <Projects />
                    )}
                  </div>
                }
              />
            </Routes>
          </div>
        ))}
      </div>
    </BrowserRouter>
  );
}

export default App;
