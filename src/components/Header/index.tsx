import { useTranslations } from 'next-intl'
import { LocaleSwitcher } from '../LocaleSwitcher'
import styles from './styles.module.scss'

export function Header() {
  const t = useTranslations('Home')

  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.headerTitle}>✂️ {t('title')}</h1>
        <p className={styles.headerSubtitle}>{t('description')}</p>
      </div>

      <LocaleSwitcher />
    </header>
  )
}
