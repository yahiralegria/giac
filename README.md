# giac.mx - Sitio público

Sitio público de GIAC Oil & Gas migrado a Next.js. El proyecto contiene solo el frontend visible para usuarios: landing, secciones informativas, servicios, certificaciones y contacto.

## Stack

- Next.js
- React
- TypeScript
- CSS global
- Assets estáticos en `public/assets`

## Rutas

- `/`
- `/us`
- `/engineering`
- `/construction`
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

La configuración usa `output: 'export'`, por lo que el sitio se exporta como archivos estáticos en `out/`.

## Contenido

Los datos de servicios, certificaciones y clientes viven en:

```text
src/data/content.ts
```

Los datos generales de navegación y contacto viven en:

```text
src/lib/site.ts
```
