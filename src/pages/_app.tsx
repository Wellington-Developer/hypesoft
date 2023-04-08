import { AppProps } from "next/app";
import Head from "next/head";

// Global Styles
import GlobalStyles from "../styles/global";

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Hypersoft - Desafio</title>
                <meta name="description" content="A interview developed to work in Hypesoft Enterprise" />
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    )
}

export default App;