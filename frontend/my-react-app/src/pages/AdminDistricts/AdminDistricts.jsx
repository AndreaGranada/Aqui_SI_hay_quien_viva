import { useEffect, useState } from "react";
import { getAllDistricts } from "../../services/district.service";
import MenuAdmin from "../../components/MenuAdmin/MenuAdmin";
import { Link } from "react-router-dom";
import { deleteDistricts } from '../../services/district.service';

function AdminDistricts() {

    const [data, setData] = useState([]);

    useEffect(() => {
        // Cuando el componente se monta, obtener los distritos disponibles
        const fetchAllDosdistricts = async () => {
            try {
                const district = await getAllDistricts();
                setData(district); // Actualizar el estado con los distritos obtenidos
            } catch (error) {
                console.error('Error al obtener los district:', error);
            }
        };
        fetchAllDosdistricts(); // Llamar a la función para obtener los distritos
    }, []);
    console.log(data)

    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem('token');
            await deleteDistricts(token, id);
            // Remove the deleted apartment from the data state
            setData(data.filter(district => district.id !== id));
            console.log(data)
        } catch (error) {
            console.error('Error deleting apartment:', error);
        }
    };

    return (
        <>
            <div className="container-fluid row">
                <MenuAdmin></MenuAdmin>
                <main className="name col ms-5 mt-5 mb-5">
                    <h2 className='mt-5 mb-5'>Distritos registrados</h2>
                    <table className='table table-striped table-hover mb-5 table-responsive'>
                        <thead>
                            <tr className='table-dark'>
                                <th className="align-middle text-center col-1">ID</th>
                                <th className="align-middle text-center col-9">Nombre</th>
                                <th className="align-middle text-center col-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td className="align-middle text-center">{item.id}</td>
                                    <td className="align-middle text-center">{item.name}</td>
                                    <td className="text-center align-middle">
                                        <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                                            <Link to={`/admin/district/${item.id}`} className="btn-secondary btn me-3 align-middle">Editar</Link>
                                            <button className="btn-danger btn me-3 align-middle" onClick={() => handleDelete(item.id)}>Borrar</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type="button" className='btn btn-naranja w-100'>REGISTRAR UN DISTRITO</button>
                </main>
            </div>
        </>
    );

}

export default AdminDistricts