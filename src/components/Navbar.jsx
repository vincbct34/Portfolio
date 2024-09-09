import { useState, useRef, useEffect } from 'react';
import { links } from '../links';
import { SlArrowUp } from "react-icons/sl";

import './Navbar.css';

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const linksRef = useRef(null);
  const containerRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      containerRef.current.style.height = `${linksHeight}px`;
    } else {
      containerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <div>
      <nav>
        <button
          onClick={toggleLinks}
          className={isClicked ? 'clicked' : ''}
        >
          <SlArrowUp />
        </button>
        <div className="links-container" ref={containerRef} style={{ height: '0px', overflow: 'hidden', transition: 'height 0.3s ease' }}>
          <div className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <a key={id} href={url}>
                  {text}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
};