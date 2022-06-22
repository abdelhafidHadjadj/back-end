// const cloudinaryController = require("./cloudinaryController");

// function getImagesHandler(req, res) {
//   cloudinaryController
//     .getImagesForWebsitePages("homePage")
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.send({ message: err });
//       res.status(404);
//     });
// }
// async function uploadImagesHandler(req, res) {
//   console.log("body image", req.body);
//   let url = req.file.path;
//   console.log(url);

//   let body = { ...req.body, imageURL: url };
//   console.log("body 2", body);

//   await cloudinaryController
//     .uploadInDb(body)
//     .then((newImage) => res.json(newImage))
//     .catch((err) => console.log(err));
// }

// module.exports = { getImagesHandler, uploadImagesHandler };
