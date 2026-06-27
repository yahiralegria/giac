'use client';

import { FormEvent, useEffect, useState } from 'react';
import { Mail, MapPin, Phone, UserRound, X } from 'lucide-react';

import { contact } from '@/lib/site';

export default function ContactSection() {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (!isModalOpen) {
            return;
        }

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsModalOpen(false);
            }
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleEscape);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleEscape);
        };
    }, [isModalOpen]);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus('sending');
        setMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    company,
                    email,
                    description,
                }),
            });

            const result = (await response.json()) as { message?: string };

            if (!response.ok) {
                throw new Error(result.message || 'No pudimos enviar tu solicitud.');
            }

            setName('');
            setCompany('');
            setEmail('');
            setDescription('');
            setStatus('success');
            setMessage(result.message || 'Solicitud enviada correctamente.');
            setIsModalOpen(true);
        } catch (error) {
            setStatus('error');
            setMessage(error instanceof Error ? error.message : 'No pudimos enviar tu solicitud.');
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);

        if (status !== 'sending') {
            setStatus('idle');
            setMessage('');
        }
    };

    return (
        <section className="contact-section">
            <div className="section-heading section-heading-light">
                <h1>Háblanos de tu proyecto</h1>
                <p>Estamos listos para ayudarte con tu próximo desafío.</p>
            </div>

            <div className="contact-grid">
                <div className="contact-info">
                    <div className="contact-row">
                        <span><MapPin size={22} /></span>
                        <div>
                            <h3>Dirección</h3>
                            <p>
                                {contact.addressLines.map((line) => (
                                    <span key={line}>{line}</span>
                                ))}
                            </p>
                        </div>
                    </div>

                    {contact.people.map((person) => (
                        <div className="contact-row contact-person" key={person.email}>
                            <span><UserRound size={22} /></span>
                            <div>
                                <h3>{person.name}</h3>
                                <p>{person.role}</p>
                                <a href={person.whatsappHref} target="_blank" rel="noreferrer">
                                    <Phone size={18} aria-hidden="true" />
                                    {person.phone}
                                </a>
                                <a href={person.emailHref}>
                                    <Mail size={18} aria-hidden="true" />
                                    {person.email}
                                </a>
                            </div>
                        </div>
                    ))}

                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <h2>Solicitar cotización</h2>
                    <p>Cuéntanos de tu proyecto y te contactaremos pronto.</p>

                    <div className="form-two">
                        <label>
                            Nombre *
                            <input value={name} onChange={(event) => setName(event.target.value)} required placeholder="Tu nombre" disabled={status === 'sending'} />
                        </label>
                        <label>
                            Empresa
                            <input value={company} onChange={(event) => setCompany(event.target.value)} placeholder="Nombre de la empresa" disabled={status === 'sending'} />
                        </label>
                    </div>

                    <label>
                        Correo electrónico *
                            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required placeholder="Correo electrónico" disabled={status === 'sending'} />
                        </label>

                        <label>
                        Descripción *
                        <textarea value={description} onChange={(event) => setDescription(event.target.value)} required rows={5} placeholder="Describe tu proyecto..." disabled={status === 'sending'} />
                    </label>

                    <button type="submit" disabled={status === 'sending'}>
                        {status === 'sending' ? (
                            <span className="button-loading">
                                <span className="button-spinner" aria-hidden="true" />
                                Enviando
                            </span>
                        ) : (
                            'Enviar solicitud'
                        )}
                    </button>
                </form>
            </div>

            {status === 'sending' && (
                <div className="sending-overlay" role="status" aria-live="polite">
                    <div className="sending-modal">
                        <span className="sending-spinner" aria-hidden="true" />
                        <h2>Enviando solicitud...</h2>
                        <p>Estamos preparando tu mensaje para GIAC. Esto tomará solo un momento.</p>
                    </div>
                </div>
            )}

            {isModalOpen && (
                <div className="modal-backdrop" role="presentation" onMouseDown={closeModal}>
                    <div
                        className="contact-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="contact-modal-title"
                        onMouseDown={(event) => event.stopPropagation()}
                    >
                        <button className="modal-close" type="button" aria-label="Cerrar mensaje" onClick={closeModal}>
                            <X size={20} />
                        </button>

                        <div className={status === 'success' ? 'modal-icon modal-icon-success' : 'modal-icon modal-icon-error'}>
                            {status === 'success' ? '✓' : '!'}
                        </div>

                        <h2 id="contact-modal-title">
                            {status === 'success' ? 'Solicitud enviada' : 'No se pudo enviar'}
                        </h2>
                        <p>{message}</p>

                        <button className="modal-action" type="button" onClick={closeModal}>
                            Entendido
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
