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
import Background from "./Components/Background";

function App() {
  const pages = [
    new Page("Home", "#8e2de2", "#4a00e0"),
    new Page("About", "#ff7e5f", "#feb47b"),
    new Page("Contact", "#43cea2", "#185a9d"),
    new Page("Projects", "#ff6a00", "#ee0979"),
  ];
  const [currentPage, setCurrentPage] = useState(null);
  const [renderedPage, setRenderedPage] = useState(null);
  const [fullButtons, setFullButtons] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname.substring(1);
    if (pages.map((page) => page.title.toLowerCase()).includes(path)) {
      setCurrentPage(path);
      setRenderedPage(path);
      setAppBackgroundColor(path);
      setFullButtons(true);
      document.querySelector(".app").classList.add("page-active");
      setTimeout(() => {
        const pageElement = document.querySelector(`.page.${path}`);
        if (pageElement) {
          pageElement.classList.add("open");
        }
        setIsTransitioning(false);
      }, 500); // Delay before adding the "open" class
    } else {
      setFullButtons(false);
      setCurrentPage(null);
      setRenderedPage(null);
      setIsTransitioning(false);
      setAppBackgroundColor(null);
      document.querySelector(".app").classList.remove("page-active");
    }
  }, [location]);

  const setAppBackgroundColor = (pageTitle) => {
    const page = pages.find((p) => p.title.toLowerCase() === pageTitle);
    if (page) {
      document.querySelector(".app").style.backgroundColor = page.gradientStart;
    } else {
      document.querySelector(".app").style.backgroundColor = "rgb(36, 36, 36)";
    }
  };

  const handlePageChange = (pageTitle) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
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
          setIsTransitioning(false);
          setAppBackgroundColor(null);
          document.querySelector(".app").classList.remove("page-active");
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
            setAppBackgroundColor(newPage);
            document.querySelector(".app").classList.add("page-active");
            setTimeout(() => {
              const newPageElement = document.querySelector(`.page.${newPage}`);
              if (newPageElement) {
                newPageElement.classList.add("open");
              }
              setIsTransitioning(false);
            }, 100); // Delay before adding the "open" class
          }, 500); // Delay to match the CSS transition
        }
      } else {
        // If no page is currently rendered, render the new page
        setCurrentPage(newPage);
        setRenderedPage(newPage);
        navigate(`/${newPage}`);
        setAppBackgroundColor(newPage);
        document.querySelector(".app").classList.add("page-active");
        setTimeout(() => {
          const newPageElement = document.querySelector(`.page.${newPage}`);
          if (newPageElement) {
            newPageElement.classList.add("open");
          }
          setIsTransitioning(false);
        }, 500); // Delay before adding the "open" class
      }
    }
  };

  return (
    <div className="app">
      <Background />
      <div className={`pages ${fullButtons ? "gapped" : ""}`}>
        {pages.map((page, index) => {
          const title = page.title.toLowerCase();
          return (
            <>
              <button
                onClick={() => handlePageChange(page.title)}
                onMouseEnter={() => {
                  setAppBackgroundColor(title);
                  document.querySelector(".app").classList.add("page-active");
                }}
                onMouseLeave={() => {
                  setAppBackgroundColor(currentPage);
                  if (!currentPage) {
                    document
                      .querySelector(".app")
                      .classList.remove("page-active");
                  }
                }}
                className={fullButtons && "full"}
                style={{
                  "--gradient-start": page.gradientStart,
                  "--gradient-end": page.gradientEnd,
                }}
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
