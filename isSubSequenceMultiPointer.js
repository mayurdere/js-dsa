function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
    str1 = str1.split('')
    str2 = str2.split('')
    
    //1. 2 array [a,b,c] [a,c,b]
    //2. if any char of  use multipointer loop on str2
    //3. if char found, continue the loop from that point
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
        console.log(str2[j] , str1[i], i, j);
        if (str2[j] === str1[i]) i++;
        console.log(i, str1.length);
        if (i === str1.length) return true;
        j++;
    }
    return false;


}


//console.log(isSubsequence('abc', 'acb')) //false
console.log(isSubsequence('sing', 'sting')) //true