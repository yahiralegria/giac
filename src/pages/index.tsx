import Head from 'next/head';

import HeroSection from '@/components/HeroSection';
import { certifications, clients, engineeringSoftwareImage } from '@/data/content';

export default function HomePage() {
    return (
        <>
            <Head>
                <title>GIAC Oil & Gas</title>
                <meta
                    name="description"
                    content="Soluciones de ingeniería, construcción y servicios especializados para el sector energético e industrial."
                />
            </Head>

            <main>
                <HeroSection
                    id="inicio"
                    home
                    title="Construyendo el futuro"
                    body="GIAC OIL & GAS es una empresa mexicana, socialmente responsable. Realiza proyectos de ingeniería en gasoductos para gas natural e incursiona en proyectos integrales para el sector energético, proponiendo soluciones innovadoras para la medición, regulación, análisis y control de fluidos."
                    video="/assets/header.webm"
                    cta={{ href: '/us', label: 'Conocer más' }}
                />

                <HeroSection
                    id="ingenieria"
                    title="Ingeniería"
                    body="Ingeniería conceptual, básica y de detalle para sistemas energéticos e industriales:"
                    items={[
                        'ERMyC, City Gates y ductos para transporte de fluidos',
                        'Tanques API 650, sistemas de seguridad y control automatizado',
                        'Modelado 3D, FARO 3D, análisis estructural y de flexibilidad',
                    ]}
                    video="/assets/ingenieria.webm"
                    cta={{ href: '/engineering', label: 'Ver más servicios' }}
                />

                <HeroSection
                    id="construccion"
                    align="right"
                    title="Construcción"
                    items={[
                        'Construcción, mantenimiento y fabricación de trenes de medición fiscal para hidrocarburos.',
                        'Construcción, mantenimiento y fabricación de trenes de medición fiscal para medición de agua.',
                        'Construcción, mantenimiento y fabricación de tanques presurizados.',
                        'Construcción, mantenimiento y reparación de tanques de almacenamiento.',
                    ]}
                    video="/assets/construccion.webm"
                    cta={{ href: '/construction', label: 'Ver más servicios' }}
                />

                <section className="software-section home-software">
                    <div className="software-content">
                        <div className="software-copy">
                            <span className="eyebrow blue">Software especializado</span>
                            <h2>Software técnico para diseño, cálculo y modelado</h2>
                            <p>
                                Herramientas utilizadas para modelado, cálculo, análisis y diseño técnico en proyectos
                                industriales y energéticos.
                            </p>
                        </div>
                        <div className="software-media">
                            <img src={engineeringSoftwareImage} alt="Software especializado para ingeniería y construcción" />
                        </div>
                    </div>
                </section>

                <section className="cert-section">
                    <div className="cert-home-content">
                        <span className="eyebrow blue">Certificaciones ISO</span>
                        <h2>Sistema de gestión integral certificado</h2>
                        <p>
                            Nuestro sistema de gestión integra calidad, seguridad y responsabilidad ambiental para
                            operar con estándares confiables en proyectos industriales y energéticos.
                        </p>
                        <div className="cert-home-grid">
                            {certifications.map((certification) => (
                                <article key={certification.id}>
                                    <img src={certification.image} alt={certification.name} />
                                </article>
                            ))}
                        </div>
                        <a className="light-button" href="/certifications">Ver más certificaciones</a>
                    </div>
                </section>

                <section className="clients-section">
                    <div className="clients-content">
                        <span className="eyebrow blue">Confianza institucional</span>
                        <h2>Empresas e instituciones que han confiado en GIAC</h2>
                        <p>
                            Colaboramos con organizaciones del sector energético, industrial e institucional, aportando
                            soluciones técnicas con enfoque en calidad, seguridad y cumplimiento.
                        </p>
                        <div className="clients-grid">
                            {clients.map((client) => (
                                <article key={client.name} className="client-logo">
                                    <img src={client.image} alt={client.name} />
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
