import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
import NavBar from '../../components/NavBar/NavBar';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from '../../components/Footer/Footer';
import imagen_nosotras from "../../assets/img/nosotras.jpg";
import busqueda from "../../assets/img/busqueda.png";
import filtro from "../../assets/img/filtro.png";
import reseña from "../../assets/img/reseña.png";
import usuario from "../../assets/img/usuario.png";

const About = () => {
    return (
        <>
            <NavBar />
            <div className="container mt-5 mb-5 sobre fs-5">
                <div className="nosotras row">
                    <div className="col-12 text-center mb-5">
                        <h1>Acerca de nosotras</h1>
                    </div>

                    <div className="col-6">
                        <p>¡Te damos la bienvenida a Aquí sí hay quien viva! Somos un equipo formado por dos apasionadas compañeras del bootcamp Full Stack Developer de Reboot Academy. Después de completar nuestro programa de formación, nos propusimos crear una solución innovadora para abordar los desafíos comunes que enfrentan las personas al buscar vivienda.</p>
                        <p>Nuestra inspiración proviene de nuestras propias experiencias y las de quienes nos rodean. Una de nosotras, tras enfrentar sorpresas desagradables en su último piso de alquiler, comprendió lo frustrante que puede ser encontrar el lugar adecuado. Ya sea porque Madrid es una ciudad nueva para ti o porque quieres evitar las trampas comunes del alquiler, entendemos la importancia de contar con información confiable y accesible.</p>
                        <p>Por eso, decidimos unir nuestras habilidades en desarrollo web y diseño para crear Aquí sí hay quien viva. Nuestra visión es simple pero poderosa: queremos facilitar la búsqueda de vivienda ofreciendo a los usuarios una plataforma donde puedan compartir sus experiencias y ayudar a otros a tomar decisiones informadas.</p>
                    </div>
                    <div className="col-6 mt-4">
                        <img width="100%" src={imagen_nosotras} alt="" />
                    </div>

                </div>
                <div className="funcinamiento mt-5 mb-5">
                    <div className="col-12 mb-5">
                        <h2 className='mb-5 text-center'>¿Cómo Funciona?</h2>
                        <p>En Aquí sí hay quien viva, nos dedicamos a hacer más transparente experiencia de búsqueda de vivienda para nuestros usuarios. Nos esforzamos por proporcionar una plataforma intuitiva y fácil de usar que les permita acceder rápidamente a información relevante sobre diferentes apartamentos y experiencias de vida compartidas por nuestra comunidad.</p>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-3">
                                <div className='text-center'><img width="70%" src={busqueda} alt="" /></div>
                            
                                <h4 className='text-center'>1- Explora Reseñas</h4>
                                <p>Antes de registrarte, puedes explorar todas las reseñas sobre pisos de alquiler disponibles en nuestra plataforma. Obtén información detallada y fiable sobre diferentes apartamentos gracias a las experiencias comaprtidas por nuestra comunidad.</p>
                            </div>
                            <div className="col-3">
                                <div className="text-center">
                                <img width="70%" src={usuario} alt="" />
                                </div>
                            
                                <h4 className='text-center'>2- Regístrate para Dejar Reseñas</h4>
                                <p>Para dejar una reseña o dar de alta un nuevo apartamento, es necesario que tengas una cuenta en nuestra plataforma. El registro es rápido y gratuito. Una vez tengas tu cuenta, podrás contribuir a la comunidad compartiendo tus experiencias sobre pisos en Madrid y ayudando a otras personas con tus vivencias.</p>
                            </div>
                            <div className="col-3">
                                <div className="text-center">
                                <img width="70%" src={filtro} alt="" />
                                </div>
                          
                                <h4 className='text-center'>3- Busca y Filtra</h4>
                                <p>Utiliza nuestro buscador para encontrar rápidamente el apartamento que te interesa. Filtra los resultados según tus preferencias, como distrito, calle. Esto te ayudará a encontrar la información que necesitas de manera eficiente.</p>
                            </div>
                            <div className="col-3">
                                <div className="text-center">
                                <img width="70%" src={reseña} alt="" />
                                </div>
                           
                                <h4 className='text-center'>4- Deja tu Reseña</h4>
                                <p>Una vez que hayas encontrado el apartamento deseado, puedes dejar tu reseña fácilmente. Comparte tu experiencia y opiniones sobre el lugar donde has vivido, ayudando a otras personas a tomar decisiones sobre su futuro contando con toda la información.</p>
                            </div>
                        </div>
                    </div>




                </div>
                <div className="seguridad fs-5">
                    <p>Para garantizar la autenticidad y la calidad de las reseñas, requerimos que adjuntes información que confirme tu experiencia en el piso. Esto puede incluir facturas de servicios como luz o agua, o el contrato de alquiler del piso. Esta medida nos ayuda a asegurar que las reseñas provienen de personas que han vivido realmente en el lugar y así proporcionar información valiosa y confiable a nuestra comunidad.</p>
                    <p>Una vez que hayamos verificado la información proporcionada y confirmado que cumples con los requisitos necesarios, tu reseña se publicará en un plazo de 24 horas laborales.</p>
                </div>
                <div className="fin">
                    <p>En Aquí sí hay quien viva, nos comprometemos a proporcionar una plataforma accesible y transparente para la comunidad de búsqueda de viviendas. Únete a nuestro proyecto y forma parte de una comunidad que se preocupa por compartir información valiosa sobre los pisos en alquiler en Madrid y ayudar a las personas a saber más antes de decidir alquilar. ¡Regístrate hoy y comienza a explorar!</p>
                </div>
                <div className="contacto mb-5 mt-5">
                    <h2 className='text-center mb-3'>Contacto</h2>
                    <p>¿Tienes preguntas, sugerencias o simplemente quieres ponerte en contacto con nosotras? ¡Estamos aquí para ayudarte! Puedes comunicarte con nuestro equipo de soporte a través de los siguientes medios:</p>
                    <ul>
                        <li>Correo Electrónico: Envíanos un correo electrónico a aquisihayquienviva@gmail.com y te responderemos lo antes posible.</li>
                        <li>Teléfono: Si prefieres hablar directamente con nosotras, puedes llamarnos al 968523147. Estamos disponibles para atenderte de 9:00 a 21:00.</li>
                    </ul>
                    <p>Estamos comprometidos a brindarte el mejor servicio posible y a responder a todas tus consultas de manera oportuna y eficiente. ¡Esperamos escucharte pronto!</p>
                </div>

            </div>
            <Footer />

        </>


    )
}

export default About