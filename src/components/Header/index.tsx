import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>✂️ Emoji Picker</h1>
      <p className={styles.headerSubtitle}>
        Busque seus emojis favoritos e compartilhe com maior facilidade
      </p>
    </header>
  );
}
