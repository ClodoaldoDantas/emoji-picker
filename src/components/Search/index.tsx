import { MagnifyingGlass } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'

import styles from './styles.module.scss'
import { FormEvent, useState } from 'react'

interface SearchProps {
  onSearch: (value: string) => void
}

export function Search({ onSearch }: SearchProps) {
  const [text, setText] = useState('')
  const t = useTranslations('Home')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    onSearch(text)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input
        type="text"
        placeholder={t('placeholder')}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <button type="submit">
        <MagnifyingGlass size={20} />
      </button>
    </form>
  )
}
