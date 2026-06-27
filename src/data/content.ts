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
        description: 'Levantamiento físico mediante escáner láser FARO 3D para modelado y revisión de ingenierías.',
        category: 'Ingeniería',
        image: '/assets/engineering/services/faro-3d.webp',
    },
    {
        id: 16,
        name: 'ERMyC para hidrocarburos',
        description:
            'Suministro, instalación y puesta en operación de estaciones de regulación, medición y control de hidrocarburos.',
        category: 'Construcción',
        image: '/assets/construction/services/ermyc-hidrocarburos.webp',
    },
    {
        id: 17,
        name: 'Separación, filtración y acondicionamiento',
        description:
            'Suministro, instalación y puesta en operación de sistemas de separación, filtración y acondicionamiento de gas natural.',
        category: 'Construcción',
        image: '/assets/construction/services/separacion-gas-natural.webp',
    },
    {
        id: 18,
        name: 'Sistemas de trasvase móviles',
        description:
            'Suministro, instalación y puesta en operación de sistemas de trasvase móviles para hidrocarburos refinados.',
        category: 'Construcción',
        image: '/assets/construction/services/trasvases-moviles.webp',
    },
    {
        id: 19,
        name: 'Unidades de recuperación de vapores',
        description:
            'Suministro, instalación y puesta en operación de unidades de recuperación de vapores para hidrocarburos refinados.',
        category: 'Construcción',
        image: '/assets/construction/services/recuperacion-vapores.webp',
    },
    {
        id: 20,
        name: 'Dispensadores móviles',
        description:
            'Suministro, instalación y puesta en operación de dispensadores móviles para el trasvase de hidrocarburos refinados.',
        category: 'Construcción',
        image: '/assets/construction/services/dispensadores-moviles.webp',
    },
    {
        id: 21,
        name: 'Tanques presurizados y atmosféricos',
        description: 'Suministro, instalación y puesta en operación de tanques presurizados y atmosféricos.',
        category: 'Construcción',
        image: '/assets/construction/services/tanques-presurizados-atmosfericos.webp',
    },
    {
        id: 22,
        name: 'Trampas de diablo',
        description: 'Suministro, instalación y puesta en operación de trampas de diablo para sistemas de ductos.',
        category: 'Construcción',
        image: '/assets/construction/services/trampas-diablos.webp',
    },
    {
        id: 23,
        name: 'City Gates para gas natural',
        description: 'Suministro, instalación y puesta en operación de City Gates para gas natural.',
        category: 'Construcción',
        image: '/assets/construction/services/city-gates-gas-natural.webp',
    },
    {
        id: 24,
        name: 'Medición analítica de gas',
        description:
            'Suministro, instalación y puesta en operación de equipos de medición analítica para calidad del gas, incluyendo cromatógrafos y analizadores.',
        category: 'Construcción',
        image: '/assets/construction/services/medicion-analitica-gas.webp',
    },
    {
        id: 25,
        name: 'Sistemas de gas y fuego',
        description: 'Suministro, instalación y puesta en operación de sistemas de gas y fuego para instalaciones industriales.',
        category: 'Construcción',
        image: '/assets/construction/services/gas-y-fuego.webp',
    },
    {
        id: 26,
        name: 'Gabinetes de medición y control',
        description:
            'Suministro, instalación y puesta en operación de gabinetes de medición, monitoreo, control y comunicaciones.',
        category: 'Construcción',
        image: '/assets/construction/services/gabinetes-medicion-control.webp',
    },
    {
        id: 27,
        name: 'Trenes de medición fiscal para hidrocarburos',
        description: 'Construcción, mantenimiento y fabricación de trenes de medición fiscal para hidrocarburos.',
        category: 'Construcción',
        image: '/assets/construction/services/trenes-medicion-hidrocarburos.webp',
    },
    {
        id: 28,
        name: 'Trenes de medición fiscal para agua',
        description: 'Construcción, mantenimiento y fabricación de trenes de medición fiscal para medición de agua.',
        category: 'Construcción',
        image: '/assets/construction/services/trenes-medicion-agua.webp',
    },
    {
        id: 29,
        name: 'Tanques presurizados',
        description: 'Construcción, mantenimiento y fabricación de tanques presurizados.',
        category: 'Construcción',
        image: '/assets/construction/services/tanques-presurizados.webp',
    },
    {
        id: 30,
        name: 'Tanques de almacenamiento atmosférico',
        description:
            'Construcción, mantenimiento y reparación de tanques de almacenamiento atmosférico para hidrocarburos refinados.',
        category: 'Construcción',
        image: '/assets/construction/services/tanques-almacenamiento-atmosferico.webp',
    },
    {
        id: 31,
        name: 'Islas de llenado',
        description: 'Construcción, mantenimiento y fabricación de islas de llenado para hidrocarburos.',
        category: 'Construcción',
        image: '/assets/construction/services/islas-llenado.webp',
    },
    {
        id: 32,
        name: 'Trasvases móviles',
        description:
            'Construcción, mantenimiento y fabricación de trasvases móviles para hidrocarburos refinados.',
        category: 'Construcción',
        image: '/assets/construction/services/construccion-trasvases-moviles.webp',
    },
    {
        id: 33,
        name: 'Dispensadores móviles para trasvase',
        description:
            'Construcción, mantenimiento y fabricación de dispensadores móviles para el trasvase de hidrocarburos refinados.',
        category: 'Construcción',
        image: '/assets/construction/services/construccion-dispensadores-moviles.webp',
    },
    {
        id: 34,
        name: 'Unidades de recuperación de vapores',
        description:
            'Construcción, mantenimiento y fabricación de unidades de recuperación de vapores para hidrocarburos refinados.',
        category: 'Construcción',
        image: '/assets/construction/services/construccion-recuperacion-vapores.webp',
    },
    {
        id: 35,
        name: 'Líneas de proceso',
        description: 'Construcción, mantenimiento y reparación de líneas de proceso.',
        category: 'Construcción',
        image: '/assets/construction/services/lineas-proceso.webp',
    },
    {
        id: 36,
        name: 'Calderas',
        description: 'Mantenimiento y reparación de calderas.',
        category: 'Construcción',
        image: '/assets/construction/services/calderas.webp',
    },
    {
        id: 37,
        name: 'Puntos calientes en calderas',
        description: 'Reparaciones de puntos calientes en calderas.',
        category: 'Construcción',
        image: '/assets/construction/services/puntos-calientes-calderas.webp',
    },
    {
        id: 38,
        name: 'Aislamiento térmico',
        description: 'Suministro e instalación de aislamiento térmico.',
        category: 'Construcción',
        image: '/assets/construction/services/aislamiento-termico.webp',
    },
    {
        id: 39,
        name: 'Sistemas de tuberías',
        description: 'Construcción e instalación de sistemas de tuberías y spools.',
        category: 'Construcción',
        image: '/assets/construction/services/sistemas-tuberias-spools.webp',
    },
    {
        id: 40,
        name: 'Estructuras',
        description: 'Fabricación e instalación de estructuras.',
        category: 'Construcción',
        image: '/assets/construction/services/estructuras.webp',
    },
    {
        id: 41,
        name: 'Instalaciones civiles y eléctricas',
        description: 'Construcción de instalaciones civiles y eléctricas.',
        category: 'Construcción',
        image: '/assets/construction/services/instalaciones-civiles-electricas.webp',
    },
    {
        id: 42,
        name: 'Tierras y protección atmosférica',
        description: 'Construcción de sistemas de tierras y protección atmosférica.',
        category: 'Construcción',
        image: '/assets/construction/services/tierras-proteccion-atmosferica.webp',
    },
    {
        id: 43,
        name: 'Sistema de comunicaciones',
        description: 'Construcción de sistema de comunicaciones.',
        category: 'Construcción',
        image: '/assets/construction/services/sistema-comunicaciones.webp',
    },
    {
        id: 44,
        name: 'Válvulas manuales y de control',
        description: 'Mantenimiento a válvulas manuales y de control.',
        category: 'Construcción',
        image: '/assets/construction/services/valvulas-control.webp',
    },
    {
        id: 45,
        name: 'Sistemas de medición, control y análisis',
        description: 'Mantenimiento a sistemas de medición, control y análisis de calidad de fluidos.',
        category: 'Construcción',
        image: '/assets/construction/services/medicion-control-analisis-fluidos.webp',
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
