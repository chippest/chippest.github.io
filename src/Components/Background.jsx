import React, { useEffect, useRef } from "react";
import "./Background.css";

const Background = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const numCubes = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const cubes = [];

    for (let i = 0; i < numCubes; i++) {
      const cube = document.createElement("div");
      cube.className = "cube";
      cube.style.left = `${Math.random() * 100}%`;
      cube.style.top = `${Math.random() * 100}%`;
      cube.style.animationDuration = `${Math.random() * 10 + 5}s`;
      cube.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(cube);
      cubes.push(cube);
    }

    return () => {
      cubes.forEach((cube) => container.removeChild(cube));
    };
  }, []);

  return (
    <>
      <div className="background" ref={containerRef}></div>
    </>
  );
};

export default Background;
