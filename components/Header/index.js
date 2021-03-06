import React, { useState, useContext } from "react";
import Link from "next/link";
import { AuthContext } from "../../context/auth";

import Hamburger from "../Hamburger";
import MobileNavigation from "../MobileNavigation";

const Header = () => {
  const [menuClicked, setMenuClicked] = useState(false);
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
            <div className="col-7 d-none d-md-flex align-items-center justify-content-end">
              <nav>
                <ul className="d-flex">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/aanbod">Aangeboden websites</Link>
                  </li>
                  <li>
                    <Link href="/uitleg">Het concept</Link>
                  </li>
                  <li>
                    <Link href="/veelgestelde-vragen">Over ons</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-2 d-none d-md-flex align-items-center justify-content-end">
              {context.user ? (
                <>
                  <Link href="/dashboard">
                    <a>
                      <i class="fas fa-user-alt"></i>
                    </a>
                  </Link>
                  <Link href="/dashboard">
                    <a>
                      <i class="fas fa-cog"></i>
                    </a>
                  </Link>
                  <span onClick={context.logout}>
                    <i class="fas fa-sign-out-alt"></i>
                  </span>
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
