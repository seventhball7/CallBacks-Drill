const iresult = require("../callback2");

function cb(err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
}
let id1 = "mcu453ed";
let id2 = "abc122dc";
iresult(id1, cb);
iresult(id2, cb);
