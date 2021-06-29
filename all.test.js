const exo1 = require("./exo1");
const exo2 = require("./exo2");
const exo3 = require("./exo3");
const exo4 = require("./exo4");

test("transform to simple object", () => {
  let input = [
    ["key1", 1, 2, 3, 4],
    ["key2", 4, 5, 6, 7],
  ];
  let expected = {key1: [1, 2, 3, 4], key2: [4, 5, 6, 7]};
  expect(exo1.transform(input)).toEqual(expected);
});

test("transform complex object", () => {
  let input = [
    {price: 3000, kind: "reductionVoucher", savings: 300, savingsType: "total"},
    {price: undefined, kind: "sales", savings: 10, savingsType: "percent"},
    {price: 3000, kind: "sales", savings: 15, savingsType: "percent"},
  ];
  let expected = [
    {
      basePrice: "3 000 £",
      descriptiton: "You are saving 300 £ related to the initial price",
      price: "2 700 £",
      title: "Flat voucher",
      savings: "300 £",
    },
    {
      basePrice: "3 000 £",
      descriptiton: "You are saving 450 £ related to the initial price",
      price: "2 550 £",
      title: "Sales",
      savings: "15 %",
    },
  ];
  expect(exo1.transformAdvanced(input)).toEqual(expected);
});

test("generate random genealogical tree", () => {
  expect(exo2.generateRandomGenealogicalTree()).toHaveProperty("name");
});

test("display country", () => {
  const res = exo3.displayNamesInsideCountry();
  const checked = JSON.stringify(res).includes("Citizen");
  expect(checked).toBe(true);
});
