
//Using frequency counter
//function countUniqueValues(arr) {
//{/* 
//1. create frqCounter and count individual vals
//2. loop the vals
//3. add all the vals

//*/}

//let frequencyCounter1= {}
//let result = 0
//for(let val of arr) {
//    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
//}
//console.log(frequencyCounter1, 'frequencyCounter1');
//for(let keys in frequencyCounter1) {
//    result++
//}
//console.log(result, 'result');
//}


//Using 2 pointers i and j
function countUniqueValues(arr) {
//         i
//  [1, 1, 1, 2, 3, 4]
//            j
    if (arr.length === 0) return 0
    let i = 0;
    for(j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
console.log(countUniqueValues([1, 1, 1, 2, 3, 4, 7, 7]))