import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface ListProps {
  children: ReactNode;
}

export function List({ children }: ListProps) {
  return <ul className={styles.list}>{children}</ul>;
}
