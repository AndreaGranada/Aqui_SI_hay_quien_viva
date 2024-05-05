import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { getAllDistricts } from "../../services/district.service";
import { createApartmentAdmin } from "../../services/admin.service";
import { createLegalDoc } from "../../services/legaldocs.service";
import { createReview } from "../../services/apartmentsReviews.service";
import { getOwnProfile } from "../../services/user.service";
const CreateApartmentReview = () => {
  // VARIABLES PARA APARTAMENTO
  const [road, setRoad] = useState("");
  const [roadName, setRoadName] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [district, setDistrict] = useState("");
  const [allDistrict, setAllDistrict] = useState("");
  const [apartmentID, setApartmentID] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
  const [apartmentId, setApartmentId] = useState("");
  const [userId, setUserId] = useState("");
  const [reviewID, setReviewID] = useState("");
  const [userID, setUserID] = useState("");
  const [successMessageReview, setSuccessMessageReview] = useState("");
  const [isCreatingReview, setIsCreatingReview] = useState(false);
  const [errorMessageReview, setErrorMessageReview] = useState("");
  const [fileReview, setFileReview] = useState("");
  const [imageReview, setImageReview] = useState("");

  // FORMULARIO PARA APARTAMENTO

  useEffect(() => {
    // Cuando el componente se monta, obtener los distritos disponibles
    const fetchDistricts = async () => {
      try {
        const districtData = await getAllDistricts(); // Obtener los distritos desde la API
        setAllDistrict(districtData); // Actualizar el estado con los distritos obtenidos
      } catch (error) {
        console.error("Error al obtener los distritos:", error);
      }
    };

    fetchDistricts(); // Llamar a la función para obtener los distritos
  }, []);

  const handleCreateApartment = async (e) => {
    e.preventDefault();
    setIsCreating(false);
    if (!road || !roadName || !extraInfo || !postalCode || !district) {
      setErrorMessage(
        "Por favor, complete todos los campos antes de continuar."
      );
      return;
    }
    try {
      let data = await createApartmentAdmin(
        road,
        roadName,
        postalCode,
        extraInfo,
        district
      );
      setApartmentID(data.newApartment.id);
      setSuccessMessage("¡Apartamento creado exitosamente!");
      clearForm();
      console.log("Apartamento creado exitosamente");
    } catch (error) {
      console.error("Error al crear el apartamento:", error.message);
      setErrorMessage(
        "Ha ocurrido un error al crear el apartamento. Por favor, inténtelo de nuevo."
      ); // Establecer el mensaje de error
    } finally {
      setIsCreating(true); // Habilitar el botón de creación nuevamente
    }
  };
  const clearForm = () => {
    setRoad("");
    setRoadName("");
    setExtraInfo("");
    setPostalCode("");
    setDistrict("");
  };

  //console.log(apartmentID)

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
      clearForm();
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
    if (!title || !content || !imageReview || !legalDocID || !apartmentID || !userID) {
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
        apartmentID,
        userID
      );
      setReviewID(data);
      console.log(data);
      setSuccessMessageReview("¡Reseña creada exitosamente!");
      clearForm();
      console.log("Reseña creado exitosamente");
    } catch (error) {
      console.error("Error al crear la reseña:", error.message);
      setErrorMessageReview(
        "Ha ocurrido un error al crear la reseña Por favor, inténtelo de nuevo."
      ); // Establecer el mensaje de error
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
        <div className="crear-apartamento row mt-5 mb-5 bg-warning mx-0 p-5">
          <h2>Crear nuevo apartamento</h2>
          <form onSubmit={handleCreateApartment} className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Tipo de vía</label>
              <select
                className="form-select"
                value={road}
                onChange={(e) => setRoad(e.target.value)}
              >
                <option value="">Selecciona el tipo de vía</option>
                <option value="Calle">Calle</option>
                <option value="Avenida">Avenida</option>
                <option value="Plaza">Plaza</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Nombre de la vía</label>
              <input
                type="text"
                className="form-control"
                value={roadName}
                onChange={(e) => setRoadName(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">
                Número, piso, escalera, etc
              </label>
              <input
                type="text"
                className="form-control"
                value={extraInfo}
                onChange={(e) => setExtraInfo(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Código Postal</label>
              <input
                type="text"
                className="form-control"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="districto" className="form-label">
                Distrito
              </label>
              <select
                id="districto"
                name="districtId"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="form-select"
              >
                <option value="">Seleccione un distrito</option>
                {allDistrict &&
                  Array.isArray(allDistrict) &&
                  allDistrict.map((district) => (
                    <option key={district.id} value={district.id}>
                      {district.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">ID del Distrito</label>
              <input
                type="text"
                className="form-control"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                readOnly
                disabled
              />
            </div>

            <div className="col-12 text-center">
              <button
                type="submit"
                className="btn btn-secondary"
                disabled={isCreating}
              >
                {isCreating ? "Apartamento Creado" : "Crear Apartamento"}
              </button>
            </div>
          </form>
          {successMessage && (
            <div className="alert alert-success mt-3">{successMessage}</div>
          )}
          {errorMessage && (
            <div className="alert alert-danger mt-3">{errorMessage}</div> // Mostrar el mensaje de error
          )}
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
            <div className="alert alert-danger mt-3">{errorMessageReview}</div> // Mostrar el mensaje de error
          )}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default CreateApartmentReview;
