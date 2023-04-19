const fs = require('fs');
const fileName = process.argv[2];
const data = fs.readFileSync(fileName, 'utf8');
const dataArray = data.split(/[ ,\r\n]+/).map(Number);

console.log(dataArray);


// 1er exercice

let index1 = dataArray.length;

function buildings1(dataArray) {
  for (let i = 0; i < dataArray.length -1; i++) {
    for (let j = i+1; j < dataArray.length; j++) {
      if (dataArray[j] >= dataArray[i]) {
        index1--;
        break;
      }
    }
  }
  return index1;
}
console.log(buildings1(dataArray));


// 2e exercice

let index2 = 0;

function buildings2(dataArray) {
  let buildingsmax = 0;
  for (let i = dataArray.length - 1; i >= 0; i--) {
    if (dataArray[i] > buildingsmax) {
      buildingsmax = dataArray[i];
      index2++;
    }
  }
  return index2;
}

console.log(buildings2(dataArray));