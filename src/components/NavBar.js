import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function NavBar() {
  return (
    <div>
      <header>
        <nav
          className="navbar bg-dark border-bottom border-body" data-bs-theme="dark" 
        >
          <div className="container">
            <Link className="navbar-brand text-uppercase fw-semibold " to="/">
              Workout
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
