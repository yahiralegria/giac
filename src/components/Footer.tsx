import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

import { contact } from '@/lib/site';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-cta">
                <section className="footer-brand">
                    <Link href="/" aria-label="Ir al inicio">
                        <img src="/assets/giac-logo.png" alt="GIAC Oil & Gas" />
                    </Link>
                    <p>
                        Soluciones integrales de ingenieria, construccion y servicios especializados para el sector
                        energetico e industrial.
                    </p>
                </section>

                <Link className="footer-cta-link" href="/contact">
                    Solicitar cotizacion
                    <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
            </div>

            <div className="footer-grid">
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
                    <a className="footer-contact-link" href={contact.phoneHref}>
                        <Phone size={18} aria-hidden="true" />
                        {contact.phone}
                    </a>
                    <a className="footer-contact-link" href={contact.emailHref}>
                        <Mail size={18} aria-hidden="true" />
                        {contact.email}
                    </a>
                    <p className="footer-contact-link">
                        <MapPin size={18} aria-hidden="true" />
                        {contact.address}
                    </p>
                </section>
            </div>

            <div className="footer-bottom">
                <p>GIAC (R) {year}. Todos los derechos reservados.</p>
                <p>Ingenieria, construccion y servicios especializados.</p>
            </div>
        </footer>
    );
}
