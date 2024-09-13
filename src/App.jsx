import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useLocalStorage from "use-local-storage";

// Importing page components
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import { Header } from "./components/Header/Header.jsx";
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';

/**
 * App Component
 * 
 * Main application component that handles routing and theme management.
 * 
 * @returns {JSX.Element} The rendered App component.
 */
export const App = () => {
  // Determine initial theme preference based on user's system settings
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // Use localStorage to persist theme preference across sessions
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div data-theme={isDark ? "dark" : "light"}>
      {/* Router component for handling routing in the application */}
      <Router>
        {/* Header component with theme toggle functionality */}
        <Header isDark={isDark} setIsDark={setIsDark} />
        
        {/* Define routes for different pages in the application */}
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
