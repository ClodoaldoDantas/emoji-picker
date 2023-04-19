import toast from "react-hot-toast";
import styles from "./styles.module.scss";

export interface ListItemProps {
  data: string;
}

export function ListItem({ data }: ListItemProps) {
  function handleCopyText() {
    navigator.clipboard.writeText(data).then(() => {
      toast.success(`${data} copied`);
    });
  }

  return (
    <li className={styles.listItem}>
      <button onClick={handleCopyText} type="button">
        {data}
      </button>
    </li>
  );
}
