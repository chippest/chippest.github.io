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

  return (
    <>
      <div className="app">
        <div className="pages">
          {pages.map((page, index) => {
            const title = page.title.toLowerCase();
            return (
              <>
                <button>{page.title}</button>
                <div className={`page open`}>
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
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
