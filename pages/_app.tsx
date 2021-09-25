import "../styles/globals.css";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import { AppProps } from "next/dist/shared/lib/router/router";
import { NavBar } from "../components/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
