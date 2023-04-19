const fs = require('fs');
const fileName = process.argv[2];
const data = fs.readFileSync(fileName, 'utf8');
const dataArray = data.split(/[ ,\r\n]+/).map(Number);

console.log(dataArray);

let index = 0;

function mergeSort(dataArray) {
  if (dataArray.length <= 1) {
    return dataArray;
  }
  const middle = Math.floor(dataArray.length / 2);
  const left = dataArray.slice(0, middle);
  const right = dataArray.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
      index++;
    } else {
      result.push(right[j]);
      j++;
      index++;
    }
  }
  
  result = result.concat(left.slice(i));
  result = result.concat(right.slice(j));
  
  return result;
}

const sortedArray = mergeSort(dataArray);
console.log(`Tri fusion: ${index} comparaisons - [${sortedArray}]`);