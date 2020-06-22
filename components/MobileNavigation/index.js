import React from "react";
import Link from "next/link";

const MobileNavigation = ({ isOpen }) => {
  const mobilenav = "mobilenav d-flex flex-column ";
  return (
    <div className={isOpen ? `${mobilenav} open` : `${mobilenav}`}>
      <ul className="mobilenav__links d-flex flex-column">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/aanbod">
            <a>Aangeboden websites</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Uitleg concept</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Veelgestelde vragen</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
      <div className="d-flex pl-4">
        <button className="btn btn--primary">
          <i class="fas fa-user" />
          Inloggen
        </button>
        <button className="btn btn--primary">
          <i class="fas fa-sign-in-alt"></i>
          Registeren
        </button>
      </div>
      <div className="schedule-box d-flex justify-content-center align-items-center">
        <i class="fas fa-phone"></i> Plan een gesprek
      </div>
    </div>
  );
};

export default MobileNavigation;
