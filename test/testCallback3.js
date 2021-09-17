const iresult = require("../callback3");

let id1 = "qwsa221";

iresult(id1)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
