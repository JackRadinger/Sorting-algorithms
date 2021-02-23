// Implement Merge Sort

function merge(array1, array2) {
  let newArr = []

  while(array1.length || array2.length) {
    let ele1 = array1.length ? array1[0] : Infinity;
    let ele2 = array2.length ? array2[0] : Infinity;

    let next;
    if(ele1 < ele2) {
      next = array1.shift()
      // console.log(array1)
      // newArr.push(num)
    } else {
      next = array2.shift()
      // console.log(array2)
      // newArr.push(num)
    }
    newArr.push(next)
  }
  // console.log(newArr)
  return newArr;
}

function mergeSort(array) {
  if(array.length <= 1){
    return array
  }

  let midIdx = Math.floor(array.length / 2)
  let left = array.slice(0,midIdx)
  let right = array.slice(midIdx)

  let left1 = mergeSort(left);
  let right1 = mergeSort(right);
  // console.log(left1, right1)
  return merge(left1,right1)
}

// console.log(mergeSort([ 2, -1, 3, 4, 7, 3 ]))

module.exports = {
  merge,
  mergeSort
};
