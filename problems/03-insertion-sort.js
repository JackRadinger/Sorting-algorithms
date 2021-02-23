// Implement Insertion Sort

function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    let num = arr[i];
    for(j = i - 1; j >= 0 && num < arr[j]; j--) {
      arr[j + 1] = arr[j]
      // console.log(arr, num)
    }
    arr[j + 1] = num;
    // console.log(arr, num)
  }
  return arr
}

module.exports = {
  insertionSort
};
