import Carousel from 'react-bootstrap/Carousel';
import imagen1 from '../../assets/img/banner1.jpg';
import imagen2 from '../../assets/img/banner2.jpg';
import imagen3 from '../../assets/img/banner3.jpg';
import './Carrusel.css'

function Carrusel() {
    return (
        <Carousel className='carousel-dark'>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={imagen1}
                alt="First slide"
                width="800px"
            />
            <Carousel.Caption className='texto-carrusel opacity-75 custom-caption'>
                <div className="center-content">
                    <div className="text-container">
                        <h3 className='fw-bolder'>Aquí SÍ hay quien viva</h3>
                        <p className=''>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <p className=''>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <button type='button' className='btn boton-borde'>VER MÁS</button>
                    </div>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={imagen2}
                alt="First slide"
                width="800px"
            />
            <Carousel.Caption className='texto-carrusel opacity-75 custom-caption'>
                <div className="center-content">
                    <div className="text-container">
                        <h3 className='fw-bolder'>Aquí SÍ hay quien viva</h3>
                        <p className=''>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <p className=''>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <button type='button' className='btn boton-borde'>VER MÁS</button>
                    </div>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={imagen3}
                alt="First slide"
                width="800px"
            />
            <Carousel.Caption className='texto-carrusel opacity-75 custom-caption'>
                <div className="center-content">
                    <div className="text-container">
                        <h3 className='fw-bolder'>Aquí SÍ hay quien viva</h3>
                        <p className=''>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <p className=''>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <button type='button' className='btn boton-borde'>VER MÁS</button>
                    </div>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        {/* Resto de los items del carrusel */}
    </Carousel>
);
}

export default Carrusel;