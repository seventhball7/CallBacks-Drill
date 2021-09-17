const passedResult = require("../callback1");

let id = "mcu453ed";

passedResult(id)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
