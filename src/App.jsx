import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useLocalStorage from "use-local-storage";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import { Utils } from "./components/Utils/Utils.jsx";
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';

export const App = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div data-theme={isDark ? "dark" : "light"}>
      {}
      <Router>
        {}
        <Utils isDark={isDark} setIsDark={setIsDark} />

        {}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};
