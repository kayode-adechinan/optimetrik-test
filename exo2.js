const faker = require("faker");
const util = require("util");

const generateChildren = () => {
  let array = [0, 1, 2];
  let index = Math.floor(Math.random() * array.length);
  let size = array[index];

  let output = [];

  console.log(size);

  if (size > 0) {
    for (let i = 0; i < size; i++) {
      output.push({
        name: faker.name.findName(),
        children: generateChildren(),
      });
    }
  }
  return output;
};

const generateRandomGenealogicalTree = () => {
  let output = {
    name: faker.name.findName(),
    children: generateChildren(),
  };

  return output;
};

// Demo
/*
const data = generateRandomGenealogicalTree();

console.log(util.inspect(data, {showHidden: false, depth: null}));
*/

exports.generateRandomGenealogicalTree = generateRandomGenealogicalTree;

// 2 We will a call stack size exceeded error because the base case of our recursive function  isn't being met
