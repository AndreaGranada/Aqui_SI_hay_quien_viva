const User = require("../api/models/user.model");
const Apartment = require("../api/models/apartment.model");
const Review = require("../api/models/review.model");
const LegalDoc = require("../api/models/legalDoc.model");
const District = require("../api/models/district.model");

function addRelationsToModels() {
  try {
    //ONE TO ONE - Apartment - district

    District.hasOne(Apartment, {
      onUpdate: "CASCADE",
    });

    Apartment.belongsTo(District, {
      onUpdate: "CASCADE",
    });

    //ONE TO ONE - Review - LegalDoc

    LegalDoc.hasOne(Review, {
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });

    Review.belongsTo(LegalDoc, {
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });

    //ONE TO MANY - Apartment - Review
    Apartment.hasMany(Review, {
      //foreignKey: "apartmentId",
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    });
    Review.belongsTo(Apartment, {
      //foreignKey: "apartmentId",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    //ONE TO MANY - User - Review
    User.hasMany(Review, {
        //foreignKey: "apartmentId",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      });
      Review.belongsTo(User, {
        //foreignKey: "apartmentId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      });


    
    
  } catch (error) {
    console.log(error);
  }
}

module.exports = { addRelationsToModels } ;
