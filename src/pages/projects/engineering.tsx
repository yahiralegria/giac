import Head from 'next/head';
import Link from 'next/link';

import MediaCard from '@/components/MediaCard';
import { projects } from '@/data/content';

export default function EngineeringProjectsPage() {
    const engineering = projects.filter((project) => project.category === 'Ingeniería');

    return (
        <>
            <Head>
                <title>Portafolio de Ingenieria | GIAC Oil & Gas</title>
            </Head>
            <main className="page-shell">
                <section className="section-heading">
                    <h1>Portafolio de Ingenieria</h1>
                    <p>
                        Presentamos capacidades tecnicas desarrolladas para proyectos industriales y energeticos:
                        diseno, calculo, modelado, analisis y puesta en operacion.
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

                <section className="project-strip">
                    <article>
                        <img src="/assets/engineering/point-cloud-flexibility.webp" alt="Modelado 3D y analisis de flexibilidad" />
                        <div>
                            <span className="eyebrow blue">Ingenieria aplicada</span>
                            <h2>De la nube de puntos al entregable tecnico</h2>
                            <p>
                                Integramos levantamientos 3D, revision de ingenierias y analisis de flexibilidad para
                                reducir incertidumbre antes de fabricar, instalar o poner en operacion.
                            </p>
                        </div>
                    </article>
                    <article>
                        <img src="/assets/engineering/detail-commissioning.webp" alt="Ingenieria de detalle y puesta en operacion" />
                        <div>
                            <span className="eyebrow blue">Ejecucion tecnica</span>
                            <h2>Ingenieria de detalle y puesta en operacion</h2>
                            <p>
                                Documentamos, verificamos y acompanamos la transicion de la ingenieria hacia campo para
                                mantener continuidad entre diseno, construccion y arranque.
                            </p>
                        </div>
                    </article>
                </section>
            </main>
        </>
    );
}
