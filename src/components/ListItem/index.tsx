import toast from 'react-hot-toast'
import styles from './styles.module.scss'

export interface ListItemProps {
  data: {
    character: string
    unicodeName: string
  }
}

export function ListItem({ data }: ListItemProps) {
  async function handleCopyText() {
    await navigator.clipboard.writeText(data.character)
    toast.success(`${data} copied`)
  }

  return (
    <li className={styles.listItem}>
      <button title={data.unicodeName} onClick={handleCopyText} type="button">
        {data.character}
      </button>
    </li>
  )
}
