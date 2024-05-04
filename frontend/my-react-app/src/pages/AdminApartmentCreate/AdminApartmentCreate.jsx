import { useState } from "react";
import MenuAdmin from "../../components/MenuAdmin/MenuAdmin";
import { createApartmentAdmin } from "../../services/admin.service";


function AdminApartmentCreate() {
    const [road, setRoad] = useState("");
    const [roadName, setRoadName] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [extraInfo, setExtraInfo] = useState("");
    const [districtId, setDistrictId] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    const handleCreateApartment = async (e) => {
      e.preventDefault();
      try {
        const token = localStorage.getItem('token');
        await createApartmentAdmin(road, roadName, postalCode, extraInfo, districtId, token);
        setSuccessMessage("¡Apartamento creado exitosamente!");
        clearForm();
        console.log("Apartamento creado exitosamente");
      } catch (error) {
        setErrorMessage("Error al crear apartamento: " + error.message);
        console.error("Error al crear apartamento:", error.message);
      }
    };
  
    const clearForm = () => {
      setRoad("");
      setRoadName("");
      setPostalCode("");
      setExtraInfo("");
      setDistrictId("");
    };
  
    return (
      <>
        <div className="container-fluid row">
          <MenuAdmin />
          <main className="name col ms-5 mt-5 mb-5">
            <h2>Crear Nuevo Apartamento</h2>
            <form onSubmit={handleCreateApartment} className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Tipo de vía</label>
                <input
                  type="text"
                  className="form-control"
                  value={road}
                  onChange={(e) => setRoad(e.target.value)}
                />
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
                <label className="form-label">Código Postal</label>
                <input
                  type="text"
                  className="form-control"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Información Adicional (Piso,portal, escalera)</label>
                <input
                  type="text"
                  className="form-control"
                  value={extraInfo}
                  onChange={(e) => setExtraInfo(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">ID del Distrito</label>
                <input
                  type="text"
                  className="form-control"
                  value={districtId}
                  onChange={(e) => setDistrictId(e.target.value)}
                />
              </div>
              <div className="col-12 text-center">
                <button type="submit" className="btn btn-secondary">
                  Crear Apartamento
                </button>
              </div>
            </form>
            {successMessage && (
              <div className="alert alert-success mt-3">{successMessage}</div>
            )}
            {errorMessage && (
              <div className="alert alert-danger mt-3">{errorMessage}</div>
            )}
          </main>
        </div>
      </>
    );
  }
  
  export default AdminApartmentCreate;