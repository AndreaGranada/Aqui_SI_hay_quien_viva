import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getApartmentById, updateApartment } from '../../services/apartment.service';
import MenuAdmin from '../../components/MenuAdmin/MenuAdmin';

function AdminApartmentEdit() {
    const { id } = useParams();
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApartment = async () => {
            try {
                const token = localStorage.getItem('token');
                const apartmentData = await getApartmentById(token, id);
                setFormData(apartmentData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching apartment:', error);
            }
        };
        fetchApartment();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await updateApartment(token, id, formData);
            // Handle success, maybe redirect to another page
        } catch (error) {
            console.error('Error updating apartment:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        
        <div className="container-fluid row">
            <MenuAdmin></MenuAdmin>

            <main className="name col ms-5 mt-5 mb-5">
                <h2>Edit Apartment</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Road Name:
                        <input type="text" name="roadName" value={formData.roadName || ''} onChange={handleChange} />
                    </label>
                    {/* Add more input fields for other apartment properties */}
                    <button type="submit">Save</button>
                </form>
            </main>
            </div>
        
    );
}


export default AdminApartmentEdit;