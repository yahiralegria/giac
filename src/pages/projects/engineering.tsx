import Head from 'next/head';
import Link from 'next/link';

import MediaCard from '@/components/MediaCard';
import { projects } from '@/data/content';

export default function EngineeringProjectsPage() {
    const engineering = projects.filter((project) => project.category === 'Ingenieria');

    return (
        <>
            <Head>
                <title>Portafolio de Ingenieria | GIAC Oil & Gas</title>
            </Head>
            <main className="page-shell">
                <section className="section-heading">
                    <h1>Portafolio</h1>
                    <p>
                        Presentamos una seleccion de nuestros proyectos en construccion e ingenieria, desarrollados con
                        altos estandares de calidad, seguridad y eficiencia.
                    </p>
                    <div className="filter-tabs">
                        <Link href="/projects/construction">Construccion</Link>
                        <Link className="active" href="/projects/engineering">Ingenieria</Link>
                    </div>
                </section>

                <section className="card-grid two-col">
                    {engineering.map((project) => (
                        <MediaCard key={project.id} {...project} />
                    ))}
                </section>
            </main>
        </>
    );
}
