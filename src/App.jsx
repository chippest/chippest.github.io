import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Page } from "./Classes/Pages";

function App() {
  const pages = [
    new Page("Home", "Home page"),
    new Page("About", "About page"),
    new Page("Contact", "Contact page"),
    new Page("Projects", "Projects page"),
  ];
  return (
    <BrowserRouter>
      <div className="main">
        {pages.map((page, index) => (
          <div key={index}>
            <Link to={`/${page.title.toLowerCase()}`}>
              <button>{page.title}</button>
            </Link>
            <Routes>
              <Route
                path={`/${page.title.toLowerCase()}`}
                element={page.content}
              />
            </Routes>
          </div>
        ))}
      </div>
    </BrowserRouter>
  );
}

export default App;
