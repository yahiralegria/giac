export type Category = 'Ingenieria' | 'Construccion';

export type CardItem = {
    id: number;
    name: string;
    description: string;
    category: Category;
    image: string;
};

export const services: CardItem[] = [
    {
        id: 1,
        name: 'Inspeccion de ductos',
        description: 'Inspeccion tecnica de ductos con drones y sensores.',
        category: 'Ingenieria',
        image: '/assets/header.webm',
    },
    {
        id: 2,
        name: 'Diseno de plantas',
        description: 'Diseno y simulacion de plantas de procesamiento para operaciones industriales.',
        category: 'Ingenieria',
        image: '/assets/ingenieria.webm',
    },
    {
        id: 3,
        name: 'Control electrico',
        description: 'Instalacion y configuracion de tableros electricos para procesos criticos.',
        category: 'Ingenieria',
        image: '/assets/ingenieria.webm',
    },
    {
        id: 4,
        name: 'Montaje de estructuras',
        description: 'Montaje y armado de estructuras metalicas para proyectos industriales.',
        category: 'Construccion',
        image: '/assets/construccion.webm',
    },
    {
        id: 5,
        name: 'Soldadura especializada',
        description: 'Servicios de soldadura de alta presion con enfoque en seguridad operativa.',
        category: 'Construccion',
        image: '/assets/construccion.webm',
    },
    {
        id: 6,
        name: 'Paileria industrial',
        description: 'Fabricacion de tanques, ductos y estructuras para el sector energetico.',
        category: 'Construccion',
        image: '/assets/construccion.webm',
    },
];

export const projects: CardItem[] = [
    {
        id: 1,
        name: 'Optimizacion de procesos termicos',
        description: 'Estudio para mejorar eficiencia energetica en procesos termicos.',
        category: 'Ingenieria',
        image: '/assets/ingenieria.webm',
    },
    {
        id: 2,
        name: 'Diseno de planta quimica',
        description: 'Diseno conceptual y detallado de una planta quimica.',
        category: 'Ingenieria',
        image: '/assets/header.webm',
    },
    {
        id: 3,
        name: 'Supervision electrica',
        description: 'Supervision tecnica en instalacion de sistemas electricos.',
        category: 'Ingenieria',
        image: '/assets/ingenieria.webm',
    },
    {
        id: 4,
        name: 'Montaje de nave industrial',
        description: 'Construccion y montaje de nave industrial de acero.',
        category: 'Construccion',
        image: '/assets/construccion.webm',
    },
    {
        id: 5,
        name: 'Obra civil para planta',
        description: 'Ejecucion de cimentaciones y estructuras civiles.',
        category: 'Construccion',
        image: '/assets/construccion.webm',
    },
    {
        id: 6,
        name: 'Instalacion de tuberias',
        description: 'Montaje de lineas de tuberia para proceso industrial.',
        category: 'Construccion',
        image: '/assets/header.webm',
    },
];

export const certifications = [
    { id: 1, name: 'ISO 9001:2015', image: '/assets/SELLO_9001.png' },
    { id: 2, name: 'ISO 14001:2015', image: '/assets/SELLO_14001.png' },
    { id: 3, name: 'ISO 45001:2018', image: '/assets/SELLO_45001.png' },
];

export const clients = [
    { name: 'PEMEX', image: '/assets/clients/pemex.png' },
    { name: 'AMI', image: '/assets/clients/ami.png' },
    { name: 'Scribe', image: '/assets/clients/scribe.png' },
    { name: 'SEDENA', image: '/assets/clients/sedena.png' },
];
