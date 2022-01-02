import type { NextPage } from "next";
import Head from "next/head";
import Mouse from "../src/components/mouse";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ajibola Ojo | Software Engineer</title>
        <meta name="description" content="Ajibola Ojo's Portfolio Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen w-screen flex items-center justify-center">
        <h1 className="text-xl font-semibold align-middle">Ajibola Ojo |</h1><span className="text-uppercase ml-2">Software Engineer</span>
      </main>
      <Mouse />
    </div>
  );
};

export default Home;
