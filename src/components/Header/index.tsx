import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>✂️ Emoji Picker</h1>
      <p className={styles.headerSubtitle}>
        Search for your favorite emojis and share more easily
      </p>
    </header>
  );
}
