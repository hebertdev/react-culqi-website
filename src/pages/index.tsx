import Head from "next/head";

//components
import { Usage } from "components/Usage";
import { About } from "components/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>React Culqi | hebertdev</title>
        <meta name="title" content={"React Culqi | hebertdev"} />
        <meta
          name="description"
          content={
            "Una biblioteca de React para la integración con el procesador de pagos Culqi, compatible con Next.js"
          }
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={"https://react-culqi.hebertdev.net/"}
        />
        <meta property="og:title" content={"React Culqi | hebertdev"} />
        <meta
          property="og:description"
          content={
            "Una biblioteca de React para la integración con el procesador de pagos Culqi, compatible con Next.js"
          }
        />

        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/hebertdev/react-culqi-next/master/culqiV4.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={"https://react-culqi.hebertdev.net/"}
        />
        <meta property="twitter:title" content={"React Culqi | hebertdev"} />
        <meta
          property="twitter:description"
          content={
            "Una biblioteca de React para la integración con el procesador de pagos Culqi, compatible con Next.js"
          }
        />

        <meta
          property="twitter:image"
          content="https://raw.githubusercontent.com/hebertdev/react-culqi-next/master/culqiV4.png"
        />
      </Head>
      <About />
      <Usage />
    </>
  );
}
