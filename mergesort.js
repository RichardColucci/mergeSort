function makeRamdonNumsArray(sizeOfArray, low, high) {
    let newArray = [];
  
    for (let i = 0; i < sizeOfArray; i++) {
      const ramdonNum = Math.floor(Math.random() * (high - low + 1)) + low;
      newArray.push(ramdonNum);
    }
    return newArray;
  }

function split(array) {
    const midIdx = Math.floor(array.length / 2);
    const leftArray = array.slice(0, midIdx);
    const rightArray = array.slice(midIdx);

    return [leftArray, rightArray];
}
  
function merge(arr, arr1){
      if(arr>arr1){
          return [...arr1, ...arr]
      } else {
        return [...arr, ...arr1]
      }
  }

function mergeSort(array){
    if(array.length === 1){
        return array;
    }
    //destructuring the split split return value// cuz it returns 2 arrays
  let [left, right] = split(array)

  return merge(mergeSort(left), mergeSort(right))
}



// //not sure if this is headed in right direction
// //   function mergeSort(array){
// //       let left = []
// //       let right = []
// //     if(array.length === 1){
// //         return array
// //     } else {
// //         let splitArr = split(array)
// //         [left, right]  = [splitArr[0], splitArr[1]]
// //     }
// //   }

// function mergeSort(arr){
//   return merge(mergeSort(left)) + merge(mergeSort(right))
// }

