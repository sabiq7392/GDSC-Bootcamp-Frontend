import styles from "./header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className={styles.text}>
        <h1>Covid ID</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <a href=".">Global</a>
          </li>
          <li>
            <a href=".">Indonesia</a>
          </li>
          <li>
            <a href=".">Provinsi</a>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
