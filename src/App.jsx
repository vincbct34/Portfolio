/**
 * @file App.jsx is the main component of the application.
 * @author Vincent Bichat <vincent260705@gmail.com>
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useLocalStorage from "use-local-storage";

// Importing pages
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Experience from "./pages/Experience/Experience.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';

// Importing components
import { Utils } from "./components/Utils/Utils.jsx";

/**
 * The main component of the application.
 * 
 * @returns {JSX.Element} App component
 */
export const App = () => {
  // Get the user's preference for the theme
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // State to store the theme preference
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div data-theme={isDark ? "dark" : "light"}> {/* Adapt the app to the theme chosen. */}
      <Router>
        <Utils isDark={isDark} setIsDark={setIsDark} />
        <Routes>
          {/* All the pages in the application. */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};
