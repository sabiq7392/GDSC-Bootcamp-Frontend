import styles from "./Header.module.css"

export default function Header( ) {

  const data = ["Home", "About", "Contact"];

  return (
    <nav>
      <ul className={styles.list_item}>
        {data.map((_data) => (
          <li className={styles.item}>{_data}</li>
        ))}
      </ul>
    </nav>
  );
}