
import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import { getAllDistricts } from "../../services/district.service";
import { createApartmentAdmin } from "../../services/admin.service";
import { createLegalDoc } from "../../services/legaldocs.service";
import { createReview } from "../../services/apartmentsReviews.service";

const CreateApartmentReview = () => {


    // VARIABLES PARA APARTAMENTO
    const [road, setRoad] = useState("");
    const [roadName, setRoadName] = useState("");
    const [extraInfo, setExtraInfo] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [district, setDistrict] = useState("");
    const [allDistrict, setAllDistrict] = useState("");
    const [aparmentID, setApartmentID] = useState("");
    const [isCreating, setIsCreating] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // VARIABLES PARA LEGAL DOC
    const [document, setDocument] = useState("");
    const [legalDocID, setLegalDocID] = useState("");
    const [successMessageLegalDoc, setSuccessMessageLegalDoc] = useState("");
    const [isCreatingLegalDoc, setIsCreatingLegalDoc] = useState(false);
    const [errorMessageLegalDoc, setErrorMessageLegalDoc] = useState("");



    // FORMULARIO PARA APARTAMENTO

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

    const handleCreateApartment = async (e) => {
        e.preventDefault();
        setIsCreating(false);
        if (!road || !roadName || !extraInfo || !postalCode || !district) {
            setErrorMessage("Por favor, complete todos los campos antes de continuar.");
            return;
        }
        try {
            let data = await createApartmentAdmin(road, roadName, postalCode, extraInfo, district);
            setApartmentID(data)
            setSuccessMessage("¡Usuario creado exitosamente!");
            clearForm();
            console.log("Usuario creado exitosamente");
        } catch (error) {
            console.error("Error al crear usuario:", error.message);
            setErrorMessage("Ha ocurrido un error al crear el apartamento. Por favor, inténtelo de nuevo."); // Establecer el mensaje de error
        }
        finally {
            setIsCreating(true); // Habilitar el botón de creación nuevamente
        }

    };
    const clearForm = () => {
        setRoad("");
        setRoadName("");
        setExtraInfo("");
        setPostalCode("");
        setDistrict("");
    };

    console.log(aparmentID)

    // FORMULARIO PARA LEGAL DOCS

    const handleCreateLegalDoc = async (e) => {
        e.preventDefault();
        setIsCreatingLegalDoc(false);
        if (!document) {
            setErrorMessageLegalDoc("Por favor,suba el archivo antes de continuar");
            return;
        }
        try {
            let data = await createLegalDoc(document);
            setLegalDocID(data)
            setSuccessMessageLegalDoc("¡Usuario creado exitosamente!");
            clearForm();
            console.log("Usuario creado exitosamente");
        } catch (error) {
            console.error("Error al crear usuario:", error.message);
            setErrorMessageLegalDoc("Ha ocurrido un error al subir el archivo. Por favor, inténtelo de nuevo."); // Establecer el mensaje de error
        }
        finally {
            setIsCreatingLegalDoc(true); // Habilitar el botón de creación nuevamente
        }

    };

    console.log(legalDocID)

    // FORMULARIO PARA REVIEWS
    const handleCreateReview = async (e) => {
        e.preventDefault();
        setIsCreating(false);
        if (!road || !roadName || !extraInfo || !postalCode || !district) {
            setErrorMessage("Por favor, complete todos los campos antes de continuar.");
            return;
        }
        try {
            let data = await createApartmentAdmin(road, roadName, postalCode, extraInfo, district);
            setApartmentId(data)
            setSuccessMessage("¡Usuario creado exitosamente!");
            clearForm();
            console.log("Usuario creado exitosamente");
        } catch (error) {
            console.error("Error al crear usuario:", error.message);
            setErrorMessage("Ha ocurrido un error al crear el apartamento. Por favor, inténtelo de nuevo."); // Establecer el mensaje de error
        }
        finally {
            setIsCreating(true); // Habilitar el botón de creación nuevamente
        }

    };

    console.log(aparmentId)

    // Formulario para LEGAL DOC




    return (
        <>
            <NavBar></NavBar>
            <div className="container">
                <div className="crear-apartamento row mt-5 mb-5 bg-warning mx-0 p-5">
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
                                className="form-control"
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                                readOnly
                                disabled
                            />
                        </div>

                        <div className="col-12 text-center">
                            <button type="submit" className="btn btn-secondary" disabled={isCreating}>
                                {isCreating ? "Apartamento Creado" : "Crear Apartamento"}
                            </button>
                        </div>
                    </form>
                    {successMessage && (
                        <div className="alert alert-success mt-3">{successMessage}</div>
                    )}
                    {errorMessage && (
                        <div className="alert alert-danger mt-3">{errorMessage}</div> // Mostrar el mensaje de error
                    )}
                </div>
                <div className="crear-legaldoc row mt-5 mb-5 bg-primary mx-0 p-5">
                    <h2>Sube un documento que verifique que has vivido en el piso</h2>
                    <form onSubmit={handleCreateLegalDoc} className="row g-3">
                        <div className="col-md-12">
                            <div className="input-group">
                                <label className="form-label">Documento</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    value={document}
                                    onChange={(e) => setDocument(e.target.value)}
                                />

                                <button type="submit" className="btn btn-secondary" disabled={isCreatingLegalDoc}>
                                    {isCreatingLegalDoc ? "Archivo subido" : "Subir archivo"}
                                </button>
                            </div>
                            <div className="col-12 text-center">

                            </div>
                        </div>
                    </form>
                    {successMessageLegalDoc && (
                        <div className="alert alert-success mt-3">{successMessageLegalDoc}</div>
                    )}
                    {errorMessageLegalDoc && (
                        <div className="alert alert-danger mt-3">{errorMessageLegalDoc}</div> // Mostrar el mensaje de error
                    )}
                </div>
                <div className="crear-review row mt-5 mb-5 bg-light mx-0 p-5">
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
                                className="form-control"
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                                readOnly
                                disabled
                            />
                        </div>

                        <div className="col-12 text-center">
                            <button type="submit" className="btn btn-secondary" disabled={isCreating}>
                                {isCreating ? "Apartamento Creado" : "Crear Apartamento"}
                            </button>
                        </div>
                    </form>
                    {successMessage && (
                        <div className="alert alert-success mt-3">{successMessage}</div>
                    )}
                    {errorMessage && (
                        <div className="alert alert-danger mt-3">{errorMessage}</div> // Mostrar el mensaje de error
                    )}
                </div>
            </div>
            <Footer></Footer>

        </>
    )
}

export default CreateApartmentReview