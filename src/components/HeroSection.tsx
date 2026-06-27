import Link from 'next/link';

type HeroSectionProps = {
    id?: string;
    title: string;
    eyebrow?: string;
    body?: string;
    items?: string[];
    video: string;
    cta?: {
        href: string;
        label: string;
    };
    align?: 'left' | 'right';
    home?: boolean;
};

export default function HeroSection({ id, title, eyebrow, body, items, video, cta, align = 'left', home }: HeroSectionProps) {
    return (
        <section className={`video-section ${align === 'right' ? 'video-section-right' : ''} ${home ? 'hero-home' : ''}`} id={id}>
            <video autoPlay muted loop playsInline preload="metadata" className="video-bg">
                <source src={video} type="video/webm" />
            </video>
            <div className="video-shade" />

            <div className="video-content">
                {eyebrow && <span className="eyebrow">{eyebrow}</span>}
                {home ? <h1>{title}</h1> : <h2>{title}</h2>}
                {body && <p>{body}</p>}
                {items && (
                    <ul className="feature-list">
                        {items.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                )}
                {cta && (
                    <Link href={cta.href} className="outline-button">
                        {cta.label}
                    </Link>
                )}
            </div>
        </section>
    );
}
