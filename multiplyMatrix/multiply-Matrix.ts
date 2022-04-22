"use strict";
export function multiplyMatrix(array: number[][]) {
  let oddInd = 1;
  let evenInd = 0;
  while (true) {
    while (evenInd < array.length && array[evenInd] % 2 == 0) {
      evenInd += 2;
    }
    while (oddInd < array.length && array[oddInd] % 2 == 1) {
      oddInd += 2;
    }
    if (evenInd < array.length && oddInd < array.length) {
      let temp;
      temp = array[evenInd];
      array[evenInd] = array[oddInd];
      array[oddInd] = temp;
    } else {
      break;
    }
  }
}
