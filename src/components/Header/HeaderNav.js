import { Link } from "react-router-dom";
import DarkMode from "./DarkMode/DarkMode";

export default function HeaderNav() {
  return (
    <nav className="header__navigation">
      <ul className="header__list">
        {/* <li className="header__nav-item">
          <Link className="header__nav-link">About</Link>
        </li>
        <li className="header__nav-item">
          <Link className="header__nav-link">Contact</Link>
        </li> */}
        <DarkMode />
      </ul>
    </nav>
  );
}
