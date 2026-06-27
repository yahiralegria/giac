'use client';

import { FormEvent, useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

import { contact } from '@/lib/site';

export default function ContactSection() {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const subject = encodeURIComponent(`Solicitud de cotizacion - ${name || 'GIAC'}`);
        const body = encodeURIComponent(
            `Nombre: ${name}\nEmpresa: ${company || 'No especificada'}\nEmail: ${email}\n\nDescripcion del proyecto:\n${description}`,
        );

        window.location.href = `${contact.emailHref}?subject=${subject}&body=${body}`;
    };

    return (
        <section className="contact-section">
            <div className="section-heading section-heading-light">
                <h1>Hablanos de tu proyecto</h1>
                <p>Estamos listos para ayudarte con tu proximo desafio.</p>
            </div>

            <div className="contact-grid">
                <div className="contact-info">
                    <div className="contact-row">
                        <span><Phone size={22} /></span>
                        <div>
                            <h3>Telefono</h3>
                            <a href={contact.phoneHref}>{contact.phone}</a>
                        </div>
                    </div>
                    <div className="contact-row">
                        <span><Mail size={22} /></span>
                        <div>
                            <h3>Email</h3>
                            <a href={contact.emailHref}>{contact.email}</a>
                        </div>
                    </div>
                    <div className="contact-row">
                        <span><MapPin size={22} /></span>
                        <div>
                            <h3>Ubicacion</h3>
                            <p>Francisco Villa #101<br />Coatzacoalcos, Veracruz</p>
                        </div>
                    </div>
                    <a href={contact.whatsappHref} className="whatsapp-button" target="_blank" rel="noreferrer">
                        Contactar por WhatsApp
                    </a>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <h2>Solicitar cotizacion</h2>
                    <p>Cuentanos de tu proyecto y te contactaremos pronto.</p>

                    <div className="form-two">
                        <label>
                            Nombre *
                            <input value={name} onChange={(event) => setName(event.target.value)} required placeholder="Tu nombre" />
                        </label>
                        <label>
                            Empresa
                            <input value={company} onChange={(event) => setCompany(event.target.value)} placeholder="Nombre de la empresa" />
                        </label>
                    </div>

                    <label>
                        Email *
                        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required placeholder="Correo electronico" />
                    </label>

                    <label>
                        Descripcion *
                        <textarea value={description} onChange={(event) => setDescription(event.target.value)} required rows={5} placeholder="Describe tu proyecto..." />
                    </label>

                    <button type="submit">Enviar solicitud</button>
                </form>
            </div>
        </section>
    );
}
