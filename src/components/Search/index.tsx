import { MagnifyingGlass } from "@phosphor-icons/react";
import styles from "./styles.module.scss";

export function Search() {
  return (
    <div className={styles.searchForm}>
      <MagnifyingGlass size={20} />
      <input type="text" placeholder="Pesquisar..." />
    </div>
  );
}
