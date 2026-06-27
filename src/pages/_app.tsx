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
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            </Head>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}
