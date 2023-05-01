function FirstReverse(str) {
    arr = str.split(""); //Turn the parameter string into an array of characters
    reverseArr = [];
    for (let i=arr.length - 1; i > -1; i--){ //loop through the arr in reverse
        reverseArr.push(arr[i]); //Push the letters at index i into the reverseArr 
    }
    reverseStr = reverseArr.join(""); // Join the chars from reverseArr with nothing inbetween to create the reverse String

    return reverseStr;
}

//Tests
let test1 = "coderbyte";
let test2 = "I Love Code";

console.log(`Test 1:  ${FirstReverse(test1)}`);
console.log(`Test 2:  ${FirstReverse(test2)}`);



