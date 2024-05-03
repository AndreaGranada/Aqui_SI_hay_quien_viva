import { useState } from "react";
import { createUserAdmin } from "../../services/admin.service";
import MenuAdmin from "../../components/MenuAdmin/MenuAdmin";

function AdminUserCreate() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dni, setDni] = useState("");
  const [phone, setPhone] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      await createUserAdmin(name, surname, email, password, dni, phone);
      setSuccessMessage("¡Usuario creado exitosamente!");
      clearForm();
      console.log("Usuario creado exitosamente");
    } catch (error) {
      console.error("Error al crear usuario:", error.message);
    }
  };

  const clearForm = () => {
    setName("");
    setSurname("");
    setEmail("");
    setPassword("");
    setDni("");
    setPhone("");
  };

  return (
    <div className="container-fluid row">
      <MenuAdmin />
      <main className="name col ms-5 mt-5 mb-5">
        <h2>Crear Nuevo Usuario</h2>
        <form onSubmit={handleCreateUser} className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Apellido</label>
            <input
              type="text"
              className="form-control"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">DNI</label>
            <input
              type="text"
              className="form-control"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Teléfono</label>
            <input
              type="text"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-secondary">
              Crear Usuario
            </button>
          </div>
        </form>
        {successMessage && (
          <div className="alert alert-success mt-3">{successMessage}</div>
        )}
      </main>
    </div>
  );
}

export default AdminUserCreate;
