const fs = require("fs");

const promise1 = (id) => {
  return new Promise((resolve, reject) => {
    fs.readFile("../JSONData/boards.json", "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        let parsedData = JSON.parse(data);
        const result = parsedData.filter((value) => {
          return value.id == id;
        });
        resolve(result);
      }
    });
  });
};

module.exports = promise1;
