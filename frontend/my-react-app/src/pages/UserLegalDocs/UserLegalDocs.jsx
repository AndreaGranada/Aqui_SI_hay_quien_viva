import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserLegalDoc } from '../../services/user.service';
import "./UserLegalDocs.css"

function UserLegalDocs() {
  const { reviewId } = useParams(); // Obtener el reviewId de los parámetros de la URL
  const [legalDocData, setLegalDocData] = useState(null); // Estado para almacenar los detalles del documento legal
  const [fullscreen, setFullscreen] = useState(false); // Estado para controlar la vista de pantalla completa

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

  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  return (
    <div className="container">
      {legalDocData && (
        <div>
          <h2>Documento Legal asociado a la reseña {reviewId}</h2>
          <div className='imagen-doc' onClick={toggleFullscreen}>
            <img
              src={legalDocData.document}
              alt="Imagen del documento legal"
              className={`img-thumbnail ${fullscreen ? 'fullscreen' : ''}`}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default UserLegalDocs;