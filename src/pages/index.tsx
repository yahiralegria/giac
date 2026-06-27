import Head from 'next/head';

import HeroSection from '@/components/HeroSection';
import MediaCard from '@/components/MediaCard';
import { certifications, clients } from '@/data/content';

export default function HomePage() {
    return (
        <>
            <Head>
                <title>GIAC Oil & Gas</title>
                <meta
                    name="description"
                    content="Soluciones de ingenieria, construccion y servicios especializados para el sector energetico e industrial."
                />
            </Head>

            <main>
                <HeroSection
                    id="inicio"
                    home
                    title="Construyendo el futuro"
                    body="GIAC OIL & GAS es una empresa mexicana, socialmente responsable. Realiza proyectos de ingenieria en gasoductos para Gas Natural e incursiona en proyectos integrales para el sector energetico, proponiendo soluciones innovadoras para la medicion, regulacion, analisis y control de fluidos."
                    video="/assets/header.webm"
                    cta={{ href: '/projects/engineering', label: 'Conocer mas' }}
                />

                <HeroSection
                    id="ingenieria"
                    title="Ingenieria"
                    body="Ingenieria conceptual, basica y a detalle de:"
                    items={[
                        'Sistemas de medicion de transferencia de custodia',
                        'Tanques de almacenamiento',
                        'Analisis estructural y de flexibilidad',
                    ]}
                    video="/assets/ingenieria.webm"
                    cta={{ href: '/engineering', label: 'Ver mas servicios' }}
                />

                <HeroSection
                    id="construccion"
                    align="right"
                    title="Construccion"
                    items={[
                        'Construccion, mantenimiento y fabricacion de trenes de medicion fiscal para hidrocarburos.',
                        'Construccion, mantenimiento y fabricacion de trenes de medicion fiscal para medicion de agua.',
                        'Construccion, mantenimiento y fabricacion de tanques presurizados.',
                        'Construccion, mantenimiento y reparacion de tanques de almacenamiento.',
                    ]}
                    video="/assets/construccion.webm"
                    cta={{ href: '/construction', label: 'Ver mas servicios' }}
                />

                <section className="cert-section">
                    <div className="split">
                        <div>
                            <span className="eyebrow blue">Certificaciones ISO</span>
                            <h2>Sistema de gestion integral certificado</h2>
                            <p>
                                Nuestro sistema de gestion integra calidad, seguridad y responsabilidad ambiental para
                                operar con estandares confiables en proyectos industriales y energeticos.
                            </p>
                            <a className="light-button" href="/certifications">Ver mas certificaciones</a>
                        </div>
                        <div className="cert-home-grid">
                            {certifications.map((certification) => (
                                <article key={certification.id}>
                                    <img src={certification.image} alt={certification.name} />
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="clients-section">
                    <div className="split clients-split">
                        <div>
                            <span className="eyebrow blue">Confianza institucional</span>
                            <h2>Clientes que respaldan nuestra experiencia</h2>
                            <p>
                                Colaboramos con organizaciones del sector energetico, industrial e institucional,
                                aportando soluciones tecnicas con enfoque en calidad, seguridad y cumplimiento.
                            </p>
                        </div>
                        <div className="clients-grid">
                            {clients.map((client) => (
                                <MediaCard key={client.name} name={client.name} image={client.image} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
