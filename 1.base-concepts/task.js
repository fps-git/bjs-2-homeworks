"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = (b ** 2) - (4 * a * c);
  if (d > 0) {
    arr[0] = (-b + Math.sqrt(d)) / (2 * a);
    arr[1] = (-b - Math.sqrt(d)) / (2 * a);
  } else {
    if (d === 0) {
      arr[0] = -b / (2 * a);
    }
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  contribution = Number(contribution);
  if (isNaN(contribution)) {
    return false;
  }

  amount = Number(amount);
  if (isNaN(amount)) {
    return false;
  }

  countMonths = Number(countMonths);
  if (isNaN(countMonths)) {
    return false;
  }

  let monthlyPercentage = Number(percent);
  if (isNaN(monthlyPercentage)) {
    return false;
  } else {
    monthlyPercentage = monthlyPercentage / 100 / 12;
  }

  let monthlyPayment = (amount - contribution) * (monthlyPercentage + (monthlyPercentage / (((1 + monthlyPercentage) ** countMonths) - 1)));
  let wholePayment = ((monthlyPayment * countMonths)).toFixed(2);
  return Number(wholePayment);
}