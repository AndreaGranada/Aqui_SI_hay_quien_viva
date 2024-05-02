import { Navigate, createBrowserRouter, redirect } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts";
import About from "../pages/About/About";
import LogIn from "../pages/LogIn/LogIn";
import ApartmentReviewsPage from "../pages/ApartmentReviewsPage/ApartmentReviewsPage";
import FilteredReviews from "../pages/FilteredReviews/FilteredReviews";
import SignUp from "../pages/SignUp/SignUp";
import AdminHome from "../pages/AdminHome/AdminHome";
import AdminUsers from "../pages/AdminUsers/AdminUsers";
import UserHome from "../pages/UserHome/UserHome";
import UserReviews from "../pages/UserReviews/UserReviews";
import UserProfile from "../pages/UserProfile/UserProfile";
import UserLegalDocs from "../pages/UserLegalDocs/UserLegalDocs";
import AdminReviewsApartmentId from "../pages/AdminReviewsApartmentId/AdminReviewsApartmentId";


//import NotFound from '../pages/NotFound'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    //errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },

      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/apartment/:apartmentId", // Ruta con parámetro
        element: <ApartmentReviewsPage />, // Importa el componente necesario
      },
      {
        path: "/FilteredReviews", // Ruta con parámetro
        element: <FilteredReviews />, // Importa el componente necesario
      },
      {
        path: "/admin", // Ruta con parámetro
        element:
          localStorage.getItem("token") &&
            localStorage.getItem("role") === "admin" ? (
            <AdminHome />
          ) : (
            <Navigate to="/" />
          ),
      },
      {
        path: "/admin/users",
        element:
          localStorage.getItem("token") &&
            localStorage.getItem("role") === "admin" ? (
            <AdminUsers />
          ) : (
            <Navigate to="/" />
          ), // Si el usuario tiene un token y el rol es admin, renderiza AdminUsers, de lo contrario, navega a la página de inicio.
      },
      {
        path: "/user",
        element:
          localStorage.getItem("token") &&
            localStorage.getItem("role") === "user" ? (
            <UserHome />
          ) : (
            <Navigate to="/" />
          ),

      },
      {
        path: "/user/profile",
        element: localStorage.getItem("token") &&
          localStorage.getItem("role") === "user" ? (
          <UserProfile />
        ) : (
          <Navigate to="/" />
        ),
      },
      {
        path: "/user/reviews",
        element: localStorage.getItem("token") &&
          localStorage.getItem("role") === "user" ? (
          <UserReviews />
        ) : (
          <Navigate to="/" />
        ),
      },
      {
        path: "/user/legaldocs",
        element: localStorage.getItem("token") &&
          localStorage.getItem("role") === "user" ? (
          <UserLegalDocs />
        ) : (
          <Navigate to="/" />
        ),
      },
      {
        path: "/admin/apartment/:apartmentReviewId", // Ruta con parámetro
        element:
          localStorage.getItem("token") &&
            localStorage.getItem("role") === "admin" ? (
            <AdminReviewsApartmentId />
          ) : (
            <Navigate to="/" />
          ), // Importa el componente necesario
      },
    ],
  },
]);

export default router;
