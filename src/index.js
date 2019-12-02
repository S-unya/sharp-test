const sharp = require("sharp");
const path = require("path");

console.log(
  "1. Most simple test, input and output are in the same location as the script - ",
  path.resolve(__dirname, "input.jpg")
);
sharp(path.resolve(__dirname, "input.jpg"))
  .resize(300, 200)
  .toFile(path.resolve(__dirname, "output.jpg"), function(err, info) {
    if (err) {
      console.error(err);
    }
    console.log("1. simple test complete: ", info);
  });

console.log(
  "2. Input and output are not colocated with script - ",
  path.resolve(__dirname, "../images/input.jpg")
);
sharp(path.resolve(__dirname, "../images/input.jpg"))
  .resize(300, 200)
  .toFile(path.resolve(__dirname, "../images/output-not-colo.jpg"), function(
    err,
    info
  ) {
    if (err) {
      console.error(err);
    }
    console.log("2. not colo complete. ", info);
  });
