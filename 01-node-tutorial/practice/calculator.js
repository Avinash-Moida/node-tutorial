function addValue(a, b) {
  return `The sum is ${a + b}`;
}

function subValue(a, b) {
  return `The diff is ${a - b}`;
}

function mulValue(a, b) {
  return `The product is ${a * b}`;
}

function divValue(a, b) {
  if (b === 0) {
    return "Division by zero is not allowed!";
  }
  return `The division is ${a / b}`;
}

// Export the functions
module.exports = {
  addValue,
  subValue,
  mulValue,
  divValue,
};
