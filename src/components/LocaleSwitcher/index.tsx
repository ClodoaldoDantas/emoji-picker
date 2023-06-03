import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './styles.module.scss'

export function LocaleSwitcher() {
  const { route } = useRouter()

  return (
    <div className={styles.localeSwitcher}>
      <Link href={route} locale="pt-BR">
        🇧🇷 pt-BR
      </Link>

      <Link href={route} locale="en-US">
        🇺🇸 en-US
      </Link>
    </div>
  )
}
