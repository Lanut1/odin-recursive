function mergeSort(array) {
  if (array.length <= 1) return array;

  const middle = Math.floor(array.length / 2);
  const leftHalf = mergeSort(array.slice(0, middle));
  const rightHalf = mergeSort(array.slice(middle));

  return mergeWithIndices(leftHalf, rightHalf);
}

// Concise and readable, uses modern JavaScript features (ternary operator, spread syntax)
function mergeWithShift(left, right) {
  const mergedArray = [];

  while (left.length && right.length) {
    left[0] < right[0] ? mergedArray.push(left.shift()) : mergedArray.push(right.shift());
  }

  return [...mergedArray, ...left, ...right];
}

// More efficient, doesn't create unnecessary new arrays
function mergeWithIndices(left, right) {
  const mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }
  };

  while (leftIndex < left.length) {
    mergedArray.push(left[leftIndex]);
    leftIndex++;
  };

  while (rightIndex < right.length) {
    mergedArray.push(right[rightIndex]);
    rightIndex++;
  }

  return mergedArray;
}

const array = [25, 2, 5, 87, 100, 1, 3, 7]
console.log(mergeSort(array));