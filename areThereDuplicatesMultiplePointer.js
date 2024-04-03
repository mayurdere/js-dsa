{/*  

Frequency Counter Solution

function areThereDuplicates(...data) {
    let freqCounter = {}
    for(let val of data) {
        freqCounter[val] = (freqCounter[val] || 0) + 1
        if (freqCounter[val] > 1) {
            return true
        }
        
    }
    return false
    
}
*/}

{/*

Multiple Pointer Solution

*/}

function areThereDuplicates(...args) {
    args.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });

      let start = 0;
      let next = 1;
      while (next < args.length) {
        if (args[start] === args[next]) {
          return true;
        }
        start++;
        next++;
      }
      return false;
}
console.log(areThereDuplicates('a', 'b', 'c', 'a') )
