import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/admin.service";

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

  return (
    <div>AdminUsers</div>
  )
}

export default AdminUsers