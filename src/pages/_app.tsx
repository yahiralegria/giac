import type { AppProps } from 'next/app';
import Head from 'next/head';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico?v=3" sizes="any" />
                <link rel="icon" href="/favicon.svg?v=3" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=3" />
            </Head>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}
