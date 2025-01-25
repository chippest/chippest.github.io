import { useState, useEffect } from "react";
import {
  Route,
  Routes,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
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
  const [renderedPage, setRenderedPage] = useState(null);
  const [fullButtons, setFullButtons] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname.substring(1);
    if (pages.map((page) => page.title.toLowerCase()).includes(path)) {
      setCurrentPage(path);
      setRenderedPage(path);
      setTimeout(() => {
        const pageElement = document.querySelector(`.page.${path}`);
        if (pageElement) {
          pageElement.classList.add("open");
        }
      }, 500); // Delay before adding the "open" class
    } else {
      setCurrentPage(null);
      setRenderedPage(null);
    }
  }, [location]);

  const handlePageChange = (pageTitle) => {
    const newPage = pageTitle.toLowerCase();
    if (currentPage === newPage) {
      // If the current page is already rendered, unrender it and navigate to default URL
      const pageElement = document.querySelector(`.page.${newPage}`);
      if (pageElement) {
        pageElement.classList.remove("open");
        setTimeout(() => {
          setRenderedPage(null);
          setCurrentPage(null);
          setFullButtons(false);
          navigate("/");
        }, 500); // Delay to match the CSS transition
      }
    } else {
      setFullButtons(true);
      if (currentPage) {
        // If a different page is rendered, unrender the previous page
        const previousPageElement = document.querySelector(
          `.page.${currentPage}`
        );
        if (previousPageElement) {
          previousPageElement.classList.remove("open");
          setTimeout(() => {
            setRenderedPage(null);
            setCurrentPage(newPage);
            setRenderedPage(newPage);
            navigate(`/${newPage}`);
            setTimeout(() => {
              const newPageElement = document.querySelector(`.page.${newPage}`);
              if (newPageElement) {
                newPageElement.classList.add("open");
              }
            }, 100); // Delay before adding the "open" class
          }, 500); // Delay to match the CSS transition
        }
      } else {
        // If no page is currently rendered, render the new page
        setCurrentPage(newPage);
        setRenderedPage(newPage);
        navigate(`/${newPage}`);
        setTimeout(() => {
          const newPageElement = document.querySelector(`.page.${newPage}`);
          if (newPageElement) {
            newPageElement.classList.add("open");
          }
        }, 100); // Delay before adding the "open" class
      }
    }
  };

  return (
    <div className="app">
      <div className={`pages ${fullButtons ? "gapped" : ""}`}>
        {pages.map((page, index) => {
          const title = page.title.toLowerCase();
          return (
            <>
              <button
                onClick={() => handlePageChange(page.title)}
                className={fullButtons && "full"}
              >
                <span>{page.title}</span>
              </button>
              {renderedPage === title && (
                <div className={`page ${title}`}>
                  {title === "home" ? (
                    <Home />
                  ) : title === "about" ? (
                    <About />
                  ) : title === "contact" ? (
                    <Contact />
                  ) : (
                    title === "projects" && <Projects />
                  )}
                </div>
              )}
            </>
          );
        })}
      </div>
      <Routes>
        {pages.map((page, index) => (
          <Route
            key={index}
            path={`/${page.title.toLowerCase()}`}
            element={<div />}
          />
        ))}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
