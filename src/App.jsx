import { useState, useEffect } from "react";
import "./App.css";
import {
  HashRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
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
  let pageTitles = pages.map((page) => page.title.toLowerCase());
  const [currentPage, setCurrentPage] = useState(null);

  return (
    <HashRouter>
      <Content
        pages={pages}
        pageTitles={pageTitles}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </HashRouter>
  );
}

function Content({ pages, pageTitles, setCurrentPage, currentPage }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname.substring(1);
    setCurrentPage(path);
  }, [location, setCurrentPage]);

  useEffect(() => {
    if (currentPage === null) {
      navigate("/");
    }
  }, [currentPage, navigate]);

  return (
    <div className="main">
      {pages.map((page, index) => (
        <div key={index}>
          <Link to={`/${page.title.toLowerCase()}`}>
            <button
              onClick={() => {
                currentPage === page.title.toLowerCase()
                  ? setCurrentPage(null)
                  : setCurrentPage(page.title.toLowerCase());
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
            <Route
              path="*"
              element={
                pageTitles.includes(location.pathname.slice(1)) ? null : (
                  <Navigate to="/" />
                )
              }
            />
          </Routes>
        </div>
      ))}
    </div>
  );
}

export default App;
