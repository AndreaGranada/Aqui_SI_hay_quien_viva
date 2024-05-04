import { useState } from "react";
import MenuAdmin from "../../components/MenuAdmin/MenuAdmin"
import { createDistrictAdmin } from "../../services/admin.service";


function AdminDistrictsCreate() {
  const [name, setName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCreateDistrict = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await createDistrictAdmin(name, token);
      setSuccessMessage("¡Distrito creado exitosamente!");
      clearForm();
      console.log("Distrito creado exitosamente");
    } catch (error) {
      setErrorMessage("Error al crear distrito: " + error.message);
      console.error("Error al crear distrito:", error.message);
    }
  };

  const clearForm = () => {
    setName("");
  };

  return (
    <div className="container-fluid row">
      <MenuAdmin />
      <main className="name col ms-5 mt-5 mb-5">
        <h2>Crear Nuevo Distrito</h2>
        <form onSubmit={handleCreateDistrict} className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-secondary">
              Crear Distrito
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
  );
}

export default AdminDistrictsCreate;