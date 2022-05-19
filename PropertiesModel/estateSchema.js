const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
  },

  estateName: {
    type: String,
  },
  estateType: {
    type: String,
    enum: ["Villa", "Apartment", "Office Space", "Commercials", "Residentails"],
  },
  city: {
    type: String,
  },
  adresse: {
    type: String,
  },
  floorSpace: {
    type: Number,
  },
  numberOfbalconies: {
    type: Number,
  },
  numberOfbathrooms: {
    type: Number,
  },
  numberOfbedrooms: {
    type: Number,
  },
  numberOfGarages: {
    type: Number,
  },
  estateDescription: {
    type: String,
  },
  estateStatus: {
    type: String,
    enum: ["available", "not available"],
  },
  dealType: {
    type: String,
    enum: ["buy", "sell", "rent"],
  },
  price: {
    type: Number,
  },
  photos: {
    type: String,
  },
  photos: [],
  contract: {
    type: Boolean,
    default: false,
  },
  addedDate: {
    type: Date,
    default: Date.now,
  },
});
PropertySchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
  },
});

const Property = mongoose.model("Property", PropertySchema);

module.exports = Property;
