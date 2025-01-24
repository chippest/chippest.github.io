import { useState, useEffect } from "react";
import "./App.css";
import { Page } from "./Classes/Pages";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Projects } from "./Pages/Projects";
import { render } from "react-dom";

function App() {
  const pages = [
    new Page("Home", "Home page"),
    new Page("About", "About page"),
    new Page("Contact", "Contact page"),
    new Page("Projects", "Projects page"),
  ];
  let pageTitles = pages.map((page) => page.title.toLowerCase());
  const [currentPage, setCurrentPage] = useState(null);
  const [lastPage, setLastPage] = useState(null);

  return (
    <>
      <div className="app">
        <div className="pages">
          {pages.map((page, index) => {
            const pageL = page.title.toLowerCase();
            let current = currentPage === pageL;
            let last = lastPage === pageL;
            let render = true;
            return (
              <>
                <button
                  onClick={() => {
                    if (currentPage === pageL) return;
                    setLastPage(currentPage);
                    setCurrentPage(pageL);
                  }}
                >
                  {page.title}
                </button>
                {(current || last || render) && (
                  <div className={`page ${current && "open"}`}>
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
                )}
                {/* <div className={`page ${page.title.toLowerCase()}`}>
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
                </div> */}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
