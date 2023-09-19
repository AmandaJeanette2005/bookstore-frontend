import { Link, Navigate, useNavigate } from "react-router-dom";
import './navbar.css'

export default function Navbar(){


  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ height: "" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand">
            <img
              src="https://i.pinimg.com/564x/b9/0c/d4/b90cd4a56b40d6021e1f6e90494b2fdd.jpg"
              style={{width:"10%"}}
            />
          </a>
          <a className="navbar-brand" href="#">
            BOOKSTORE!
          </a>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item-bar">
                <Link to="/home" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item-bar">
                <Link to="about" className="nav-link active" aria-current="page">
                  About
                </Link>
              </li>
              <li className="nav-item-bar">
                <Link to="/bread" className="nav-link active" aria-current="page">
                  Books
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

