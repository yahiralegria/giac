import Head from 'next/head';
import { CalendarCheck, Cpu, Eye, Handshake, ShieldCheck, Target } from 'lucide-react';

const companyHighlights = [
    { icon: CalendarCheck, text: 'Operaciones desde 2018' },
    { icon: ShieldCheck, text: 'Sistema de gestión integral certificado' },
    { icon: Cpu, text: 'Personal, infraestructura y tecnología especializada' },
];

const principles = [
    {
        icon: Target,
        label: 'Misión',
        text:
            'Ofrecer soluciones innovadoras e integrales con la mejor tecnología, garantizando que nuestros productos y servicios cumplan con los más altos estándares de calidad para satisfacción de nuestros clientes.',
    },
    {
        icon: Eye,
        label: 'Visión',
        text:
            'Desarrollar un ADN en nuestros colaboradores que nos lleve a consolidarnos como una empresa líder en el mercado del sector energético nacional, diseñando y desarrollando proyectos con la mejor relación costo-beneficio.',
    },
    {
        icon: Handshake,
        label: 'Valores',
        text:
            'Integridad, compromiso, responsabilidad, eficiencia, trabajo en equipo, espíritu de servicio y respeto con nuestros colaboradores, clientes, socios comerciales, proveedores y nuestro entorno.',
    },
];

export default function UsPage() {
    return (
        <>
            <Head>
                <title>Sobre Nosotros | GIAC Oil & Gas</title>
            </Head>
            <main className="page-shell about-page">
                <section className="about-hero">
                    <h1>Soluciones integrales para el sector energético</h1>
                    <div className="about-intro">
                        <p>
                            GIAC OIL & GAS es una empresa mexicana, socialmente responsable. Inicia operaciones en el
                            año 2018, desarrollando proyectos de ingeniería en gasoductos para el servicio de gas
                            natural.
                        </p>
                        <p>
                            Posteriormente incursiona en proyectos integrales para el sector energético, proponiendo
                            soluciones innovadoras para la medición, regulación, análisis y control de fluidos.
                        </p>
                    </div>
                </section>

                <section className="about-highlights" aria-label="Fortalezas de GIAC Oil & Gas">
                    {companyHighlights.map(({ icon: Icon, text }) => (
                        <article key={text}>
                            <span>
                                <Icon size={24} aria-hidden="true" />
                            </span>
                            <p>{text}</p>
                        </article>
                    ))}
                </section>

                <section className="about-certification">
                    <p>
                        Nuestra empresa tiene un sistema de gestión integral certificado bajo los estándares ISO
                        9001:2015, ISO 45001:2018 e ISO 14001:2015.
                    </p>
                    <p>
                        Contamos con personal altamente capacitado, infraestructura y tecnología para el desarrollo de
                        nuestros productos y servicios.
                    </p>
                </section>

                <section className="about-principles">
                    {principles.map(({ icon: Icon, label, text }) => (
                        <article key={label}>
                            <div className="about-principle-heading">
                                <span>
                                    <Icon size={22} aria-hidden="true" />
                                </span>
                                <p className="about-principle-label">{label}</p>
                            </div>
                            <p>{text}</p>
                        </article>
                    ))}
                </section>
            </main>
        </>
    );
}
