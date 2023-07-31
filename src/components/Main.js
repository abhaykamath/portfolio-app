import React from "react";
import "../styles/Main.css";
import Projects from "./Projects";
import About from "./About";

function Main() {
  return (
    <main>
      <div className="header">Projects</div>
      <Projects />
      <div className="header">About Me</div>
      <About />
    </main>
  );
}

export default Main;
