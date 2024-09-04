import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
const CitasIndividuales = ({ cita, index, handleBorrar }) => {
    return (
        <div className="col-12 col-md-4 col-lg-3 my-3">
            <Card className="h-100">
                <Card.Header>
                    <span>Mascota: {cita.mascota} </span>
                    <br />
                    <span className="text-muted">Dueño: {cita.dueño} </span>
                </Card.Header>
                <Card.Body className="crema">
                    <div className="row">
                        <div className="col-12">
                            <h5>Fecha: {cita.fecha}</h5>
                        </div>
                        <div className="col-12">
                            <h5>Hora: {cita.hora}</h5>
                        </div>
                        <div className="col-12">
                            <h5>Síntomas: {cita.sintomas}</h5>
                        </div>
                    </div>
                </Card.Body>
                <Card.Footer className="card-footer d-flex justify-content-end">
                    <Button onClick={() => handleBorrar(index)} variant="danger">
                        Borrar
                    </Button>
                </Card.Footer>
            </Card>
        </div>
    );
};


export default CitasIndividuales;
