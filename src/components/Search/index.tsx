import { MagnifyingGlass } from '@phosphor-icons/react'
import { InputHTMLAttributes } from 'react'
import { useTranslations } from 'next-intl'

import styles from './styles.module.scss'

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Search(props: SearchProps) {
  const t = useTranslations('Home')

  return (
    <div className={styles.searchForm}>
      <MagnifyingGlass size={20} />
      <input type="text" placeholder={t('placeholder')} {...props} />
    </div>
  )
}
