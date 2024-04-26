const LegalDoc = require('../models/legalDoc.model')

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

  module.exports ={
    getAllLegalDocs
  }