import imagen_logo from '../../assets/img/logo_amarillo.png';
import { Link } from 'react-router-dom';
import MenuAdmin from "../../components/MenuAdmin/MenuAdmin"
import { getAllApartment } from '../../services/apartmentsReviews.service';
import { useState, useEffect } from 'react';

function AdminApartments() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchAllApartments = async () => {
            try {
                const token = localStorage.getItem('token');
                console.log(token)
                const data = await getAllApartment(token);
                setData(data);
            } catch (error) {
                console.error('Error al obtener las reviews:', error);
            }
        };
        fetchAllApartments();
    }, []);

    console.log(data)
    return (
        <>
            <div className="container-fluid row">
                <MenuAdmin></MenuAdmin>
                <main className="name col ms-5 mt-5 mb-5">
                    <h2 className='mt-5 mb-5'>Apartamentos registrados</h2>
                    <table className='table table-striped table-hover mb-5 table-responsive'>
                        <thead>
                            <tr className='table-dark'>
                                <th className="align-middle text-center col-1">ID</th>
                                <th className="align-middle text-center col-2">Road Name</th>
                                <th className="align-middle text-center col-2">Road</th>
                                <th className="align-middle text-center col-2">Postal Code</th>
                                <th className="align-middle text-center col-1">District ID</th>
                                <th className="align-middle text-center col-2">Extra Info</th>
                                <th className="align-middle text-center col-1"></th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td className="align-middle text-center">{item.id}</td>
                                    <td className="align-middle text-center">{item.roadName}</td>
                                    <td className="align-middle text-center">{item.road}</td>
                                    <td className="align-middle text-center">{item.postalCode}</td>
                                    <td className="align-middle text-center">{item.districtId}</td>
                                    <td className="align-middle text-center">{item.extraInfo}</td>
                                    <td className="text-center align-middle d-flex">
                                        <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                                            <button className="btn-primary btn me-3">Editar</button>
                                        </div>
                                        <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                                            <button className="btn-danger btn">Borrar</button>
                                        </div>
                                    </td>
                                 
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type="button" className='btn btn-naranja w-100'>REGISTRAR UN APARTAMENTO</button>
                </main>

            </div>

        </>
    );
}

export default AdminApartments;