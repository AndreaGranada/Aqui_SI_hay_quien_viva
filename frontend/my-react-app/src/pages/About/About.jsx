import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
import NavBar from '../../components/NavBar/NavBar';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from '../../components/Footer/Footer';

const About = () => {
    return (
        <>
            <NavBar></NavBar>
            <div className="container mt-5 mb-5">
                <h1>Acerca de Nosotros</h1>
                <p>¡Te damos la bienvenida a Aquí sí hay quien viva! Somos un equipo formado por dos apasionadas compañeras del bootcamp Full Stack Developer de Reboot Academy. Después de completar nuestro programa de formación, nos propusimos crear una solución innovadora para abordar los desafíos comunes que enfrentan las personas al buscar vivienda.</p>
                <p>Nuestra inspiración proviene de nuestras propias experiencias y las de quienes nos rodean. Una de nosotras, tras enfrentar malas experiencias en la búsqueda de un lugar para vivir, comprendió lo frustrante que puede ser encontrar el lugar adecuado. Ya sea que estés buscando un nuevo apartamento en una ciudad desconocida o tratando de evitar las trampas comunes del alquiler, entendemos la importancia de contar con información confiable y accesible.</p>
                <p>Por eso, decidimos unir nuestras habilidades en desarrollo web y diseño para crear Aquí sí hay quien viva. Nuestra visión es simple pero poderosa: queremos facilitar la búsqueda de vivienda ofreciendo a los usuarios una plataforma donde puedan compartir sus experiencias y ayudar a otros a tomar decisiones informadas.</p>
                <h2>¿Cómo Funciona?</h2>
                <p>En Aquí sí hay quien viva, nos dedicamos a simplificar la experiencia de búsqueda de vivienda para nuestros usuarios. Nos esforzamos por proporcionar una plataforma intuitiva y fácil de usar que les permita acceder rápidamente a información relevante sobre diferentes apartamentos y experiencias de vida compartidas por nuestra comunidad.</p>
                <h4>1- Explora Reseñas:</h4>
                <p>Antes de registrarte, puedes explorar todas las reseñas disponibles en nuestra plataforma. Obtén información detallada sobre diferentes apartamentos y experiencias de vida compartidas por nuestra comunidad.</p>
                <h4>2- Regístrate para Dejar Reseñas:</h4>
                <p>Para dejar una reseña o dar de alta un nuevo apartamento, es necesario que tengas una cuenta en nuestra plataforma. El registro es rápido y gratuito. Una vez registrado, podrás contribuir a la comunidad compartiendo tus experiencias y ayudando a otros usuarios.</p>
                <h4>3- Busca y Filtra:</h4>
                <p>Utiliza nuestro buscador para encontrar rápidamente el apartamento que te interesa. Filtra los resultados según tus preferencias, como ubicación, precio o características del apartamento. Esto te ayudará a encontrar la información que necesitas de manera eficiente.</p>
                <h4>4- Deja tu Reseña:</h4>
                <p>Una vez que hayas encontrado el apartamento deseado, puedes dejar tu reseña fácilmente. Comparte tu experiencia y opiniones sobre el lugar donde has vivido, ayudando a otros usuarios a tomar decisiones informadas.</p>
                <p>Para garantizar la autenticidad y la calidad de las reseñas, requerimos que adjuntes información que confirme tu experiencia en el piso. Esto puede incluir facturas de servicios como luz o agua, o el contrato de alquiler del piso. Esta medida nos ayuda a asegurar que las reseñas provienen de personas que han vivido realmente en el lugar y así proporcionar información valiosa y confiable a nuestra comunidad.</p>
                <p>Una vez que hayamos verificado la información proporcionada y confirmado que cumples con los requisitos necesarios, tu reseña se publicará en un plazo de 24 horas laborales.</p>
                <p>En Aquí sí hay quien viva, nos comprometemos a proporcionar una plataforma accesible y transparente para la comunidad de búsqueda de viviendas. Únete a nosotros y forma parte de una comunidad que se preocupa por compartir información valiosa y facilitar la toma de decisiones. ¡Regístrate hoy y comienza a explorar!</p>
                <h2>Contacto:</h2>
                <p>¿Tienes preguntas, sugerencias o simplemente quieres ponerte en contacto con nosotros? ¡Estamos aquí para ayudarte! Puedes comunicarte con nuestro equipo de soporte a través de los siguientes medios:</p>
                <ul>
                    <li>Correo Electrónico: Envíanos un correo electrónico a [correo electrónico de soporte] y te responderemos lo antes posible.</li>
                    <li>Teléfono: Si prefieres hablar directamente con nosotros, puedes llamarnos al [número de teléfono]. Estamos disponibles para atenderte de [horario de atención].</li>
                </ul>
                <p>Estamos comprometidos a brindarte el mejor servicio posible y a responder a todas tus consultas de manera oportuna y eficiente. ¡Esperamos escucharte pronto!</p>
            </div>
            <Footer></Footer>

        </>


    )
}

export default About