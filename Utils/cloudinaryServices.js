const cloudinaryController = require("./cloudinaryController");

function getImagesHandler(req, res) {
  cloudinaryController
    .getImagesForWebsitePages("homePage")
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: err });
      res.status(404);
    });
}
async function uploadImagesHandler(req, res) {
  // const fileStr = req.body.data;
  // console.log(fileStr);
  // cloudinaryController
  //   .uploadImages("hafidh", fileStr)
  //   .then((data) => {
  //     res.send(data);
  //     console.log(data);
  //     console.log(data.public_id);
  //     res.status(201);
  //     console.log("Uploading with successed");
  //   })
  //   .catch((err) => {
  //     res.send({ message: "uploading failed" });
  //     res.status(404);
  //     console.log(err);
  //   });
  console.log(req.body);
  let url = req.file.path;
  console.log(url);

  let body = { ...req.body, imageURL: url };
  console.log(body);

  await cloudinaryController
    .uploadInDb(body)
    .then((newImage) => res.json(newImage))
    .catch((err) => console.log(err));
}

module.exports = { getImagesHandler, uploadImagesHandler };
