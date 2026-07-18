import Head from 'next/head';

import { certificationsImage } from '@/data/content';

export default function CertificationsPage() {
    return (
        <>
            <Head>
                <title>Certificaciones | GIAC Oil & Gas</title>
            </Head>
            <main className="page-shell certifications-page">
                <section className="section-heading">
                    <h1>Certificaciones</h1>
                    <p>
                        Somos una empresa especializada en soluciones tecnológicas, respaldada por certificaciones
                        que garantizan calidad, seguridad y eficiencia en nuestros procesos.
                    </p>
                </section>

                <section className="certificate-showcase">
                    <img src={certificationsImage} alt="Certificados y constancias de GIAC Oil & Gas" />
                </section>
            </main>
        </>
    );
}
