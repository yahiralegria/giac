type MediaCardProps = {
    name: string;
    description?: string;
    image: string;
};

export default function MediaCard({ name, description, image }: MediaCardProps) {
    const isVideo = image.endsWith('.webm') || image.endsWith('.mp4');

    return (
        <article className="media-card">
            <div className="media-card-asset">
                {isVideo ? (
                    <video autoPlay muted loop playsInline preload="metadata">
                        <source src={image} type={image.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
                    </video>
                ) : (
                    <img src={image} alt={name} />
                )}
            </div>
            <div className="media-card-body">
                <h3>{name}</h3>
                {description && <p>{description}</p>}
            </div>
        </article>
    );
}
