const faker = require("faker");

const groupBy = key => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue["Citizen of " + value] = (
      objectsByKeyValue[value] || []
    ).concat(obj);
    return objectsByKeyValue;
  }, {});

const generateRandomNumberOfPerson = () => {
  const number = Math.floor(Math.random() * (10 - 1)) + 1;

  let persons = [];

  for (let i = 0; i < number; i++) {
    let person = {};
    person.name = faker.name.findName();
    person.country = faker.address.country();
    persons.push(person);
  }
  console.log(persons);

  return persons;
};

const displayNamesInsideCountry = () => {
  let persons = generateRandomNumberOfPerson();
  const grouped = groupBy("country");
  let result = grouped(persons);
  return result;
};

// Demo

//console.log(generateRandomNumberOfPerson());
//console.log(displayNamesInsideCountry());

exports.generateRandomNumberOfPerson = generateRandomNumberOfPerson;
exports.displayNamesInsideCountry = displayNamesInsideCountry;
