# Proyecto React - Laboratorio 3

Este repositorio contiene la parte de interfaz del laboratorio, hecha con **React + TypeScript + Vite**.

## Objetivo del laboratorio

Construir una UI estrictamente tipada que demuestre:

- tabla genérica `DataTable<T>`
- estado de edición con `Partial<T>`
- uso de librería externa de fechas (`date-fns`)
- verificación de tipos con `npx tsc --noEmit`
- documentación arquitectónica final

## Stack del proyecto

- ⚛️ React
- 🔷 TypeScript
- ⚡ Vite
- 📅 date-fns
- 🧹 ESLint

## Estructura principal

```text
react/
  docs/
    arquitectura-final.md
  public/
    favicon.svg
  src/
    components/
      DataTable.tsx
    utils/
      date-utils.ts
    App.tsx
    App.css
    main.tsx
  index.html
  package.json
  package-lock.json
  tsconfig.json
  tsconfig.app.json
  tsconfig.node.json
  eslint.config.js
```

## Para que sirve cada archivo importante

- `package.json`: define el proyecto, scripts (`dev`, `build`) y dependencias.
- `package-lock.json`: guarda versiones exactas instaladas para que funcione igual en cualquier PC.
- `index.html`: HTML base donde React monta la app en el `div#root`.
- `eslint.config.js`: reglas de calidad para revisar el código.
- `tsconfig.json`: archivo raíz de TypeScript que referencia configuraciones específicas.
- `tsconfig.app.json`: configuración TS para el código de la aplicación (`src`).
- `tsconfig.node.json`: configuración TS para archivos de entorno Node (como `vite.config.ts`).

## Scripts disponibles

- `npm run dev` ▶️ inicia servidor local de desarrollo
- `npm run build` 📦 genera build de producción
- `npm run preview` 👀 previsualiza la build
- `npm run lint` 🧹 ejecuta revisión de estilo con ESLint

## Comprobación de tipado (requisito)

Ejecuta:

```bash
npx tsc --noEmit
```

Si no aparece salida en consola, significa **0 errores de TypeScript**.

## Conceptos clave aplicados

- **Genéricos (`DataTable<T>`):** la tabla sirve para cualquier entidad.
- **`keyof T`:** las columnas solo pueden apuntar a propiedades reales del tipo.
- **`Partial<T>`:** el borrador de edición permite campos incompletos temporalmente.
- **Tipos estrictos en utilidades:** `calcularDiferenciaDias(fechaInicio: Date, fechaFin: Date): number`.

## Nota importante sobre comentarios

`package.json` y `package-lock.json` son JSON puro y no aceptan comentarios dentro del archivo.
Por eso esta explicación se deja aquí en el README.
