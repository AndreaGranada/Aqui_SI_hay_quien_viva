import { useEffect, useState } from "react";
import MenuAdmin from "../../components/MenuAdmin/MenuAdmin"
import { createLegalDoc } from "../../services/legaldocs.service";

function AdminLegalDocsCreate() {
  const [legalDocID, setLegalDocID] = useState("");
  const [successMessageLegalDoc, setSuccessMessageLegalDoc] = useState("");
  const [isCreatingLegalDoc, setIsCreatingLegalDoc] = useState(false);
  const [errorMessageLegalDoc, setErrorMessageLegalDoc] = useState("");
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");


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

  return (
    <>
    <div className="container-fluid row">
      <MenuAdmin/>
      <main className="name col ms-5 mt-5 mb-5">
      <div className="crear-legaldoc row mt-5 mb-5 bg-primary mx-0 p-5">
          <h2>Adjunta el documento legal que quieres crear</h2>
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
            </div> 
          )}
        </div>
        </main>


    </div>
    </>
  )
}

export default AdminLegalDocsCreate