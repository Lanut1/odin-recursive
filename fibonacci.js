function fibs(fibNumber) {
  if (fibNumber <= 0) return [];
  if (fibNumber === 1) return [0];

  const array = [0, 1];

  for (let i = 2; i < fibNumber; i++) {
    let c = array[i - 2] + array[i - 1];
    array.push(c);
  }

  return array;
}

function fibsRec(fibNumber) {
  if (fibNumber <= 0) return [];
  if (fibNumber === 1) return [0];
  if (fibNumber === 2) return [0, 1];

  const array = fibsRec(fibNumber - 1);
  let c = array[array.length - 2] + array[array.length - 1];
  array.push(c);
  return array;
}