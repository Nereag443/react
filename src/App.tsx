import { calculateDaysDifference } from './utils/date-utils'  
import { DataTable } from './components/DataTable'

type User = {
  id: number;
  name: string;
  edad: number;
}

const users: User[] = [
  { id: 1, name: 'Alice', edad: 30 },
  { id: 2, name: 'Bob', edad: 25 },
  { id: 3, name: 'Charlie', edad: 35 },
];

const columns: { key: keyof User, label: string }[] = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Nombre' },
  { key: 'edad', label: 'Edad' },
];

function App() {
  const date1 = new Date('2026-04-13');
  const date2 = new Date('2026-06-20');
  const daysDifference = calculateDaysDifference(date1, date2);

  return (
    <div>
      <h3>Ejercicio 4. TypeScript + React</h3>
      <section>
        <h4>Ejercicio 4.1: Crear un componente DataTable</h4>
        <p>Crea un componente DataTable que reciba una lista de objetos y una configuración de columnas, y muestre los datos en una tabla. 
          El componente debe permitir editar los datos en línea y guardar los cambios.</p>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', }}>
         <DataTable data={users} columns={columns} onSave={(index, updatedData) => console.log(index, updatedData)}/>
          </div>
      </section>
      <section>
        <h4>Ejercicio 4.2: Calcular la diferencia en días entre dos fechas</h4>
        <p>Escribe una función que reciba dos fechas y calcule la diferencia en días entre ellas. 
          La función debe manejar correctamente los años bisiestos y las diferentes longitudes de los meses.</p>
        <h3>Fecha 1: {date1.toDateString()}</h3>
        <h3>Fecha 2: {date2.toDateString()}</h3>
        <p>Diferencia en días: {daysDifference}</p>
      </section>
      </div>
  )
}

export default App
