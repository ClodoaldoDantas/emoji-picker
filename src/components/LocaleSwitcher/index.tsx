import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'
import { useRouter } from 'next/router'

import styles from './styles.module.scss'

const locales = [
  {
    locale: 'en-US',
    flag: 'https://hatscripts.github.io/circle-flags/flags/us.svg',
  },
  {
    locale: 'pt-BR',
    flag: 'https://hatscripts.github.io/circle-flags/flags/br.svg',
  },
]

export function LocaleSwitcher() {
  const { route, locale } = useRouter()

  return (
    <div className={styles.localeSwitcher}>
      {locales.map((item) => (
        <Link
          className={classNames({ [styles.active]: locale === item.locale })}
          key={item.locale}
          href={route}
          locale={item.locale}
        >
          <Image src={item.flag} alt="" width={20} height={20} />
          {item.locale}
        </Link>
      ))}
    </div>
  )
}
