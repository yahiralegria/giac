'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { navLinks } from '@/lib/site';

export default function Header() {
    const { pathname } = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const isHome = pathname === '/';
    const solid = isScrolled || !isHome || isOpen;

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <header className={solid ? 'site-header site-header-solid' : 'site-header'}>
            <Link href="/" className="brand" aria-label="Ir al inicio" onClick={() => setIsOpen(false)}>
                <img src="/assets/giac-logo-transparent.png" alt="GIAC Oil & Gas" />
            </Link>

            <button
                className="menu-button"
                type="button"
                aria-label={isOpen ? 'Cerrar menu' : 'Abrir menu'}
                aria-expanded={isOpen}
                onClick={() => setIsOpen((value) => !value)}
            >
                {isOpen ? <X size={26} /> : <Menu size={28} />}
            </button>

            {isOpen && <button className="menu-backdrop" aria-label="Cerrar menu" onClick={() => setIsOpen(false)} />}

            <nav className={isOpen ? 'nav nav-open' : 'nav'} aria-label="Navegacion principal">
                {navLinks.map((link) => {
                    const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={isActive ? 'nav-link nav-link-active' : 'nav-link'}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                            <span />
                        </Link>
                    );
                })}
            </nav>
        </header>
    );
}
