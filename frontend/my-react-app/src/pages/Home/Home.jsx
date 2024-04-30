import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import Carrusel from "../../components/Carrusel/Carrusel"
import ApartmentCard from "../../components/ApartmentCard/ApartmentCard"
import ListApartment from "../../components/ListApartment/ListApartment"
import Filters from "../../components/Filters/Filters"
const Home = () => {
    return (
        <>
        <NavBar/>
       <Carrusel/>
       <Filters/>
       <ListApartment></ListApartment>
        <Footer/>
        </>
    )
}

export default Home