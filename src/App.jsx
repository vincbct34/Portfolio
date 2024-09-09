import React, { useState } from "react";
import useLocalStorage from "use-local-storage";

import "./App.css";
import { ToggleDarkMode } from "./components/ToggleDarkMode";
import { Navbar } from "./components/Navbar";

export const App = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <ToggleDarkMode isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      <Navbar />
      <h1 className="title">Hello world!</h1>
      <div className="box">
        <h2>This is a box</h2>
      </div>
    </div>
  );
};