function same(arr1, arr2) {
    //check length - done
    //check total individual items available
    //check counts of individual items
    
   if(arr1.length !== arr2.length) {
       return false
   }
   
   let frequencyCounter1= {}
   let frequencyCounter2= {}
   
   for(let val of arr1) {
       frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
   }
   for(let val of arr2) {
       frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1 
   }
   
   for(let keys in frequencyCounter1) {
      if(!(keys ** 2 in frequencyCounter2)) {
          return false
      }
      if(frequencyCounter2[keys ** 2] !== frequencyCounter1[keys]) {
        return false
    }
   }
   return true
}

console.log(same([ 2, 2, 5, 4], [ 4, 16, 4, 25]))