import Link from 'next/link';

import { contact } from '@/lib/site';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-grid">
                <section className="footer-brand">
                    <Link href="/" aria-label="Ir al inicio">
                        <img src="/assets/giac-logo.png" alt="GIAC Oil & Gas" />
                    </Link>
                    <p>
                        Soluciones integrales de ingenieria, construccion y servicios especializados para el sector
                        energetico e industrial.
                    </p>
                </section>

                <nav className="footer-column" aria-label="Navegacion del sitio">
                    <h3>Sitio</h3>
                    <Link href="/">Inicio</Link>
                    <Link href="/us">Nosotros</Link>
                    <Link href="/projects/engineering">Proyectos</Link>
                    <Link href="/certifications">Certificaciones</Link>
                </nav>

                <nav className="footer-column" aria-label="Servicios">
                    <h3>Servicios</h3>
                    <Link href="/engineering">Ingenieria</Link>
                    <Link href="/construction">Construccion</Link>
                    <Link href="/contact">Solicitar cotizacion</Link>
                </nav>

                <section className="footer-column">
                    <h3>Contacto</h3>
                    <a href={contact.phoneHref}>{contact.phone}</a>
                    <a href={contact.emailHref}>{contact.email}</a>
                    <p>{contact.address}</p>
                </section>
            </div>

            <div className="footer-bottom">
                <p>GIAC (R) {year}. Todos los derechos reservados.</p>
                <p>Oil & Gas · Ingenieria · Construccion</p>
            </div>
        </footer>
    );
}
