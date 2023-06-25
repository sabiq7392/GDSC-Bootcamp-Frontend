import styles from "./header.module.css";

function Header() {
  return (
    <header>
      <div className={styles.text}>
        <h1>Covid ID</h1>
      </div>
      <nav>
        <ul>
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
            <a href=".">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
