const fs = require("fs");

const callback3 = (id, callback) => {
  if (typeof id == undefined || typeof callback == undefined) {
    console.log("invalid input");
  } else {
    fs.readFile("../cards.json", "utf-8", (err, data) => {
      if (err) {
        callback(err);
      } else {
        let parsedData = JSON.parse(data);
        let result;
        if (id in parsedData) {
          result = parsedData[id];
        } else {
          result = [];
        }
        callback(null, result);
      }
    });
  }
};
module.exports = callback3;
