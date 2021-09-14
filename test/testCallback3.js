const iresult = require("../callback3");

function cb(err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
}
let id1 = "qwsa221";
let id2="jwkh245";
iresult(id1, cb);
iresult(id2,cb)
