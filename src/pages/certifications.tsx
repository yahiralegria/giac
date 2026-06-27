import Head from 'next/head';

import { certifications } from '@/data/content';

export default function CertificationsPage() {
    return (
        <>
            <Head>
                <title>Certificaciones | GIAC Oil & Gas</title>
            </Head>
            <main className="page-shell">
                <section className="section-heading">
                    <h1>Certificaciones</h1>
                    <p>
                        Somos una empresa especializada en soluciones tecnologicas, respaldada por certificaciones ISO
                        que garantizan calidad, seguridad y eficiencia en nuestros procesos.
                    </p>
                </section>

                <section className="cert-grid">
                    {certifications.map((certification) => (
                        <article key={certification.id} className="cert-card">
                            <img src={certification.image} alt={certification.name} />
                            <h2>{certification.name}</h2>
                        </article>
                    ))}
                </section>
            </main>
        </>
    );
}
