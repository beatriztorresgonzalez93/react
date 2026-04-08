import "./App.css";
import { DataTable } from "./components/DataTable";
import { calcularDiferenciaDias } from "./utils/date-utils";

// Tipo de los datos que vamos a mostrar en la tabla.
type Estudiante = {
  id: string;
  nombre: string;
  carrera: string;
  fechaIngreso: string;
};

// Datos de ejemplo para renderizar en pantalla.
const estudiantes: Estudiante[] = [
  {
    id: "E-001",
    nombre: "Ana Torres",
    carrera: "Ingenieria de Software",
    fechaIngreso: "2024-09-01",
  },
  {
    id: "E-002",
    nombre: "Luis Perez",
    carrera: "Ciencia de Datos",
    fechaIngreso: "2023-09-01",
  },
];

function App() {
  // Usamos la utilidad de fechas para mostrar un dato calculado.
  const diasTranscurridos = calcularDiferenciaDias(
    new Date("2026-03-15"),
    new Date(),
  );

  return (
    <main className="container">
      <h1>Laboratorio 3 - UI estricta</h1>
      <p>Dias desde el inicio del laboratorio: {diasTranscurridos}</p>

      {/* Tabla genérica: recibe datos + definición de columnas */}
      <DataTable
        data={estudiantes}
        columns={[
          { key: "id", header: "ID" },
          { key: "nombre", header: "Nombre" },
          { key: "carrera", header: "Carrera" },
          { key: "fechaIngreso", header: "Fecha de ingreso" },
        ]}
      />
    </main>
  );
}

export default App;
