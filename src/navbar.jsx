import React from "react";

function Navbar() {
  const navLinks = ["Home", "About", "Contact", "More"];
  return (
    <nav className="d-flex justify-content-between px-5 py-2 bg-light shadow">
      {/* can also make the logo a component */}
      <span className="navbar-logo fw-bold text-warning">LogoName</span>
      <ul className="nav gap-5">
        {navLinks.map((link, idx) => (
          <li key={idx}>
            <a
              className="text-decoration-none text-dark fs-6
              align-items-center"
              href={link}
              target="_blank"
              rel="noopener noreferrer">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
