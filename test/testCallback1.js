const passedResult = require("../callback1");

const cb = (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
};
let id1 = "mcu453ed";
let id2 = "abc122dc";
passedResult(id1, cb);
passedResult(id2, cb);
