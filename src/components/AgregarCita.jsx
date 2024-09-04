import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import CitasRegistradas from "./CitasRegistradas";
const AgregarCita = () => {
  const [citas, setCitas] = useState([]);
  useEffect(() => {
    const citasAlmacenadas = JSON.parse(localStorage.getItem("citas")) || [];
    setCitas(citasAlmacenadas);
  }, []);

  const [form, setForm] = useState({
    mascota: "",
    duenio: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const citaNueva = {
      mascota: form.mascota,
      duenio: form.duenio,
      fecha: form.fecha,
      hora: form.hora,
      sintomas: form.sintomas,
    };
    const citasActualizadas = [...citas, citaNueva];
    localStorage.setItem("citas", JSON.stringify(citasActualizadas));
    setCitas(citasActualizadas);
    setForm({
      mascota: "",
      duenio: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };
  const handleBorrar = (index) => {
    const citaActualizada = citas.filter((_, i) => i !== index);
    setCitas(citaActualizada);
    localStorage.setItem("citas", JSON.stringify(citaActualizada));
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Card>
        <Card.Header>Llenar el formulario para crear una cita</Card.Header>
        <Form onSubmit={handleSubmit}>
          <Card.Body className="celeste">
            <Form.Group className="mb-3" controlId="formBasicMascota">
              <Form.Label>Nombre de la mascota</Form.Label>
              <Form.Control
                type="text"
                required
                value={form.mascota}
                onChange={handleChange}
                name="mascota"
                placeholder="nombre de mascota"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDuenio">
              <Form.Label>Nombre del dueño</Form.Label>
              <Form.Control
                type="text"
                required
                value={form.duenio}
                onChange={handleChange}
                name="duenio"
                placeholder="nombre de dueño"
              />
            </Form.Group>
            <div className="row">
              <div className="col-6">
                <Form.Group className="mb-3" controlId="formBasicFecha">
                  <Form.Label>Fecha</Form.Label>
                  <Form.Control
                    maxLength={10}
                    minLength={10}
                    type="text"
                    required
                    value={form.fecha}
                    onChange={handleChange}
                    name="fecha"
                    placeholder="dd/mm/yyyy"
                  />
                </Form.Group>
              </div>
              <div className="col-6">
                <Form.Group className="mb-3" controlId="formBasicHora">
                  <Form.Label>Hora</Form.Label>
                  <Form.Control
                    maxLength={5}
                    minLength={5}
                    type="text"
                    required
                    value={form.hora}
                    onChange={handleChange}
                    name="hora"
                    placeholder="hh:mm"
                  />
                </Form.Group>
              </div>
            </div>
            <Form.Group className="mb-3" controlId="formBasicSintomas">
              <Form.Label>Sintomas</Form.Label>
              <Form.Control
                type="text"
                maxLength={50}
                required
                value={form.sintomas}
                onChange={handleChange}
                name="sintomas"
                placeholder="describir sintomas"
              />
            </Form.Group>
          </Card.Body>
          <Card.Footer className="card-footer">
            <Button className="celeste" type="submit">
              Agregar Nueva Cita
            </Button>
          </Card.Footer>
        </Form>
      </Card>

      <CitasRegistradas citas={citas} handleBorrar={handleBorrar} />
    </>
  );
};

export default AgregarCita;
