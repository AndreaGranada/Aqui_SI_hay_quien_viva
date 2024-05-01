import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import Carrusel from "../../components/Carrusel/Carrusel"
import ApartmentCard from "../../components/ApartmentCard/ApartmentCard"
import ListApartment from "../../components/ListApartment/ListApartment"
import Filters from "../../components/Filters/Filters"
import { useState } from "react"
const Home = () => {
    const [sixApartment, setSixApartment] = useState([])
    return (
        <>
        <NavBar/>
       <Carrusel/>
       <Filters/>
       <ListApartment sixApartment={sixApartment} setSixApartment={setSixApartment}></ListApartment>
        <Footer/>
        </>
    )
}

export default Home