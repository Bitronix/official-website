import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bitronix</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Head>
      <div className="flex h-screen justify-center items-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold">Bitronix</h1>
          <p className="text-xl mt-2">Loading...</p>
        </div>
      </div>
    </>
  );
}
