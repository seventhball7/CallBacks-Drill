const callback1 = require("./callback1");
const callback2 = require("./callback2");
const callback3 = require("./callback3");

const promise1 = (thanosID) => {
  callback1(thanosID)
    .then((data) => {
      console.log(data);
      return callback2(data[0].id);
    })
    .then((listData) => {
      console.log(listData);
      let listId = listData
        .filter((value) => {
          return value.name;
        })
        .map((value) => {
          return value.id;
        });
      console.log(listId);
      return callback3(listId);
    })
    .then((cardData) => {
      console.log(cardData);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = promise1;
