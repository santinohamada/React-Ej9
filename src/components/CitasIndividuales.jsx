import React from "react";
import Card from "react-bootstrap/Card";
const CitasIndividuales = ({ cita, index }) => {
  console.log(cita);
  return (
    <div className="col-12 col-md-4 col-lg-3 my-3">
      <Card className=" h-100">
        <Card.Header> Nro. Cita: {index} </Card.Header>
        <Card.Body className="crema">
          <div className="row">
            <div className="col-12">
              <h5>Mascota: {cita.mascota}</h5>
            </div>
            <div className="col-12">
              <h5>Dueño: {cita.duenio}</h5>
            </div>
            <div className="col-12">
              <h5>fecha: {cita.fecha}</h5>
            </div>
            <div className="col-12">
              <h5>hora: {cita.hora}</h5>
            </div>
            <div className="col-12">
              <h5>Sintomas: {cita.sintomas}</h5>
            </div>
          </div>
        </Card.Body>
        <Card.Footer className="card-footer"></Card.Footer>
      </Card>
    </div>
  );
};

export default CitasIndividuales;
