# giac.mx - Sitio publico

Sitio publico de GIAC Oil & Gas migrado a Next.js. El proyecto contiene solo el frontend visible para usuarios: landing, secciones informativas, servicios, proyectos, certificaciones y contacto.

## Stack

- Next.js
- React
- TypeScript
- CSS global
- Assets estaticos en `public/assets`

## Rutas

- `/`
- `/us`
- `/engineering`
- `/construction`
- `/projects/engineering`
- `/projects/construction`
- `/certifications`
- `/contact`

## Desarrollo

```bash
npm install
npm run dev
```

El sitio local abre en `http://localhost:3000`.

## Build

```bash
npm run build
```

La configuracion usa `output: 'export'`, por lo que el sitio se exporta como archivos estaticos en `out/`.

## Contenido

Los datos de servicios, proyectos, certificaciones y clientes viven en:

```text
src/data/content.ts
```

Los datos generales de navegacion y contacto viven en:

```text
src/lib/site.ts
```
