const estateController = require("./estateController");
async function AddPropertyHandler(req, res) {
  const propertyDetaills = req.body;

  let list = req.files;

  let array = [];
  list.filter((el) => {
    if (el.path != undefined) {
      console.log("success");
      array.push(el.path);
      return array;
    } else {
      console.log("error");
    }
  });
  console.log(array);
  let body = { ...propertyDetaills, photos: array };
  console.log(body);

  await estateController
    .AddProperty(body)
    .then((data) => {
      res.send(data);
      console.log("Property added");
    })
    .catch((err) => {
      console.log(err);
      res.status(404);
      res.send({ message: "Something is wrong" });
    });
}
function GetAllPropertiesHandler(req, res) {
  estateController
    .GetProperties()
    .then(async (data) => {
      await res.send(data);
      console.log("Get Data with success");
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Not found" });
      res.status(404);
    });
}

function GetPropertyHandler(req, res) {
  const { propertyId } = req.params;
  estateController
    .GetPropertyId(propertyId)
    .then((data) => {
      res.send(data);

      console.log("Get property with Id");
    })
    .catch((err) => console.log(err));
}

function DeletePropertyHandler(req, res) {
  const { propertyId } = req.params;
  console.log(propertyId);
  estateController
    .DeleteProperty(propertyId)
    .then((data) => {
      res.send(data);
      console.log(`property ${propertyId} deleted`);
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Not found" });
      res.status(404);
    });
}
function UpdatePropertyHandler(req, res) {
  const { propertyId } = req.params;
  const propertyInput = req.body;

  let list = req.files;

  let array = [];
  if (list != "") {
    console.log(list);

    list.filter((el) => {
      if (el.path != undefined) {
        console.log("success");
        array.push(el.path);
        return array;
      } else {
        console.log("error");
      }
    });
    console.log(array);
  }
  let body = {};
  if (list != "") {
    body = { ...propertyInput, photos: array };
  } else {
    body = { ...propertyInput };
  }
  console.log(body);

  estateController
    .UpdateProperty(propertyId, body)
    .then((data) => {
      res.send(data);
      res.status(201);
      console.log("property Updating");
    })
    .catch((err) => {
      console.log(err);
      res.status(404);
      res.send({ message: "Not Found :( 404" });
    });
}

function UpdatePropertyAvailable(req, res) {
  const { propertyId } = req.params;
  const available = req.body;

  estateController
    .UpdateProperty(propertyId, available)
    .then((data) => {
      res.send(data);
      console.log(data);
      console.log("updating ");
      res.status(201);
    })
    .catch((err) => {
      console.log(err);
      res.status(404);
      res.send({ message: "Not Found :( 404" });
    });
}

module.exports = {
  AddPropertyHandler,
  GetAllPropertiesHandler,
  DeletePropertyHandler,
  UpdatePropertyHandler,
  GetPropertyHandler,
  UpdatePropertyAvailable,
};
