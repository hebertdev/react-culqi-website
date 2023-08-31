import "@/styles/globals.css";
import NextApp, { AppProps, AppContext } from "next/app";
import { MantineProvider } from "@mantine/core";
import { Layout } from "layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withNormalizeCSS
      withGlobalStyles
      theme={{
        colors: {
          brand: [
            "#F6F2F6",
            "#C9B0CD",
            "#A977B3",
            "#904C9D",
            "#763383",
            "#512A59",
            "#38223C",
            "#271A2A",
            "#1B141D",
            "#130F14",
          ],
        },
        colorScheme: "light",
        primaryColor: "brand",
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
  };
};
