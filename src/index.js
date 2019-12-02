const sharp = require("sharp");
const path = require("path");

sharp(path.resolve(__dirname, "input.jpg"))
  .resize(300, 200)
  .toFile(path.resolve(__dirname, "output.jpg"), function(err) {
    console.error(err);
  });
