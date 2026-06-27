import Head from 'next/head';

const cards = [
    {
        image: '/assets/icons/mision.svg',
        title: 'Mision',
        text: 'Ser un grupo de profesionales visionarios y creativos, enfocados en la satisfaccion de nuestros clientes mediante soluciones tecnicas innovadoras, seguras y sustentables.',
    },
    {
        image: '/assets/icons/vision.svg',
        title: 'Vision',
        text: 'Consolidarnos como una empresa especializada, lider en el mercado energetico nacional, que impulse el desarrollo mediante un capital humano de alto valor.',
    },
    {
        image: '/assets/icons/valores.svg',
        title: 'Valores',
        text: 'Integridad, compromiso, responsabilidad, eficiencia, transparencia, innovacion y mejora continua.',
    },
    {
        image: '/assets/icons/objetivo.svg',
        title: 'Objetivo',
        text: 'Desarrollar proyectos de ingenieria y energia con los mas altos estandares de calidad y seguridad.',
    },
];

export default function UsPage() {
    return (
        <>
            <Head>
                <title>Sobre Nuestra Empresa | GIAC Oil & Gas</title>
            </Head>
            <main className="page-shell">
                <section className="section-heading">
                    <h1>Sobre Nuestra Empresa</h1>
                    <p>
                        GIAC OIL & GAS es una empresa mexicana, socialmente responsable. Inicio operaciones en el ano
                        2018, desarrollando proyectos de ingenieria en gasoductos para Gas Natural e incursionando en
                        proyectos integrales para el sector energetico.
                    </p>
                </section>

                <section className="values-grid">
                    {cards.map((card) => (
                        <article key={card.title} className="value-card">
                            <img src={card.image} alt={card.title} />
                            <h2>{card.title}</h2>
                            <p>{card.text}</p>
                        </article>
                    ))}
                </section>
            </main>
        </>
    );
}
