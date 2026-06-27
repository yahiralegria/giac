import Head from 'next/head';

import MediaCard from '@/components/MediaCard';
import { services } from '@/data/content';

export default function EngineeringPage() {
    const engineering = services.filter((service) => service.category === 'Ingeniería');

    return (
        <>
            <Head>
                <title>Servicios de Ingeniería | GIAC Oil & Gas</title>
            </Head>
            <main className="page-shell">
                <section className="section-heading">
                    <h1>Servicios de Ingeniería</h1>
                    <p>
                        Desarrollamos ingeniería conceptual, básica y de detalle para proyectos energéticos e
                        industriales, con enfoque en medición, regulación, análisis y control de fluidos.
                    </p>
                </section>

                <section className="card-grid">
                    {engineering.map((service) => (
                        <MediaCard key={service.id} {...service} />
                    ))}
                </section>
            </main>
        </>
    );
}
