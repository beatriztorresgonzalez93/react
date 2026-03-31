import { useState } from "react";

// Definición de una columna de la tabla:
// "key" debe ser una propiedad real del tipo T.
export type DataColumn<T extends Record<string, unknown>> = {
  key: keyof T;
  header: string;
};

type DataTableProps<T extends Record<string, unknown>> = {
  data: T[];
  columns: DataColumn<T>[];
};

export function DataTable<T extends Record<string, unknown>>({
  data,
  columns,
}: DataTableProps<T>) {
  // Filas que se están mostrando en la tabla.
  const [rows, setRows] = useState<T[]>(data);
  // Índice de la fila que se está editando (o null si ninguna).
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  // Borrador temporal de edición.
  // Partial<T> permite editar solo algunos campos, no obliga a tenerlos todos.
  const [draft, setDraft] = useState<Partial<T>>({});

  const onStartEdit = (index: number) => {
    setEditingIndex(index);
    setDraft(rows[index] ?? {});
  };

  const onCancelEdit = () => {
    setEditingIndex(null);
    setDraft({});
  };

  const onSaveEdit = () => {
    if (editingIndex === null) return;

    const currentRow = rows[editingIndex];
    if (!currentRow) return;

    // Copiamos el array para no mutar el estado directamente.
    const updated = [...rows];
    // Mezclamos la fila original con el borrador editado.
    updated[editingIndex] = { ...currentRow, ...draft };
    setRows(updated);
    onCancelEdit();
  };

  const onChangeField = (key: keyof T, value: string) => {
    // Actualiza solo el campo que el usuario cambió.
    setDraft((previous) => ({
      ...previous,
      [key]: value as T[keyof T],
    }));
  };

  if (rows.length === 0) return <p>No hay datos.</p>;

  return (
    <table className="data-table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={String(column.key)}>{column.header}</th>
          ))}
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
          const isEditing = editingIndex === index;
          return (
            <tr key={index}>
              {columns.map((column) => {
                const cellValue = isEditing
                  ? (draft[column.key] ?? row[column.key])
                  : row[column.key];

                return (
                  <td key={String(column.key)}>
                    {isEditing ? (
                      <input
                        value={String(cellValue ?? "")}
                        onChange={(event) =>
                          onChangeField(column.key, event.target.value)
                        }
                      />
                    ) : (
                      String(cellValue ?? "")
                    )}
                  </td>
                );
              })}
              <td>
                {isEditing ? (
                  <>
                    <button onClick={onSaveEdit}>Guardar</button>
                    <button onClick={onCancelEdit}>Cancelar</button>
                  </>
                ) : (
                  <button onClick={() => onStartEdit(index)}>Editar</button>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
