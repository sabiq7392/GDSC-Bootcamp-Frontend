import styles from "./Header.module.css";

export default function Header( ) {

  const data = ["Home", "About", "Contact"];

  return (
    <nav className={styles.container}>
      <ul>
        {data.map((_data) => (
          <li className={styles.item}>{_data}</li>
        ))}
      </ul>
    </nav>
  );
}