function sameFrequency(num1, num2) {
    let frqCounter1 = {}
    let frqCounter2 = {}
    let arr1 = num1.toString().split('')
    let arr2 = num2.toString().split('')

    for(let val of arr1) {
        frqCounter1[val] = (frqCounter1[val] || 0) + 1
    }
    for(let val of arr2) {
        frqCounter2[val] = (frqCounter2[val] || 0) + 1
    }
    for(let keys in frqCounter2) {
        if (!(keys in frqCounter1)) {
            return false
        } 
        if (frqCounter2[keys] !== frqCounter1[keys]) {
            return false
        } 
        return true
    }
    
}
console.log(sameFrequency(3589578, 5879385))