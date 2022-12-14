import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Navbar, Footer } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
