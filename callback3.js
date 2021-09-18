const fs = require("fs");

const promise3 = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fs.readFile("../JSONData/cards.json", "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          let parsedData = JSON.parse(data);
          let result = [];
          //  console.log(typeof id);
          if (typeof id == "object") {
            // console.log(id)
            id.forEach((element) => {
              if (element in parsedData) {
                // console.log(element);
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
          resolve(result);
        }
      });
    }, 2000);
  });
};
module.exports = promise3;
