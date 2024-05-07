import { useState } from "react";
import MenuAdmin from "../../components/MenuAdmin/MenuAdmin";
import { createReview } from "../../services/apartmentsReviews.service";

function AdminReviewsCreate() {
  const [userId, setUserId] = useState("");
  const [apartmentId, setApartmentId] = useState("");
  const [legalDocId, setLegalDocId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [successMessageReview, setSuccessMessageReview] = useState("");
  const [isCreatingReview, setIsCreatingReview] = useState(false);
  const [errorMessageReview, setErrorMessageReview] = useState("");
  const [fileReview, setFileReview] = useState("");
  const [imageReview, setImageReview] = useState("");

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

  const handleCreateReview = async (e) => {
    e.preventDefault();
    setIsCreatingReview(false);
    if (
      !title ||
      !content ||
      !imageReview ||
      !legalDocId ||
      !apartmentId ||
      !userId
    ) {
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
        legalDocId,
        apartmentId,
        userId
      );
      setSuccessMessageReview("¡Reseña creada exitosamente!");
    } catch (error) {
      console.error("Error al crear la reseña:", error.message);
      setErrorMessageReview(
        "Ha ocurrido un error al crear la reseña Por favor, inténtelo de nuevo."
      ); // Establecer el mensaje de error
    } finally {
      setIsCreatingReview(true); // Habilitar el botón de creación nuevamente
    }
  };

  return (
    <>
      <div className="container-fluid row">
        <MenuAdmin />
        <main className="name col ms-5 mt-5 mb-5">
          <div>
            <h2>Crear nueva revisión</h2>
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="userId" className="form-label">
                  ID del Usuario
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="userId"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="apartmentId" className="form-label">
                  ID del Apartamento
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="apartmentId"
                  value={apartmentId}
                  onChange={(e) => setApartmentId(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="legalDocId" className="form-label">
                  ID del Documento Legal
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="legalDocId"
                  value={legalDocId}
                  onChange={(e) => setLegalDocId(e.target.value)}
                />
              </div>
            </form>
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
                  {isCreatingReview
                    ? "Archivo subido"
                    : "Subir imagen y enviar"}
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
              <div className="alert alert-danger mt-3">
                {errorMessageReview}
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default AdminReviewsCreate;
