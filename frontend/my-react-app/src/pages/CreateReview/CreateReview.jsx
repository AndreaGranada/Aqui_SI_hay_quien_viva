import { Link, useParams } from "react-router-dom"
import { getOwnProfile } from "../../services/user.service";
import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { getApartmentById } from "../../services/apartment.service";
import { createLegalDoc } from "../../services/legaldocs.service";
import { createReview } from "../../services/apartmentsReviews.service";


function CreateReview() {

//VARIABLES PARA APARTMENT
const { idApartmentCreateReview } = useParams();
const [infoApartment, setInfoApartment] = useState("")

 // VARIABLES PARA LEGAL DOC
  //const [document, setDocument] = useState("");
  const [legalDocID, setLegalDocID] = useState("");
  const [successMessageLegalDoc, setSuccessMessageLegalDoc] = useState("");
  const [isCreatingLegalDoc, setIsCreatingLegalDoc] = useState(false);
  const [errorMessageLegalDoc, setErrorMessageLegalDoc] = useState("");
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");

  // VARIABLES PARA REVIEWS
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [media, setMedia] = useState("");
  //const [legalDocId, setLegalDocId] = useState("");
  //const [apartmentId, setApartmentId] = useState("");
  const [userId, setUserId] = useState("");
  const [reviewID, setReviewID] = useState("");
  const [userID, setUserID] = useState("");
  const [successMessageReview, setSuccessMessageReview] = useState("");
  const [isCreatingReview, setIsCreatingReview] = useState(false);
  const [errorMessageReview, setErrorMessageReview] = useState("");
  const [fileReview, setFileReview] = useState("");
  const [imageReview, setImageReview] = useState("");
  const [showGoToHomeButton, setShowGoToHomeButton] = useState(false);



useEffect(() => {
  const fetchInfoApartment = async () => {
    try {
      const data = await getApartmentById(idApartmentCreateReview);
      setInfoApartment(data);
    } catch (error) {
        console.error("Error al obtener los datos del apartamento:", error);
    }
  };
  fetchInfoApartment();
}, []);

console.log(infoApartment)

useEffect(() => {
    const fetchUserOwnProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const { id } = await getOwnProfile(token);
        setUserID(id);
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };

    fetchUserOwnProfile();
  }, []);

   // FORMULARIO PARA LEGAL DOCS

   function previewFiles(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage(reader.result);
    };
  }

  //console.log(image);

  const handleOnChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    previewFiles(file);
  };

  const handleCreateLegalDoc = async (e) => {
    e.preventDefault();
    setIsCreatingLegalDoc(false);
    if (!image) {
      setErrorMessageLegalDoc("Por favor,suba el archivo antes de continuar");
      return;
    }
    try {
      let { legalDoc, uploadImage } = await createLegalDoc(image);
      console.log(legalDoc);
      const data = legalDoc.id;
      console.log(uploadImage);
      setLegalDocID(data);
      setSuccessMessageLegalDoc("¡Documento legal añadido exitosamente!");
      console.log("Documento legal añadido exitosamente");
    } catch (error) {
      console.error("Error al añadir el documento legal:", error.message);
      setErrorMessageLegalDoc(
        "Ha ocurrido un error al subir el archivo. Por favor, inténtelo de nuevo."
      ); // Establecer el mensaje de error
    } finally {
      setIsCreatingLegalDoc(true); // Habilitar el botón de creación nuevamente
    }
  };

  console.log(file);

  // FORMULARIO PARA REVIEWS

  function previewFilesReview(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImageReview(reader.result);
    };
  }

  const handleOnChangeReview = (e) => {
    const file = e.target.files[0];
    setFileReview(file);
    previewFilesReview(file);
  };



  useEffect(() => {
    const fetchUserOwnProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const { id } = await getOwnProfile(token);
        setUserID(id);
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };

    fetchUserOwnProfile();
  }, []);

  const handleCreateReview = async (e) => {
    e.preventDefault();
    setIsCreatingReview(false);
    if (!title || !content || !imageReview || !legalDocID || !idApartmentCreateReview || !userID) {
      setErrorMessageReview(
        "Por favor, complete todos los campos antes de continuar."
      );
      return;
    }
    try {
      let data = await createReview(
        title,
        content,
        imageReview,
        legalDocID,
        idApartmentCreateReview,
        userID
      );
      setReviewID(data);
      console.log(data);
      setSuccessMessageReview("¡Reseña creada exitosamente! En 24h te informaremos sobre su estado de publicación.");
      setShowGoToHomeButton(true); // Mostrar el botón "Ir al inicio"
    } catch (error) {
      console.error("Error al crear la reseña:", error.message);
      setErrorMessageReview(
        "Ha ocurrido un error al crear la reseña Por favor, inténtelo de nuevo."
      ); 
    } finally {
      setIsCreatingReview(true); // Habilitar el botón de creación nuevamente
    }
  };

  //console.log(reviewID)

  //console.log(userID)





  return (
    <>
      <NavBar/>
      <div className="container">
        <div className="info-apartamento row mt-5 mb-5 bg-warning mx-0 p-5">
          <h2>Crear nuevo apartamento</h2>
          <div  className="row g-3">
            <div className="col-md-6">
                <h1>{infoApartment.road} {infoApartment.roadName}</h1>

            </div>
            
            <div className="col-md-6">
              <h3>{infoApartment.extraInfo}</h3>
            </div>
            <div className="col-md-6">
            <h3>{infoApartment.postalCode}</h3>
            </div>
          </div>
          
        </div>
        <div className="crear-legaldoc row mt-5 mb-5 bg-primary mx-0 p-5">
          <h2>Sube un documento que verifique que has vivido en el piso</h2>
          <form onSubmit={handleCreateLegalDoc} className="row g-3">
            <div className="col-md-12">
              <div className="input-group">
                <label className="form-label"></label>
                <input
                  type="file"
                  className="form-control"
                  onChange={handleOnChange}
                  required
                  accept="image/png, image/jpeg, image/jpg, image/jfif"
                />

                <button
                  type="submit"
                  className="btn btn-secondary"
                  disabled={isCreatingLegalDoc}
                >
                  {isCreatingLegalDoc ? "Archivo subido" : "Subir archivo"}
                </button>
              </div>
              <img src={image} alt="" />
            </div>
          </form>
          {successMessageLegalDoc && (
            <div className="alert alert-success mt-3">
              {successMessageLegalDoc}
            </div>
          )}
          {errorMessageLegalDoc && (
            <div className="alert alert-danger mt-3">
              {errorMessageLegalDoc}
            </div> // Mostrar el mensaje de error
          )}
        </div>
        <div className="crear-review row mt-5 mb-5 bg-light mx-0 p-5">
          <h2>Crear reseña para el apartamento</h2>
          <form onSubmit={handleCreateReview} className="row g-3">
            <div className="col-md-12">
              <label className="form-label">Titulo de la reseña</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="col-md-12">
              <label className="form-label">Contenido de la reseña</label>
              <textarea
                type="text"
                className="form-control"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label className="form-label w-100">
                Incluye una imagen a la reseña
              </label>
              <input
                type="file"
                className="form-control"
                onChange={handleOnChangeReview}
                required
                accept="image/png, image/jpeg, image/jpg, image/jfif"
              />

              <button
                type="submit"
                className="btn btn-secondary"
                disabled={isCreatingReview}
              >
                {isCreatingReview ? "Archivo subido" : "Subir imagen y enviar"}
              </button>
            </div>
            <img src={imageReview} alt="" />
          </form>
          {successMessageReview && (
          <div className="alert alert-success mt-3">
            {successMessageReview}
          </div>
        )}
        {errorMessageReview && (
          <div className="alert alert-danger mt-3">{errorMessageReview}</div>
        )}
        {showGoToHomeButton && successMessageReview && (
          <div className="text-center mt-3">
            <Link to="/" className="btn btn-primary">Ir al inicio</Link>
          </div>
        )}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default CreateReview;
