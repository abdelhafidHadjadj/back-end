const { cloudinary } = require("./cloudinary");
const Image = require("./imageSchema");

async function getImagesForWebsitePages(path) {
  const { resources } = await cloudinary.search
    .expression(`folder:${path}`)
    .sort_by("public_id", "desc")
    .max_results(30)
    .execute();

  const publicIds = resources.map((file) => file.public_id);
  return publicIds;
}

function uploadInDb(input) {
  return Image.create(input);
}
module.exports = {
  getImagesForWebsitePages,

  uploadInDb,
};
