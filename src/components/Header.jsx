import { useRef } from "react";

const Header = () => {
  const burger = useRef();
  const navLinks = useRef();

  const toggleMenu = () => {
    navLinks.current.classList.toggle("active");
    burger.current.classList.toggle("active");
  };

  return (
    <div className="header">
      <div className="logo">Navigation</div>
      <ul ref={navLinks} className="nav-links">
        <li>Home</li>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div ref={burger} className="burger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Header;
