import { useEffect } from "react";
import "../styles/globals.css";
import { Custom } from "../components/custome";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Custom();
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
