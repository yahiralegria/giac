'use client';

import { FormEvent, useEffect, useState } from 'react';
import { MapPin, X } from 'lucide-react';

import { contact } from '@/lib/site';

function WhatsAppIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
                d="M19.05 4.91A9.78 9.78 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91a9.86 9.86 0 0 0-2.91-7.01Z"
                fill="#25D366"
            />
            <path
                d="M17.47 14.39c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.75-.71 2-1.4.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35Z"
                fill="#ffffff"
            />
        </svg>
    );
}

function EmailIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
                d="M4.75 6.75h14.5v10.5H4.75V6.75Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
            />
            <path
                d="m5.25 7.25 6.75 5 6.75-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

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
            const response = await fetch('/api/contact.php', {
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
            <div className="section-heading section-heading-light contact-heading">
                <h1>Háblanos de tu proyecto</h1>
                <p>Estamos listos para ayudarte con tu próximo desafío.</p>
            </div>

            <div className="contact-grid">
                <div
                    className="contact-info"
                    style={{
                        alignSelf: 'start',
                        justifySelf: 'start',
                        display: 'grid',
                        width: 'min(100%, 420px)',
                        gap: 14,
                    }}
                >
                    <article
                        className="contact-location-card"
                        style={{
                            position: 'relative',
                            display: 'grid',
                            gap: 2,
                            border: '1px solid rgba(217, 226, 239, 0.95)',
                            borderRadius: 8,
                            background: '#ffffff',
                            padding: 20,
                            boxShadow: '0 12px 30px rgba(7, 17, 31, 0.06)',
                        }}
                    >
                        <div
                            className="contact-card-heading"
                            style={{
                                display: 'block',
                                paddingRight: 54,
                            }}
                        >
                            <div>
                                <span
                                    className="contact-eyebrow"
                                    style={{
                                        display: 'block',
                                        marginBottom: 8,
                                        color: '#1a73e8',
                                        fontSize: 12,
                                        fontWeight: 900,
                                        letterSpacing: '0.12em',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    Ubicación
                                </span>
                                <h3 style={{ margin: 0, color: '#00326d', fontSize: 22, lineHeight: 1.2 }}>
                                    Oficinas GIAC
                                </h3>
                            </div>
                            <span
                                className="contact-location-icon"
                                style={{
                                    position: 'absolute',
                                    top: 20,
                                    right: 20,
                                    display: 'grid',
                                    width: 42,
                                    height: 42,
                                    placeItems: 'center',
                                    borderRadius: 8,
                                    background: '#eef5ff',
                                    color: '#1a73e8',
                                }}
                            >
                                <MapPin size={20} aria-hidden="true" />
                            </span>
                        </div>
                        <p style={{ margin: 0, color: '#526071', fontSize: 15, lineHeight: 1.48 }}>
                            {contact.addressLines.map((line) => (
                                <span style={{ display: 'block' }} key={line}>{line}</span>
                            ))}
                        </p>
                    </article>

                    <article
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 14,
                            border: '1px solid rgba(217, 226, 239, 0.95)',
                            borderRadius: 8,
                            background: '#ffffff',
                            padding: 16,
                            boxShadow: '0 12px 30px rgba(7, 17, 31, 0.06)',
                        }}
                    >
                        <div>
                            <span
                                style={{
                                    display: 'block',
                                    marginBottom: 4,
                                    color: '#1a73e8',
                                    fontSize: 11,
                                    fontWeight: 900,
                                    letterSpacing: '0.12em',
                                    textTransform: 'uppercase',
                                }}
                            >
                                Contacto
                            </span>
                            <h3 style={{ margin: 0, color: '#00326d', fontSize: 18, lineHeight: 1.2 }}>
                                Atención comercial
                            </h3>
                        </div>

                        <div style={{ display: 'flex', flex: '0 0 auto', gap: 8 }}>
                            <a
                                href={contact.whatsappHref}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Enviar mensaje por WhatsApp"
                                style={{
                                    display: 'grid',
                                    width: 40,
                                    height: 40,
                                    placeItems: 'center',
                                    border: '1px solid #d9e2ef',
                                    borderRadius: 8,
                                    background: '#ffffff',
                                }}
                            >
                                <WhatsAppIcon />
                            </a>

                            <a
                                href={contact.emailHref}
                                aria-label="Enviar correo electrónico"
                                style={{
                                    display: 'grid',
                                    width: 40,
                                    height: 40,
                                    placeItems: 'center',
                                    border: '1px solid #d9e2ef',
                                    borderRadius: 8,
                                    background: '#ffffff',
                                    color: '#00326d',
                                }}
                            >
                                <EmailIcon />
                            </a>
                        </div>
                    </article>
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
