import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProviderContext } from "../contexts/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProviderContext>
      <Component {...pageProps} />
    </ThemeProviderContext>
  );
}

export default MyApp;
