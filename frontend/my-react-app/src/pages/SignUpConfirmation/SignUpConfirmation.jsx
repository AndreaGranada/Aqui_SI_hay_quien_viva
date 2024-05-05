import { Link } from "react-router-dom"
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import imagen_logo from "../../assets/img/logo_marron.png";




function SignUpConfirmation() {
  return (
    <>
      <div>
        <NavBar />
        <main className="name col ms-5 mt-5 mb-5">
          <div className="d-flex justify-content-center align-items-center">
            <div className="signup-confirmation text-center">
              <img src={imagen_logo} alt="" />
              <h2 className="mb-3">¡Te has registrado con éxito!</h2>
              <Link to={"/login"}>
                <button className="btn btn-primary">Entrar</button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default SignUpConfirmation;