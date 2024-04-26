const Review = require('../models/review.model');
const LegalDoc = require('../models/legalDoc.model');
const Apartment = require('../models/apartment.model');

const createReview = async (req, res) => {
    try {
        const idUser = res.locals.user.id;
        const currentDate = new Date()
        // Buscar el documento legal por su ID
        const legalDoc = await LegalDoc.findByPk(req.body.legalDocId);
        if (!legalDoc) {
            return res.status(404).json({ message: 'Legal document not found' });
        }

        // Buscar el apartamento por su ID
        const apartment = await Apartment.findByPk(req.body.apartmentId);
        if (!apartment) {
            return res.status(404).json({ message: 'Apartment not found' });
        }

        // Crear la revisión y establecer las relaciones con el usuario, el documento legal y el apartamento
        const review = await Review.create({
            title: req.body.title,
            content: req.body.content,
            media: req.body.media,
            datePost: currentDate,
            legalDocId: legalDoc.id, // Establecer la relación con el documento legal
            apartmentId: apartment.id, // Establecer la relación con el apartamento
            userId: idUser // Establecer la relación con el usuario
        });

        return res.status(201).json({ review, message: 'Review created successfully' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

module.exports = {
   createReview
  };
  