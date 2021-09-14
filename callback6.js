const callback1 = require("./callback1");
const callback2 = require("./callback2");
const callback3 = require("./callback3");

const callback6= (thanosID) => {
  callback1(thanosID, (err, boardData) => {
    if (err) {
      console.log(err);
    } else {
      //    console.log(data);
      let result = boardData
        .filter((value) => {
          return value.id == thanosID;
        })
        .map((value) => {
          return value.id;
        });
      console.log(result);
      callback2(result, (err, listData) => {
        if (err) {
          console.log(err);
        } else {
          console.log(listData);
          let listId = listData
            .filter((value) => {
              return value.name == "Mind";
            })
            .map((value) => {
              return value.id;
            });
          console.log(listId);
          callback3(listId, (err, cardResult) => {
            if (err) {
              console.log(err);
            } else {
              if (cardResult == undefined) {
                console.log("undefined result");
              } else {
                console.log(cardResult);
              }
            }
          });
        }
      });
    }
  });
};

module.exports = callback6;
