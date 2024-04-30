import React from 'react'
import { Outlet } from 'react-router-dom'
// import Navbar from '../components/Navbar/Navbar'
// import bannerImage from '../assets/banner.png'; // Importa la imagen
// import Footer from '../components/Footer/Footer';
import './index.css'
function Root() {
  return (
    <div>
      <section>
        <Outlet />
      </section>
    </div>
  )
}

export default Root