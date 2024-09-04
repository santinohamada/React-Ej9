import React from 'react';
import Card from 'react-bootstrap/Card';
import CitasIndividuales from './CitasIndividuales';

const CitasRegistradas = ({citas}) => {
    return (
        <Card className='my-5'>
            <Card.Header> Hay {citas.length} citas</Card.Header>
            <Card.Body className='celeste'>
                <section className='row'>
                {citas.map((cita, index) => (
                    <CitasIndividuales key={index} cita={cita} index={index} />
                ))}
                </section>
            </Card.Body>
            <Card.Footer className='card-footer'>
            </Card.Footer>
        </Card>
    );
};

export default CitasRegistradas;