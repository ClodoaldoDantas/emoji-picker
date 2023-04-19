import Head from "next/head";
import { Header, Search, List, ListItem } from "@/components";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  const emojiList = ["😎", "😆", "😅", "🥲", "🥳"];

  return (
    <>
      <Head>
        <title>Emoji Picker</title>
        <meta
          name="description"
          content="Busque seus emojis favoritos e compartilhe com maior facilidade"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.homepage}>
        <div className={styles.homeContainer}>
          <Header />
          <Search />

          <List>
            {emojiList.map((emoji) => (
              <ListItem key={emoji} emoji={emoji} />
            ))}
          </List>
        </div>
      </main>
    </>
  );
}
