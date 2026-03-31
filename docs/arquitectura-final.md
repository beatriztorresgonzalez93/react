# Arquitectura final - Laboratorio 3

## Explicado fácil (primero)

- **React:** librería para construir interfaces (lo que ves en pantalla).
- **Vite:** herramienta que crea y ejecuta rápido el proyecto React en local.
- **TypeScript:** JavaScript con tipos para detectar errores antes de ejecutar.
- **`Partial<T>`:** convierte todas las propiedades de un tipo en opcionales temporalmente.
- **`date-fns`:** librería para trabajar fechas sin hacerlo "a mano".

## Tipado estricto aplicado

En este proyecto React se aplican varias tecnicas de TypeScript para reducir errores:

- Genericos (`DataTable<T>`) para reutilizar el componente con distintas entidades.
- Uniones discriminadas (`EstadoMatricula`) en el dominio academico.
- Analisis exhaustivo con `never` en `generarReporte`.
- Tipos de utilidad (`Partial<T>`) para estados de edicion de formularios incompletos.

## DataTable generica y segura

`DataTable<T>` recibe:

- `data: T[]`
- `columns: Array<{ key: keyof T; header: string }>`

Con esto, cada columna debe corresponder a una propiedad real de la entidad. Si se intenta una clave inexistente, TypeScript marca error antes de ejecutar.

## Estado de edicion con Partial

Durante la edicion de una fila, el estado temporal usa `Partial<T>`. Esto modela correctamente que un usuario puede haber modificado solo algunos campos, evitando forzar objetos completos de forma artificial.

## Libreria externa tipada

La utilidad `calcularDiferenciaDias(fechaInicio: Date, fechaFin: Date): number` usa `date-fns` (`differenceInCalendarDays`).

- Entrada estricta: objetos `Date`
- Salida estricta: `number`

Esto evita errores habituales de fechas en JavaScript (comparaciones manuales o parseos ambiguos).

## Beneficio frente a JavaScript sin tipos

Con JavaScript estandar, muchos errores solo aparecen en runtime:

- columnas invalidas en la tabla,
- propiedades inexistentes durante la edicion,
- ramas de `switch` sin cubrir cuando crece el dominio,
- operaciones de fecha con tipos incorrectos.

Con TypeScript estricto, esos errores se detectan en desarrollo/compilacion, disminuyendo el riesgo en produccion.

## Evidencia del proyecto

Implementaciones relacionadas con esta arquitectura:

- `src/components/DataTable.tsx`: componente genérico `DataTable<T>` y estado de edición con `Partial<T>`.
- `src/utils/date-utils.ts`: utilidad tipada para diferencia de días usando `date-fns`.
- `../typescript/modulo-2/src/domain/types/universidad.ts`: Unión Discriminada `EstadoMatricula` y análisis exhaustivo con `never` en `generarReporte`.

## Validación final

Se ejecutó la comprobación de tipos sin emitir archivos:

- `npx tsc --noEmit` -> 0 errores.
