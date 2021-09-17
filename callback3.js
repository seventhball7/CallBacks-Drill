const fs = require("fs");

const callback3 = (id, callback) => {
  if (typeof id == undefined || typeof callback == undefined) {
    console.log("invalid input");
  } else {
    setTimeout(() => {
      fs.readFile("../JSONData/cards.json", "utf-8", (err, data) => {
        if (err) {
          callback(err);
        } else {
          let parsedData = JSON.parse(data);
          let result = [];
          if (typeof id == "object") {
            id.forEach((element) => {
              if (element in parsedData) {
                result.push(parsedData[element]);
              } 
            });
          } else {
            if (id in parsedData) {
              result = parsedData[id];
            } else {
              result = [];
            }
          }
          callback(err, result);
        }
      });
    }, 2000);
  }
};
module.exports = callback3;
