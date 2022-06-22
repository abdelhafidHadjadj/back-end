const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  agentId: {
    type: mongoose.Types.ObjectId,
  },

  estateName: {
    type: String,
  },
  estateType: {
    type: String,
    enum: ["Villa", "Apartment", "Office Space", "Commercials", "Residentials"],
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
    enum: ["Buy", "Sell", "Rent"],
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
  coordination: [],
  addedDate: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
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
