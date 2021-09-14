const fs = require("fs");

const callback3 = (id, callback) => {
  if (typeof id == undefined || typeof callback == undefined) {
    console.log("invalid input");
  } else {
    setTimeout(() => {
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
          callback(err,result);
        }
      });
    }, 2000);
  }
};
module.exports = callback3;



// const cardInfo = (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       if (result.length == 0) {
//         console.log("undefined result");
//       } else {
//         console.log(result);
//       }
//     }
//   };
//   const listInfo = (error, result) => {
//     if (result == undefined) {
//       cardInfo("result undefined");
//     } else {
//       if (error) {
//         cardInfo(error);
//       } else {
//         console.log(result);
//         const id = result
//           .filter((value) => {
//             return value.name == "Thanos";
//           })
//           .map((value) => {
//             return value.id;
//           });
//         callback3(id, cardInfo);
//       }
//     }
//   };
//   const boardInfo = (err, result) => {
//     if (err) {
//       listInfo(err);
//     } else {
//       if (result.length == 0) {
//         listInfo("result undefined");
//       } else {
//         let id = result[0].id;
//         callback2(id, listInfo);
//       }
//     }
//   };
//   function callback4() {
//     let id = "mcu453ed";
//     callback1(id, boardInfo);
//   }