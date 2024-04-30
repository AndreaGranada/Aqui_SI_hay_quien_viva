import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import ApartmentReviews from "../../components/ApartmentReview/ApartmentReview"
import { useState } from "react"
const ApartmentReviewsPage = () => {

    return (
        <>
        <NavBar/>
      <ApartmentReviews/>
        <Footer/>
        </>
    )
}

export default ApartmentReviewsPage