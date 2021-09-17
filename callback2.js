const fs = require("fs");

const promise2=(id)=>{
  return new Promise((resolve,reject)=>{
    fs.readFile("../JSONData/lists.json", "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        let parsedData = JSON.parse(data);
        let result;
        if (id in parsedData) {
          result = parsedData[id];
        } else {
          result = [];
        }

        resolve(result);
      }
    });
  })
}
module.exports = promise2;
