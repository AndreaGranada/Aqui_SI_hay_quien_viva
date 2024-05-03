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
            <Carousel.Caption className='texto-carrusel-pr opacity-75 custom-caption'>
                <div className="center-content">
                    <div className="text-container">
                        <h3 className='fw-bolder mb-4'>Aquí SÍ hay quien viva</h3>
                        <p className=''>¿Te vas a vivir a un <strong>piso nuevo</strong>?</p>
                        <p className=''>Comprueba las <strong>reseñas</strong> antes de tomar la decisión</p>
                        <button type='button' className='btn boton-marron'>VER MÁS</button>
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
            <Carousel.Caption className='texto-carrusel-sg opacity-75 custom-caption'>
                <div className="center-content">
                    <div className="text-container">
                        <h3 className='fw-bolder texto-sg mb-4'>¿Te lo estas pensando?</h3>
                        <p className='texto-sg'>Resuelve tus dudas antes de mudarte</p>
                        <p className='texto-sg'>Nuestros usuarios te cuentan su experiencia</p>
                        <button type='button' className='btn boton-amarillo'>VER MÁS</button>
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
            <Carousel.Caption className='texto-carrusel-tr opacity-75 custom-caption'>
                <div className="center-content">
                    <div className="text-container">
                        <h3 className='fw-bolder texto-tr'>¿Quieres contarnos tu vivencia?</h3>
                        <p className='texto-tr'>Registrate en nuestra web</p>
                        <p className='texto-tr'>Ayuda a otros usuarios a tomar la decisión</p>
                        <button type='button' className='btn boton-blanco'>VER MÁS</button>
                    </div>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        {/* Resto de los items del carrusel */}
    </Carousel>
);
}

export default Carrusel;