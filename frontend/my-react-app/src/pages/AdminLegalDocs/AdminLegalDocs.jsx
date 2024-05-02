import { useEffect, useState } from "react";
import { getAllLegalDocs } from "../../services/legaldocs.service";
import MenuAdmin from "../../components/MenuAdmin/MenuAdmin";
function AdminLegalDocs() {

    const [data, setData] = useState([]);

    useEffect(() => {
        // Cuando el componente se monta, obtener los distritos disponibles
        const fetchLegalDocs = async () => {
          try {
            const token = localStorage.getItem('token');
            const {docs} = await getAllLegalDocs(token);
            setData(docs); // Actualizar el estado con los distritos obtenidos
          } catch (error) {
            console.error('Error al obtener los legalsDocs:', error);
          }
        };
        fetchLegalDocs(); // Llamar a la función para obtener los distritos
      }, []);
console.log(data)
  
    
         return (
        <>
            <div className="container-fluid row">
                <MenuAdmin></MenuAdmin>
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
                                    <td className="align-middle text-center">{item.document}</td>
                                    <td className={item.status === 'aceptado' ? 'align-middle text-center table-success' : (item.status === 'pendiente' ? 'align-middle text-center table-warning' : 'table-danger align-middle text-center')}>{item.status}</td>
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
                    <button type="button" className='btn btn-naranja w-100'>REGISTRAR UN DOCUMENTO LEGAL</button>
                </main>
            </div>
        </>
    );
  
}

export default AdminLegalDocs