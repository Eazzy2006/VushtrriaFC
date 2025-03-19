import React from "react";

export default function Navbar({ toggleSidebar }) {
  return (
    <div>
      <div className="container">
      <header className="d-flex flex-wrap justify-content-between py-3 mb-3 border-bottom navbar-custom">
      <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-auto link-body-emphasis text-decoration-none"
          >
            <img
              className="logo"
              src="../images/FC_Vushtrria.jpg"
              width="50px"
              alt="Logo"
            />
          </a>

          <ul className="nav navi nav-pills">
            <li className="nav-item">
              <a href="#" className="nav-link" aria-current="page">
                Kryefaqja
              </a>
            </li>
            <li className="nav-item">
              <a href="#ndeshja" className="nav-link">
                Ndeshja 
              </a>
            </li>
            <li className="nav-item">
              <a href="#lajmet" className="nav-link">
                Lajmet & Eventet
              </a>
            </li>
            <li className="nav-item">
              <a href="#klubi" className="nav-link">
                Klubi
              </a>
            </li>
            <li className="nav-item">
              <a href="#kontakt" className="nav-link">
                Kontakt
              </a>
            </li>
            <li className="nav-item">
              {/* Toggle Button */}
              <button onClick={toggleSidebar} className="nav-link btn">
                Shiko Tabelen
              </button>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
}
