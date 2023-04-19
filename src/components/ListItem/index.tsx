import toast from "react-hot-toast";
import styles from "./styles.module.scss";

export interface ListItemProps {
  emoji: string;
}

export function ListItem({ emoji }: ListItemProps) {
  function handleCopyEmoji() {
    navigator.clipboard.writeText(emoji).then(() => {
      toast.success(`${emoji} copiado com sucesso`);
    });
  }

  return (
    <li className={styles.listItem}>
      <button onClick={handleCopyEmoji} type="button">
        {emoji}
      </button>
    </li>
  );
}
