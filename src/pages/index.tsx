import Head from "next/head";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
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

      <main className={poppins.className}>
        <h1>Emoji Picker</h1>
        <p>
          💾 Busque seus emojis favoritos e compartilhe com maior facilidade
        </p>
      </main>
    </>
  );
}
