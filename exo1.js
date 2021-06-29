const formatPrice = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " £";
};

const transform = input => {
  let output = {};

  input.forEach(item => {
    output[item[0]] = item.slice(1);
  });

  console.log(output);

  return output;
};

// Demo
/*
const input = [
  ["key1", 1, 2, 3, 4],
  ["key2", 4, 5, 6, 7],
];

console.log(transform(input));
*/
const transformAdvanced = input => {
  let output = [];

  let filteredInput = input.filter(item => item.price !== undefined);

  filteredInput.forEach(item => {
    entry = {};
    entry.basePrice = formatPrice(item.price);
    entry.descriptiton = item.king;
    if (item.savingsType === "total") {
      entry.price = formatPrice(item.price - item.savings);
      entry.title = "Flat voucher";
      entry.descriptiton = `You are saving ${item.savings} £ related to the initial price`;
      entry.savings = formatPrice(item.savings);
    } else {
      let priceAfterSaving = item.price - (item.price * item.savings) / 100;
      entry.price = formatPrice(priceAfterSaving);
      entry.title = "Sales";
      entry.savings = `${item.savings} %`;
      entry.descriptiton = `You are saving ${
        item.price - priceAfterSaving
      } £ related to the initial price`;
    }

    output.push(entry);
  });

  return output;
};

// Demo

const input2 = [
  {price: 3000, kind: "reductionVoucher", savings: 300, savingsType: "total"},
  {price: undefined, kind: "sales", savings: 10, savingsType: "percent"},
  {price: 3000, kind: "sales", savings: 15, savingsType: "percent"},
];

console.log(transformAdvanced(input2));

exports.transform = transform;
exports.transformAdvanced = transformAdvanced;
