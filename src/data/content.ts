export type Category = 'Ingeniería' | 'Construcción';

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
        name: 'ERMyC',
        description:
            'Estaciones de regulación, medición y control para fluidos, desarrolladas desde ingeniería conceptual hasta detalle.',
        category: 'Ingeniería',
        image: '/assets/engineering/services/ermyc.webp',
    },
    {
        id: 2,
        name: 'City Gates',
        description: 'Diseño de City Gates para gas natural con enfoque en seguridad, medición y continuidad operativa.',
        category: 'Ingeniería',
        image: '/assets/engineering/services/city-gates.webp',
    },
    {
        id: 3,
        name: 'Gasoductos, oleoductos y poliductos',
        description: 'Ingeniería para sistemas de transporte de fluidos en proyectos energéticos e industriales.',
        category: 'Ingeniería',
        image: '/assets/engineering/services/ductos.webp',
    },
    {
        id: 4,
        name: 'Trampas de diablos',
        description: 'Diseño de sistemas para inspección, limpieza y mantenimiento de ductos.',
        category: 'Ingeniería',
        image: '/assets/engineering/services/trampas-diablos.webp',
    },
    {
        id: 5,
        name: 'Abrazaderas Split Sleeve',
        description: 'Soluciones de ingeniería para refuerzo, reparación y protección de líneas de tubería.',
        category: 'Ingeniería',
        image: '/assets/engineering/services/split-sleeve.webp',
    },
    {
        id: 6,
        name: 'Trasvases y recuperación de vapores',
        description:
            'Sistemas de trasvase móvil para hidrocarburos refinados y unidad de recuperación de vapores conforme a DACG vigentes.',
        category: 'Ingeniería',
        image: '/assets/engineering/services/trasvases-recuperacion-vapores.webp',
    },
    {
        id: 7,
        name: 'Tanques API 650',
        description: 'Diseño y cálculo de tanques de almacenamiento conforme a criterios API 650.',
        category: 'Ingeniería',
        image: '/assets/engineering/services/tanques-api-650.webp',
    },
    {
        id: 8,
        name: 'Tierras y protección atmosférica',
        description: 'Ingeniería para sistemas de puesta a tierra y protección contra descargas atmosféricas.',
        category: 'Ingeniería',
        image: '/assets/engineering/services/tierras-proteccion-atmosferica.webp',
    },
    {
        id: 9,
        name: 'Control automatizado',
        description: 'Sistemas de control para operar procesos críticos con mayor confiabilidad y trazabilidad.',
        category: 'Ingeniería',
        image: '/assets/engineering/services/control-automatizado.webp',
    },
    {
        id: 10,
        name: 'Paro por emergencia',
        description: 'Sistemas de seguridad para respuesta rápida ante condiciones operativas de riesgo.',
        category: 'Ingeniería',
        image: '/assets/engineering/services/paro-emergencia.webp',
    },
    {
        id: 11,
        name: 'Gas y fuego',
        description: 'Sistemas de detección y protección para instalaciones industriales y energéticas.',
        category: 'Ingeniería',
        image: '/assets/engineering/services/gas-y-fuego.webp',
    },
    {
        id: 12,
        name: 'Telemetría',
        description: 'Monitoreo remoto de variables operativas para mejorar supervisión y toma de decisiones.',
        category: 'Ingeniería',
        image: '/assets/engineering/services/telemetria.webp',
    },
    {
        id: 13,
        name: 'Telecomunicaciones',
        description: 'Infraestructura de comunicación para sistemas industriales, medición y control.',
        category: 'Ingeniería',
        image: '/assets/engineering/services/telecomunicaciones.webp',
    },
    {
        id: 14,
        name: 'Flexibilidad y análisis estructural',
        description: 'Análisis de flexibilidad y estructurales para validar condiciones de operación y diseño.',
        category: 'Ingeniería',
        image: '/assets/engineering/services/flexibilidad-estructural.webp',
    },
    {
        id: 15,
        name: 'Levantamiento FARO 3D',
        description: 'Levantamiento físico mediante laser scanner FARO 3D para modelado y revisión de ingenierías.',
        category: 'Ingeniería',
        image: '/assets/engineering/services/faro-3d.webp',
    },
    {
        id: 16,
        name: 'Montaje de estructuras',
        description: 'Montaje y armado de estructuras metálicas para proyectos industriales.',
        category: 'Construcción',
        image: '/assets/construccion.webm',
    },
    {
        id: 17,
        name: 'Soldadura especializada',
        description: 'Servicios de soldadura de alta presión con enfoque en seguridad operativa.',
        category: 'Construcción',
        image: '/assets/construccion.webm',
    },
    {
        id: 18,
        name: 'Pailería industrial',
        description: 'Fabricación de tanques, ductos y estructuras para el sector energético.',
        category: 'Construcción',
        image: '/assets/construccion.webm',
    },
];

export const projects: CardItem[] = [
    {
        id: 1,
        name: 'Diseño y cálculo de tanques API 650',
        description: 'Ingeniería para tanques de almacenamiento conforme a criterios API 650.',
        category: 'Ingeniería',
        image: '/assets/engineering/tank-api-650.webp',
    },
    {
        id: 2,
        name: 'Análisis de elemento finito',
        description: 'Evaluación estructural mediante modelos de elemento finito para componentes industriales.',
        category: 'Ingeniería',
        image: '/assets/engineering/tank-api-650.webp',
    },
    {
        id: 3,
        name: 'Modelado 3D con nube de puntos',
        description: 'Levantamientos FARO 3D y modelado para integrar condiciones reales de planta a la ingeniería.',
        category: 'Ingeniería',
        image: '/assets/engineering/point-cloud-flexibility.webp',
    },
    {
        id: 4,
        name: 'Montaje de nave industrial',
        description: 'Construcción y montaje de nave industrial de acero.',
        category: 'Construcción',
        image: '/assets/construccion.webm',
    },
    {
        id: 5,
        name: 'Obra civil para planta',
        description: 'Ejecución de cimentaciones y estructuras civiles.',
        category: 'Construcción',
        image: '/assets/construccion.webm',
    },
    {
        id: 6,
        name: 'Instalación de tuberías',
        description: 'Montaje de líneas de tubería para proceso industrial.',
        category: 'Construcción',
        image: '/assets/header.webm',
    },
];

export const engineeringCapabilities = [
    'ERMyC para medición, regulación y control de fluidos',
    'City Gates para gas natural',
    'Gasoductos, oleoductos y poliductos',
    'Trampas de diablos y abrazaderas Split Sleeve',
    'Sistemas de trasvase móvil y recuperación de vapores',
    'Tanques de almacenamiento conforme a API 650',
    'Sistemas de tierras y protección atmosférica',
    'Sistemas de paro por emergencia, gas y fuego',
    'Telemetría, telecomunicaciones y control automatizado',
    'Análisis de flexibilidad, análisis estructural y revisión de ingenierías',
];

export const engineeringSoftwareImage = '/assets/engineering/software/software-especializado.webp';

export const certificationsImage = '/assets/certifications/certificados.webp';

export const certifications = [
    { id: 1, name: 'ISO 9001:2015', image: '/assets/SELLO_9001.webp' },
    { id: 2, name: 'ISO 14001:2015', image: '/assets/SELLO_14001.webp' },
    { id: 3, name: 'ISO 45001:2018', image: '/assets/SELLO_45001.webp' },
];

export const clients = [
    { name: 'AMI', image: '/assets/clients/ami.webp' },
    { name: 'Scribe', image: '/assets/clients/scribe.webp' },
    { name: 'SEDENA', image: '/assets/clients/sedena.webp' },
    { name: 'Alpek Polyester', image: '/assets/clients/alpek-polyester.webp' },
    { name: 'COBSA', image: '/assets/clients/cobsa.webp' },
    { name: 'Amara NZero', image: '/assets/clients/amara-nzero.webp' },
];
