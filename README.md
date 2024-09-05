# Proyecto: Pacientes de Veterinaria 

Una aplicación web que permite registrar y gestionar citas para una veterinaria. El formulario permite registrar una cita con todos los datos del paciente y guardar esta información en el localStorage. Las citas pueden ser eliminadas, y la información persiste en el navegador.

## Características

- **Registrar citas*: Formulario para registrar citas con campos obligatorios.
- **Guardar en LocalStorage**: Las citas se guardan en el localStorage para que persistan tras recargar la página.
- **Eliminar citas**: Cada cita tiene la opción de eliminarse.
- **Renderizado de citas*: Las citas se muestran en tarjetas con los datos del paciente.
  

## Uso

1. Completa el formulario con los datos de la cita (todos los campos son obligatorios).
2. Haz clic en "Guardar".
3. Las citas se mostrarán en la pantalla y se guardarán en el localStorage.
4. Puedes eliminar una cita haciendo clic en el botón correspondiente.

## Mejoras sugeridas

- **Validación más estricta**: Implementar validaciones adicionales para los campos del formulario (ej. no permitir títulos vacíos).
- **Estilos personalizados**: Mejorar el estilo visual del formulario y las tarjetas utilizando CSS o una librería como `styled-components`.
- **Búsqueda de citas**: Agregar un buscador para filtrar las citas por nombre de mascota o dueño.
- **Editar citas**: Permitir editar las citas ya agregadas.
  
## Tecnologías usadas

- [React](https://es.reactjs.org/) - Biblioteca de JavaScript para construir interfaces de usuario.
- [React Bootstrap](https://react-bootstrap.github.io/) - Componentes preconstruidos de Bootstrap para React.
- [LocalStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage) - API para almacenamiento local en el navegador.

## Contribución

Las contribuciones son bienvenidas. Si deseas contribuir, abre un `pull request` o crea un `issue` para discutir los cambios.
