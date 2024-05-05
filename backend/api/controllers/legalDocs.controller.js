const cloudinary = require('../../Cloudinary/index.cloudinary');
const LegalDoc = require("../models/legalDoc.model");
const Review = require("../models/review.model");

// Create legalDoc Admin y user

const createLegalDoc = async (req, res) => {
  try {
    const legalDoc = await LegalDoc.create({
      document: req.body.document,
      attributes: {
        exclude: ["status"],
      },
    });
    delete req.body.status;
    const uploadImage = await cloudinary.uploader.upload(
      legalDoc.document,
      {
        upload_preset: "aquisi_unsigned",
        public_id: `document`,
        allowed_formasts: [
          "png",
          "jpg",
          "jpeg",
          "svg",
          "ico",
          "jfif",
          "webp",
          "pdf",
        ],
      },

    );
    legalDoc.document = uploadImage.secure_url;
    await legalDoc.save();

    console.log(uploadImage)
    return res.status(200).json({legalDoc, uploadImage});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong", error});
  }
};


// Gel All LegalDocs - Admin
const getAllLegalDocs = async (req, res) => {
  try {
    const docs = await LegalDoc.findAll({});
    return res
      .status(200)
      .json({ message: "Here are all the legal docs", docs });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// Gel One LegalDoc - Admin
async function getOneLegalDoc(req, res) {
  try {
    const legalDoc = await LegalDoc.findByPk(req.params.legalDocId);
    if (legalDoc) {
      return res.status(200).json(legalDoc);
    } else {
      return res.status(404).send("Legal Doc not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

//updateLegalDoc - Admin

async function updateLegalDoc(req, res) {
  try {
    const [rowCount] = await LegalDoc.update(req.body, {
      where: {
        id: req.params.legalDocId,
      },
    });

    if (rowCount > 0) {
      const updatedLegalDoc = await LegalDoc.findByPk(req.params.legalDocId);

      if (updatedLegalDoc.status === "aceptado") {
        const findReviews = await Review.findAll({
          where: {
            legalDocId: req.params.legalDocId,
          },
        });

        await Promise.all(
          findReviews.map(async (review) => {
            await review.update({ postedStatus: "yes" });
          })
        );
      }

      console.log(updatedLegalDoc);
      return res
        .status(200)
        .json({ message: "Legal Doc updated", legalDoc: updatedLegalDoc });
    } else {
      return res.status(404).send("Legal doc not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

// Método para eliminar un LegalDoc y su Review asociada
const deleteLegalDoc = async (req, res) => {
  const legalDocId = req.params.legalDocId;

  try {
    // Buscar el LegalDoc por su id
    const legalDoc = await LegalDoc.findByPk(legalDocId);

    if (!legalDoc) {
      return res.status(404).json({ message: "LegalDoc not found" });
    }

    // Buscar la Review asociada al LegalDoc y eliminarla
    const review = await Review.findOne({ where: { legalDocId } });
    if (review) {
      await review.destroy();
    }

    // Eliminar el LegalDoc
    await legalDoc.destroy();

    return res
      .status(200)
      .json({ message: "LegalDoc and associated Review deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

//Usuario obtiene la LegalDoc asociada a su review
async function getUserLegalDoc(req, res) {
  try {
    const userId = res.locals.user.id;
    const reviewId = req.params.reviewId;

    const userReview = await Review.findOne({
      where: { id: reviewId, userId },
    });

    if (!userReview) {
      return res.status(404).send("User review not found");
    }

    const legalDocId = userReview.legalDocId;

    const userLegalDoc = await LegalDoc.findByPk(legalDocId);

    if (!userLegalDoc) {
      return res.status(404).send("Legal document not found");
    }

    return res.status(200).json(userLegalDoc);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getAllLegalDocs,
  createLegalDoc,
  getOneLegalDoc,
  updateLegalDoc,
  deleteLegalDoc,
  getUserLegalDoc,
};
