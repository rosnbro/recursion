console.log(mergeSort([4,7,2,9,8,6,1,3,5]));

function mergeSort(arr) {
  if (arr.length == 1) return arr;

  const hill = Math.floor(arr.length / 2);
  const jack = arr.slice(0, hill);
  const jill = arr.slice(hill);

  return merge(mergeSort(jack), mergeSort(jill));
}

function merge(jack, jill) {
  const newArr = [];
  let i = 0;
  let j = 0;

  while (i < jack.length && j < jill.length) {
    if (jack[i] < jill[j]) {
      newArr.push(jack[i]);
      i++;
    } else {
      newArr.push(jill[j]);
      j++;
    }
  }
  while (i < jack.length) {
    newArr.push(jack[i]);
    i++;
  }
  while (j < jill.length) {
    newArr.push(jill[j]);
    j++;
  }

  return newArr;
}