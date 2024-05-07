import { useEffect, useState } from "react";
import { getAllLegalDocs, deleteLegalDocs } from "../../services/legaldocs.service";
import MenuAdmin from "../../components/MenuAdmin/MenuAdmin";
import { Link } from "react-router-dom";

function AdminLegalDocs() {

    const [data, setData] = useState([]);

    useEffect(() => {
        // Cuando el componente se monta, obtener los distritos disponibles
        const fetchLegalDocs = async () => {
            try {
                const token = localStorage.getItem('token');
                const { docs } = await getAllLegalDocs(token);
                setData(docs); // Actualizar el estado con los distritos obtenidos
            } catch (error) {
                console.error('Error al obtener los legalsDocs:', error);
            }
        };
        fetchLegalDocs(); // Llamar a la función para obtener los distritos
    }, []);
    console.log(data)

    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem('token');
            await deleteLegalDocs(token, id);
            // Remove the deleted user from the data state
            setData(data.filter(legalDoc => legalDoc.id !== id));
        } catch (error) {
            console.error('Error deleting apartment:', error);
        }
    };
    return (
        <>
            <div className="container-fluid row">
                <MenuAdmin/>
                <main className="name col ms-5 mt-5 mb-5">
                    <h2 className='mt-5 mb-5'>Documentos legales registrados</h2>
                    <table className='table table-striped table-hover mb-5 table-responsive'>
                        <thead>
                            <tr className='table-dark'>
                                <th className="align-middle text-center col-1">ID</th>
                                <th className="align-middle text-center col-2">Documento</th>
                                <th className="align-middle text-center col-2">Estado</th>
                                <th className="align-middle text-center col-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td className="align-middle text-center">{item.id}</td>
                                    <td className="align-middle text-center"><a href={item.document}><img src={item.document} width="200px" alt="" /></a></td>
                                    <td className={item.status === 'aceptado' ? 'align-middle text-center table-success' : (item.status === 'pendiente' ? 'align-middle text-center table-warning' : 'table-danger align-middle text-center')}>{item.status}</td>
                                    <td className="text-center align-middle">
                                        <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                                            <Link to={`/admin/legaldocs/${item.id}`}><button className="btn-secondary btn me-3 align-middle">Editar</button></Link>
                                            <button className="btn-danger btn me-3 align-middle" onClick={() => handleDelete(item.id)}>Borrar</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Link to={"/admin/legaldoc/create"}>
                    <button type="button" className='btn btn-naranja w-100'>REGISTRAR UN DOCUMENTO LEGAL</button>
                    </Link>
                </main>
            </div>
        </>
    );

}

export default AdminLegalDocs