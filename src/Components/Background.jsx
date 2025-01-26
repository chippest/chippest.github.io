import React, { useEffect, useRef } from "react";
import "./Background.css";

const Background = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const numSymbols = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const symbols = [];

    for (let i = 0; i < numSymbols; i++) {
      const symbol = document.createElement("div");
      symbol.className = "symbol";
      symbol.textContent = "+";
      symbol.style.left = `${Math.random() * 100}%`;
      symbol.style.top = `${Math.random() * 100}%`;
      symbol.style.fontSize = `${Math.random() * 20 + 10}px`;
      symbol.style.fontWeight = Math.random() > 0.5 ? "bold" : "normal";
      symbol.style.animationDuration = `${Math.random() * 10 + 5}s`;
      symbol.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(symbol);
      symbols.push(symbol);
    }

    return () => {
      symbols.forEach((symbol) => container.removeChild(symbol));
    };
  }, []);

  return (
    <>
      <div className="background" ref={containerRef}></div>
    </>
  );
};

export default Background;
