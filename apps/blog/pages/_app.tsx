import type { AppProps } from "next/app";
import { ThemeProvider } from "reflexjs";
import theme from "src/theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
