import Head from 'next/head'
import { GetStaticPropsContext } from 'next'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

import { Header, Search, List, ListItem } from '@/components'
import { getEmojiList, Emoji } from '@/services/emoji'
import styles from '@/styles/Home.module.scss'

export default function Home({ emojiList }: { emojiList: Emoji[] }) {
  const t = useTranslations('Home')
  const [filter, setFilter] = useState('')

  function handleSearch(value: string) {
    setFilter(value)
  }

  const filteredEmojiList = emojiList.filter((emoji) => {
    return emoji.unicodeName.toLowerCase().includes(filter.toLowerCase())
  })

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.homepage}>
        <div className={styles.homeContainer}>
          <Header />

          <Search onSearch={handleSearch} />

          <List>
            {filteredEmojiList.map((emoji) => (
              <ListItem key={emoji.slug} data={emoji} />
            ))}
          </List>
        </div>
      </main>
    </>
  )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const emojiList = await getEmojiList()
  const messages = (await import(`../locales/${locale}.json`)).default

  return {
    props: {
      emojiList,
      messages,
    },
  }
}
