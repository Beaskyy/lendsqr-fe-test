import logo from "../assets/images/Group.svg";
import profile from "../assets/images/profile.png";
import "../Styles/navbar.css";
import { BiSearch } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-white fixed-top"
      style={{
        boxShadow: "3px 0px 20px rgba(0, 0, 0, 0.04)",
        zIndex: "100000 !important",
      }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" className="img-fluid" />
        </Link>
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <HiBars3BottomRight />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-lg-0">
            <li className="nav-item mx-5 search">
              <input
                type="text"
                className="form-control shadow-none"
                placeholder="Search for anything"
              />
              <button>
                <BiSearch />
              </button>
            </li>
          </ul>

          <div className="row docs mx-5">
            <div className="col">
              <p className="text-decoration-underline">Docs</p>
            </div>
            <div className="col">
              <IoMdNotificationsOutline />
            </div>
            <div className="col">
              <img src={profile} alt="profile" className="img-fluid" />
            </div>
            <div className="col">
              <span className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Adedeji
                </a>
                <ul className="dropdown-menu">
                  <li onClick={() => sessionStorage.clear()}>
                    <a className="dropdown-item" href="/Login">
                      Logout
                    </a>
                  </li>
                </ul>
              </span>
            </div>
          </div>

          <div className="mobile-menu">
            <div className="navbar-nav me-auto">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
