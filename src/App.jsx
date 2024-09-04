import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import AgregarCita from './components/AgregarCita'
/*
Crear una aplicación web que permite cargar un formulario para registrar una cita en una veterinaria, todos los datos solicitados en el formulario deben ser obligatorios.
La aplicación debe permitir borrar las citas y estas deben ser guardadas en el localstorage.

Si hay citas debo mostrarlas, con sus respectivos datos dentro de una card:
*/
function App() {
  return (
    <section className='container my-5'>
      <AgregarCita></AgregarCita>
    </section>
  )
}

export default App
