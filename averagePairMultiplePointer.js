{/* 
    sliding window loop
    create temp arr where we push avg of all pairs
*/}
function averagePair(arr, avg){
    let start = 0;
      let next = 1;
      let avgOfPairs = {};
      let biggestAvg;
      while (next < arr.length) {
        if (arr[start] === arr[next]) {
          return true;
        }
        avgOfPairs[start] = (arr[start] + arr[next])/2
        start++;
        next++;
      }
      biggestAvg = avgOfPairs[0]
      for(let keys in avgOfPairs){
       if (biggestAvg < avgOfPairs[keys]) {
           biggestAvg = avgOfPairs[keys]
       } 
      }
      if (biggestAvg !== avg) {
          return false
      }
      return true
      
}

console.log(averagePair([1,2,3],2.5)) // true