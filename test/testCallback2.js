const iresult = require("../callback2");

let id1 = "mcu453ed";

iresult(id1)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
