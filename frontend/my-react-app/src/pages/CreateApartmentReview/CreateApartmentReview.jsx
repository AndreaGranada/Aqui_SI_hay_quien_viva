
import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import { getAllDistricts } from "../../services/district.service";

const CreateApartmentReview = () => {

    // Formulario para APARTAMENTO

    const [road, setRoad] = useState("");
    const [roadName, setRoadName] = useState("");
    const [extraInfo, setExtraInfo] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [district, setDistrict] = useState("");
    const [allDistrict, setAllDistrict] = useState("");

    useEffect(() => {
        // Cuando el componente se monta, obtener los distritos disponibles
        const fetchDistricts = async () => {
            try {
                const districtData = await getAllDistricts(); // Obtener los distritos desde la API
                setAllDistrict(districtData); // Actualizar el estado con los distritos obtenidos
            } catch (error) {
                console.error('Error al obtener los distritos:', error);
            }
        };

        fetchDistricts(); // Llamar a la función para obtener los distritos
    }, []);
    //console.log(allDistrict)
    console.log(district)

    const [successMessage, setSuccessMessage] = useState("");

    const handleCreateApartment = async (e) => {
        e.preventDefault();
        try {
            await createUserAdmin(road, surname, email, password, dni, phone);
            setSuccessMessage("¡Usuario creado exitosamente!");
            clearForm();
            console.log("Usuario creado exitosamente");
        } catch (error) {
            console.error("Error al crear usuario:", error.message);
        }
    };

    const clearForm = () => {
        setRoad("");
        setRoadName("");
        setExtraInfo("");
        setPostalCode("");
        setDistrict("");
        setPhone("");
    };
    return (
        <>
            <NavBar></NavBar>
            <div className="container">
                <div className="crear-apartamento row mt-5 mb-5 bg-primary mx-0 p-5">
                    <h2>Crear nuevo apartamento</h2>
                    <form onSubmit={handleCreateApartment} className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Tipo de vía</label>
                            <select
                                className="form-select"
                                value={road}
                                onChange={(e) => setRoad(e.target.value)}
                            >
                                <option value="">Selecciona el tipo de vía</option>
                                <option value="Calle">Calle</option>
                                <option value="Avenida">Avenida</option>
                                <option value="Plaza">Plaza</option>
                            </select>
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
                            <label className="form-label">Postal, piso, escalera y numero</label>
                            <input
                                type="text"
                                className="form-control"
                                value={extraInfo}
                                onChange={(e) => setExtraInfo(e.target.value)}
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
                            <label htmlFor="districto" className='form-label'>Distrito</label>
                            <select id="districto" name="districtId" value={district} onChange={(e) => setDistrict(e.target.value)} className='form-select'>
                                <option value="">Seleccione un distrito</option>
                                {allDistrict && Array.isArray(allDistrict) && allDistrict.map(district => (
                                    <option key={district.id} value={district.id}>{district.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">ID del Distrito</label>
                            <input
                                type="text"
                                className="form-control bg-secondary"
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                                readOnly
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
                </div>
                <div className="crear-legaldoc row">

                </div>
                <div className="crear-review row">

                </div>
            </div>
            <Footer></Footer>

        </>
    )
}

export default CreateApartmentReview