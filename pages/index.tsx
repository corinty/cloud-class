import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to my page</h1>
        <img src="https://media.giphy.com/media/Vbtc9VG51NtzT1Qnv1/giphy.gif" alt="Joey wave" />
        <aside>
          <p>This is one of the things</p>
          <p>Another one</p>
        </aside>
      </main>
    </div>
  );
};

export default Home;
