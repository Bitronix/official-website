import Head from "next/head";
import Footer from "../components/Footer";

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
          <h1 className="text-7xl md:text-8xl font-extrabold leading-tighter tracking-tighter mb-10">
            Bitronix
          </h1>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-10">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              Empowering Tomorrow, One Byte at a Time!
            </span>
          </h2>
          <p className="text-xl mt-2 font-semibold">Loading...</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
