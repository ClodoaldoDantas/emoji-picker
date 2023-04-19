import Head from "next/head";
import { useState } from "react";
import { Header, Search, List, ListItem } from "@/components";
import styles from "@/styles/Home.module.scss";

interface Emoji {
  slug: string;
  unicodeName: string;
  character: string;
}

export default function Home({ emojiList }: { emojiList: Emoji[] }) {
  const [filter, setFilter] = useState("");

  const filteredEmojiList = emojiList.filter((emoji) => {
    return emoji.unicodeName.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>
      <Head>
        <title>Emoji Picker</title>
        <meta
          name="description"
          content="Search for your favorite emojis and share more easily"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.homepage}>
        <div className={styles.homeContainer}>
          <Header />
          <Search value={filter} onChange={(e) => setFilter(e.target.value)} />

          <List>
            {filteredEmojiList.map((emoji) => (
              <ListItem key={emoji.slug} data={emoji.character} />
            ))}
          </List>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://emoji-api.com/emojis?access_key=${process.env.EMOJI_API_KEY}`
  );

  const emojiList = await res.json();

  return {
    props: {
      emojiList,
    },
  };
}
