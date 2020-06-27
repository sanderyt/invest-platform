import React, { useState, useContext } from "react";
import Link from "next/link";
import { AuthContext } from "../../context/auth";
import { useLogout } from "../../api/firebase/hooks";

import Hamburger from "../Hamburger";
import MobileNavigation from "../MobileNavigation";

const Header = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const { logout } = useLogout();

  const toggleMenu = () => {
    setMenuClicked(!menuClicked);
  };

  const context = useContext(AuthContext);

  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="header row">
            <div className="col-6 col-md-3 d-flex align-items-center justify-content-center">
              <Link href="/">
                <a>
                  <h3>investeer-online.nl</h3>
                </a>
              </Link>
            </div>
            <div className="col-6 d-none d-md-flex align-items-center justify-content-end">
              <nav>
                <ul className="d-flex">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/aanbod">Aangeboden websites</Link>
                  </li>
                  <li>
                    <Link href="/">Uitleg concept</Link>
                  </li>
                  <li>
                    <Link href="/">Veelgestelde vragen</Link>
                  </li>
                  <li>
                    <Link href="/">Blog</Link>
                  </li>
                  <li>
                    <Link href="/">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-3 d-none d-md-flex align-items-center justify-content-end">
              {context.user ? (
                <>
                  <span>Welcome back, {context.user.email}</span>
                  <Link href="/dashboard">
                    <a>Dashboard</a>
                  </Link>
                  <button className="btn btn--primary" onClick={logout}>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <a>
                      <button className="btn btn--primary">
                        <i className="fas fa-user"></i>Login
                      </button>
                    </a>
                  </Link>
                  <Link href="/registreren">
                    <a>
                      <button className="btn btn--primary">Registreren</button>
                    </a>
                  </Link>
                </>
              )}
            </div>
            <div className="col-6 d-flex d-md-none justify-content-end align-items-center">
              <Hamburger clickHandler={toggleMenu} isOpen={menuClicked} />
            </div>
          </div>
        </div>
      </header>
      <MobileNavigation isOpen={menuClicked} />
    </>
  );
};

export default Header;
