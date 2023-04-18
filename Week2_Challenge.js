//Week 2 Coding Challenge
//Find the Smallest and Biggest Numbers


function minMax(arr) {
    let newArr = [];
    newArr.push(Math.min(...arr));
    newArr.push(Math.max(...arr));
    
    return newArr;
}

testArr1 = [1, 2, 3, 4, 5];
testArr2 = [2334454, 5];
testArr3 = [1];

console.log(minMax(testArr1));
console.log(minMax(testArr2));
console.log(minMax(testArr3));
