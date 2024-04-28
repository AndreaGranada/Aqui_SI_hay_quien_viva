const LegalDoc = require('../models/legalDoc.model')
const Review = require('../models/review.model');


// Create legalDoc Admin y user
const createLegalDoc = async (req, res) => {
  try {
    const legalDoc = await LegalDoc.create({
      document: req.body.document,
      attributes: {
        exclude: ["status"],
      }
    });
    delete req.body.status;
    return res.status(200).json(legalDoc);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// Gel All LegalDocs - Admin
const getAllLegalDocs = async (req, res) => {
    try {
      const docs = await LegalDoc.findAll({
      });
      return res.status(200).json({message: "Here are all the legal docs", docs});
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

//Update LegalDoc (admin)

async function updateLegalDoc(req, res) {
	try {
		const legalDoc = await LegalDoc.update(req.body, {
			returning: true,
			where: {
				id: req.params.legalDocId,
			},
		})
		if (legalDoc !== 0) {
			return res.status(200).json({ message: 'Legal Docs updated', legalDoc })
		} else {
			return res.status(404).send('Legal doc not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}
/*
// Delete one legal Doc - Admin
const deleteLegalDoc = async (req, res) => {
  try {
    const legalDoc = await LegalDoc.destroy({
      where: {
        id: req.params.legalDocId,
      },
    });
    if (legalDoc > 0) {
      return res.status(200).json("LegalDoc deleted");
    } else {
      return res.status(404).send("LegalDoc not found");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
*/

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

    return res.status(200).json({ message: "LegalDoc and associated Review deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

  module.exports ={
    getAllLegalDocs,
    createLegalDoc,
    getOneLegalDoc,
    updateLegalDoc,
    deleteLegalDoc
  }