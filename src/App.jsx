/**
 * @file App.jsx is the main component of the application.
 * @author Vincent Bichat <vincent260705@gmail.com>
 */

import { useState } from "react";

// Importing pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
// import Experience from "./pages/Experience/Experience.jsx";
// import Contact from "./pages/Contact/Contact.jsx";
// import Signup from './components/Signup/Signup';
// import Login from './components/Login/Login';

// Importing components
import { Header } from "./components/Header.jsx";

/**
 * The main component of the application.
 * 
 * @returns {JSX.Element} App component
 */
export const App = () => {
  // Get the user's preference for the theme
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`${isDark && "dark"} scroll-smooth`}>
      <div className="sticky top-0 z-50">
        <Header isDark={isDark} setIsDark={setIsDark}/>
      </div>
      <Home />
      <About />
      {/* <Experience /> */}
      {/* <Contact /> */}
    </div>
  );
};
