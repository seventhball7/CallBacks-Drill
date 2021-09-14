const fs = require("fs");

const callback1 = (id, callback) => {
  if (callback == undefined || id == undefined) {
    console.log("rec  undefined");
  } else {
    setTimeout(() => {
      fs.readFile("../boards.json", "utf8", (err, data) => {
        if (err) {
          callback(err);
        } else {
          let parsedData = JSON.parse(data);

          const result = parsedData.filter((value) => {
            return value.id == id;
          });
          callback(err, result);
        }
      });
    }, 2000);
  }
};
module.exports = callback1;
