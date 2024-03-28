
function validAnagram(str1, str2) {
   /**  
        1. Split str1 and str2 in arrays - done
        2. Check length - done
        3. Create 2 freqCounter of both string
            a. {
                t: 2,
                e: 1,
                s: 1
            }
        4. match keys
        5. match values of keys
    */
            
        let str1Arr=str1.split("")
        let str2Arr=str2.split("")
        if (str1Arr.length !== str2Arr.length) {
            return false
        }
        
        let frequencyCounter1 = {}
        let frequencyCounter2 = {}

        for(let val of str1Arr) {
            frequencyCounter1[val] = ((frequencyCounter1[val] || 0) + 1)
        }
        for(let val of str2Arr) {
            frequencyCounter2[val] = ((frequencyCounter2[val] || 0) + 1)
        }
        for(let keys in frequencyCounter1) {
            
            if (!(keys in frequencyCounter2)) {
              return false
            } 
            if (frequencyCounter1[keys] !== frequencyCounter2[keys]) {
                return false
            }
        }
        return true
}


console.log(validAnagram("test", "sett"))