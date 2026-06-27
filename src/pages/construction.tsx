import Head from 'next/head';

import MediaCard from '@/components/MediaCard';
import { services } from '@/data/content';

export default function ConstructionPage() {
    const construction = services.filter((service) => service.category === 'Construccion');

    return (
        <>
            <Head>
                <title>Servicios de Construccion | GIAC Oil & Gas</title>
            </Head>
            <main className="page-shell">
                <section className="section-heading">
                    <h1>Servicios de Construccion</h1>
                    <p>
                        Ofrecemos soluciones integrales para el desarrollo de proyectos en el sector energetico,
                        petroquimico y de transporte de fluidos.
                    </p>
                </section>

                <section className="card-grid">
                    {construction.map((service) => (
                        <MediaCard key={service.id} {...service} />
                    ))}
                </section>
            </main>
        </>
    );
}
