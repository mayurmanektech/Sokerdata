import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import user_icon from "../../assets/images/user-icon.svg";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector("header");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("fixed")
      : header.classList.remove("fixed");
  };
  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid p-0">
              <NavLink className="navbar-brand" to={"/"}>
                <img src={logo} alt="logo" />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to={"/"}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"About"}>
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"Publicationspodcast"}>
                      publications & podcast
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/data-sharing-consent"}>
                      data collaborators
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"Lifesciences"}>
                      life sciences
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"Resources"}>
                      resources
                    </NavLink>
                  </li>
                  <li className="nav-item user_nav">
                    <NavLink className="nav-link" to={"/login"}>
                      <img src={user_icon}></img>
                    </NavLink>
                  </li>
                  <li className="nav-item contact_nav">
                    <NavLink className="nav-link" to={"Contact"}>
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
