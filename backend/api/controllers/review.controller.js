const Review = require("../models/review.model");
const LegalDoc = require("../models/legalDoc.model");
const Apartment = require("../models/apartment.model");

// Create a review - admin y user
const createReview = async (req, res) => {
  try {
    const idUser = res.locals.user.id;
    const currentDate = new Date();
    // Buscar el documento legal por su ID
    const legalDoc = await LegalDoc.findByPk(req.body.legalDocId);
    if (!legalDoc) {
      return res.status(404).json({ message: "Legal document not found" });
    }

    // Buscar el apartamento por su ID
    const apartment = await Apartment.findByPk(req.body.apartmentId);
    if (!apartment) {
      return res.status(404).json({ message: "Apartment not found" });
    }

    // Crear la revisión y establecer las relaciones con el usuario, el documento legal y el apartamento
    const review = await Review.create({
      title: req.body.title,
      content: req.body.content,
      media: req.body.media,
      datePost: currentDate,
      legalDocId: legalDoc.id, // Establecer la relación con el documento legal
      apartmentId: apartment.id, // Establecer la relación con el apartamento
      userId: idUser, // Establecer la relación con el usuario
    });

    return res
      .status(201)
      .json({ review, message: "Review created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// Gell all reviews - user y admin
const getAllReviews = async (req, res) => {
  try {
    const review = await Review.findAll();
    return res.status(200).json(review);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// Get One review id - admin
async function getOneReview(req, res) {
  try {
    const review = await Review.findByPk(req.params.reviewId);
    if (review) {
      return res.status(200).json(review);
    } else {
      return res.status(404).send("Review not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

// Get all apartmentId reviews - user y admin
const getAllApartmentReviews = async (req, res) => {
  try {
    const review = await Review.findAll({
      where: {
        apartmentId: req.params.apartmentId,
      },
    });
    return res.status(200).json(review);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// Get all userId reviews - user y admin
const getAllUserReviews = async (req, res) => {
  try {
    const review = await Review.findAll({
      where: {
        userId: req.params.userId,
      },
    });
    return res.status(200).json(review);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// Get owner user reviews

const getAllOwnerUserReviews = async (req, res) => {
  try {
    const idUser = res.locals.user.id;

    const review = await Review.findAll({
      where: {
        userId: idUser,
      },
    });
    return res.status(200).json(review);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

//El usuario puede eliminar una de sus reviews y la legal doc asociada se elimina también
const deleteOwnReview = async (req, res) => {
  try {
    const user = res.locals.user.id;
    const review = await Review.findOne({
      where: {
        id: req.params.reviewId,
        userId: user,
      },
    });

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    const legalDocId = review.legalDocId;
    await review.destroy();
    await LegalDoc.destroy({
      where: {
        id: legalDocId,
      },
    });

    return res.status(200).json({ message: "Review & legalDoc deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// Update one review - admin

const updateReview = async (req, res) => {
  try {
    const review = await Review.update(req.body, {
      returning: true,
      where: {
        id: req.params.reviewId,
      },
    });
    if (review !== 0) {
      return res.status(200).json({ message: "Review updated", review });
    } else {
      return res.status(404).send("Review not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Delete one review - admin
//ahora sí, si se elimina una review se elimina su legaldoc

const deleteReview = async (req, res) => {
    try {
      const review = await Review.findByPk(req.params.reviewId);
  
      if (!review) {
        return res.status(404).json({ message: "Review not found" });
      }
  
      const legalDocId = review.legalDocId;
  
      await Promise.all([
        review.destroy(),
        LegalDoc.destroy({
          where: {
            id: legalDocId,
          },
        }),
      ]);
  
      return res.status(200).json({ message: "Review & legalDoc deleted" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Something went wrong" });
    }
  };
  
// Mostrar como mucho dos reviews (las mas actuales) de un apartamento

const getTwoRecentApartmentReviews = async (req, res) => {
  try {
    const apartmentId = req.params.apartmentId;

    // Obtener las dos reviews más recientes asociadas al apartamento específico
    const reviews = await Review.findAll({
      where: {
        apartmentId: apartmentId,
      },
      order: [['datePost', 'DESC']], // Ordenar por fecha de publicación de forma descendente
      limit: 2, // Limitar a dos resultados
    });

    return res.status(200).json(reviews);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// Mostrar seis apartamentos con dos reviews como maximo
const getSixApartmentsWithReviews = async (req, res) => {
  try {
    // Obtener los seis apartamentos con las reviews más actuales
    const apartments = await Apartment.findAll({
      include: [{
        model: Review,
        order: [['datePost', 'DESC']], // Ordenar las reviews por fecha de publicación de forma descendente
        limit: 2, // Limitar a dos reviews
      }],
    });

    // Ordenar los apartamentos en base a la fecha de la última review asociada a cada apartamento
    apartments.sort((a, b) => {
      const dateA = a.Reviews && a.Reviews.length > 0 ? new Date(a.Reviews[0].datePost) : new Date(0);
      const dateB = b.Reviews && b.Reviews.length > 0 ? new Date(b.Reviews[0].datePost) : new Date(0);
      return dateB - dateA; // Orden descendente
    });

    // Limitar a seis resultados
    const sixApartments = apartments.slice(0, 6);

    return res.status(200).json(sixApartments);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  createReview,
  getAllReviews,
  getAllApartmentReviews,
  getAllUserReviews,
  getAllOwnerUserReviews,
  getOneReview,
  updateReview,
  deleteOwnReview,
  deleteReview,
  getTwoRecentApartmentReviews,
  getSixApartmentsWithReviews
};
