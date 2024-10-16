import { useState } from "react";

// Importing pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
// import Experience from "./pages/Experience/Experience.jsx";
import Contact from "./pages/Contact.jsx";
// import Signup from './components/Signup/Signup';
// import Login from './components/Login/Login';

// Importing components
import { Header } from "./components/Header.jsx";
import { BackgroundItem } from "./components/BackgroundItem.jsx";
import { SocialMedias } from "./components/SocialMedias.jsx";

/**
 * @component App
 * 
 * This is the main component of the application. It renders the primary layout structure and 
 * contains state to manage the application's dark mode theme. The App component displays the 
 * Header and Home, About pages, with BackgroundItem components providing animated background visuals.
 * 
 * @returns {JSX.Element} The App component
 */
export const App = () => {
  // State to track dark/light theme preference
  const [isDark, setIsDark] = useState(false);

  return (
    // Applying dark mode if isDark state is true
    <div className={`${isDark && "dark"} scroll-smooth`}>
      {/* Sticky Header component at the top */}
      <div className="sticky top-0 z-50">
        <Header isDark={isDark} setIsDark={setIsDark}/>
        <SocialMedias />
      </div>
      {/* BackgroundItem components for animated background effects */}
      <div className="z-0">
        <BackgroundItem top={12} left={42} animation="animate-back1" />
        <BackgroundItem top={70} left={50} animation="animate-back2" />
        <BackgroundItem top={17} left={6} animation="animate-back3" />
        <BackgroundItem top={20} left={60} animation="animate-back4" />
        <BackgroundItem top={67} left={10} animation="animate-back5" />
        <BackgroundItem top={80} left={70} animation="animate-back6" />
        <BackgroundItem top={60} left={80} animation="animate-back7" />
        <BackgroundItem top={32} left={25} animation="animate-back8" />
      </div>
      {/* Main content sections */}
      <div className="z-10">
        <Home />
        <About />
        {/* <Experience /> */}
        <Contact />
      </div>
    </div>
  );
};
