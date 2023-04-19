const fs = require('fs');
const fileName = process.argv[2];
const data = fs.readFileSync(fileName, 'utf8');
const dataArray = data.split(/[ ,\r\n]+/).map(Number);

console.log(dataArray);
let k = 17;


// 1er exercice

function sum1(dataArray) {
  for (let i = 0; i < dataArray.length; i++) {
    for (let j = 0; j < dataArray.length; j++) {
      if (j != i && dataArray[j] + dataArray[i] == k) {
        return true;
      }
    }
  }
  return false;
}

console.log(sum1(dataArray));


// 2e exercice

function sum2(dataArray) {
  for (let i = 0; i < dataArray.length; i++) {
    if (dataArray.includes(k - dataArray[i])) { return true };
  }
  return false;
}

console.log(sum2(dataArray));


// 3e exercice

function sum3(dataArray, k) {
  if (dataArray.length <= 1) {
    return false;
  }
  if (dataArray.slice(1).includes(k - dataArray[0])) {
    return true;
  } else {
    return sum3(dataArray.slice(1), k);
  }
}

console.log(sum3(dataArray, k));