const estateController = require("./estateController");
async function AddPropertyHandler(req, res) {
  const propertyDetaills = req.body;
  console.log(propertyDetaills);
  console.log(req.files);
  let list = req.files;
  console.log(list);
  let array = [];
  list.filter((el) => {
    if (el.path != undefined) {
      console.log("success");
      console.log(el.path);
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
    .then((data) => {
      res.send(data);
      console.log("Get Data with success");
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Not found" });
      res.status(404);
    });
}

function DeletePropertyHandler(req, res) {
  const { propertyId } = req.params;
  console.log(propertyId);
  estateController
    .DeleteProperty(propertyId)
    .then((data) => {
      res.send(data);
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
  estateController
    .UpdateProperty(propertyId, propertyInput)
    .then((data) => {
      res.send(data);
      res.status(200);
    })
    .catch((err) => {
      console.log(err);
      res.status(404);
      res.send({ message: "Not Found (: 404" });
    });
}

module.exports = {
  AddPropertyHandler,
  GetAllPropertiesHandler,
  DeletePropertyHandler,
  UpdatePropertyHandler,
};
