import Head from 'next/head';

import MediaCard from '@/components/MediaCard';
import { services } from '@/data/content';

export default function EngineeringPage() {
    const engineering = services.filter((service) => service.category === 'Ingenieria');

    return (
        <>
            <Head>
                <title>Servicios de Ingenieria | GIAC Oil & Gas</title>
            </Head>
            <main className="page-shell">
                <section className="section-heading">
                    <h1>Servicios de Ingenieria</h1>
                    <p>
                        Desarrollamos proyectos industriales y de energia con altos estandares de calidad, seguridad y
                        eficiencia, asegurando cumplimiento normativo y confiabilidad operativa.
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
