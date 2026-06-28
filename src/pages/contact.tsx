import Head from 'next/head';

import ContactSection from '@/components/ContactSection';

export default function ContactPage() {
    return (
        <>
            <Head>
                <title>Contacto | GIAC Oil & Gas</title>
            </Head>
            <main className="contact-page min-h-screen">
                <ContactSection />
            </main>
        </>
    );
}
