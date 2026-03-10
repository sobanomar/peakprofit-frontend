import Lenis from "@studio-freight/lenis";
import "./App.css";
import Router from "./Router";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
