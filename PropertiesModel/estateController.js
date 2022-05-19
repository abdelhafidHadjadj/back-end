const Property = require("./estateSchema");

function AddProperty(PropertyDetaills) {
  return Property.create(PropertyDetaills);
}

function GetProperties() {
  return Property.find();
}

function DeleteProperty(propertyId) {
  return Property.findByIdAndDelete(propertyId);
}
function UpdateProperty(propertyId, detaills) {
  return Property.findByIdAndUpdate({ _id: propertyId }, detaills);
}

module.exports = { AddProperty, GetProperties, DeleteProperty, UpdateProperty };
