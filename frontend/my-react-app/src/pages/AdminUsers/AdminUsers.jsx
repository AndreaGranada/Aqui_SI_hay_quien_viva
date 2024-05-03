import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/admin.service";
import MenuAdmin from "../../components/MenuAdmin/MenuAdmin";
import { Link } from "react-router-dom";


function AdminUsers() {

    const [data, setData] = useState([]);

    useEffect(() => {
        // Cuando el componente se monta, obtener los distritos disponibles
        const fetchUsers = async () => {
          try {
            const users = await getAllUsers();
            setData(users); // Actualizar el estado con los distritos obtenidos
          } catch (error) {
            console.error('Error al obtener los distritos:', error);
          }
        };
        fetchUsers(); // Llamar a la función para obtener los distritos
      }, []);
console.log(data)
  
    return (
      <>
          <div className="container-fluid row">
              <MenuAdmin></MenuAdmin>
              <main className="name col ms-5 mt-5 mb-5">
                  <h2 className='mt-5 mb-5'>Usuarios registrados</h2>
                  <table className='table table-striped table-hover mb-5 table-responsive'>
                      <thead>
                          <tr className='table-dark'>
                              <th className="align-middle text-center col-1">ID</th>
                              <th className="align-middle text-center col-2">Nombre</th>
                              <th className="align-middle text-center col-2">Apellido</th>
                              <th className="align-middle text-center col-3">Email</th>
                              <th className="align-middle text-center col-2">DNI</th>
                              <th className="align-middle text-center col-2"></th>
                          </tr>
                      </thead>
                      <tbody>
                          {data.map((item) => (
                              <tr key={item.id}>
                                  <td className="align-middle text-center">{item.id}</td>
                                  <td className="align-middle text-center">{item.name}</td>
                                  <td className="align-middle text-center">{item.surname}</td>
                                  <td className="align-middle text-center">{item.email}</td>
                                  <td className="align-middle text-center">{item.dni}</td>
                                  <td className="text-center align-middle">
                                      <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                                          <button className="btn-secondary btn me-3 align-middle">Editar</button>
                                          <button className="btn-danger btn">Borrar</button>
                                      </div>
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
                  <Link to={"/admin/users/create"}>
                  <button type="button" className='btn btn-naranja w-100'>REGISTRAR UN USUARIO</button>
                  </Link>
              </main>
          </div>
      </>
  );
  
}

export default AdminUsers