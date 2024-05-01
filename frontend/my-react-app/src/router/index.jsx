import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Root from '../layouts'
import About from '../pages/About/About'
import LogIn from '../pages/LogIn/LogIn'
import SignUp from '../pages/SignUp/SignUp' 
//import About from '../pages/About'
/*import NotFound from '../pages/NotFound'
import Random from '../pages/Random/Random'
import ListCategories from '../pages/CategoriesList/CategoriesList'
import CategorieShow from '../pages/CategorieShow/CategorieShow'
import ShowCocktail from '../pages/ShowCocktail/ShowCocktail'*/


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
    ],
  },
]);

export default router