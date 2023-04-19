import { MagnifyingGlass } from "@phosphor-icons/react";
import { InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Search(props: SearchProps) {
  return (
    <div className={styles.searchForm}>
      <MagnifyingGlass size={20} />
      <input type="text" placeholder="Search..." {...props} />
    </div>
  );
}
