import type { AppProps } from "next/app";
import Head from "next/head";
import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ToastContainer } from "react-toastify";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";
import "@/styles/chota.css";
import "@/styles/more.css";
import styles from "@/styles/Home.module.css";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sound Bored</title>
        <meta name="description" content="Sound board for the TII Nation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer position="bottom-center" theme="dark" autoClose={2500} />
      <div className={inter.className}>
        <div>
          <main className={styles.main}>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}

function Header() {
  return <h1 className="text-center mt-1 mb-1">SOUND BORED</h1>;
}

function Footer() {
  return (
    <div className="p-2">
      <h3>That shit&#39;s important!</h3>
    </div>
  );
}
