import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserLegalDoc } from '../../services/user.service';
import "./UserLegalDocs.css"

function UserLegalDocs() {
  const { reviewId } = useParams(); // Obtener el reviewId de los parámetros de la URL
  const [legalDocData, setLegalDocData] = useState(null); // Estado para almacenar los detalles del documento legal

  useEffect(() => {
    const token = localStorage.getItem('token'); // Obtener el token de autenticación del localStorage

    const fetchLegalDocData = async () => {
      try {
        const data = await getUserLegalDoc(reviewId, token); // Obtener los detalles del documento legal
        setLegalDocData(data);
      } catch (error) {
        console.error('Error al obtener los detalles del documento legal:', error);
      }
    };

    fetchLegalDocData(); 
  }, [reviewId]);

  return (
    <div className="container">
      {legalDocData && (
        <div>
          <h2>Documento Legal asociado a la reseña {reviewId}</h2>
          <div className='imagen-doc'>
            <img
              src={legalDocData.document}
              alt="Imagen del documento legal"
              className="img-thumbnail" // Clase Bootstrap para reducir el tamaño de la imagen
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default UserLegalDocs;
