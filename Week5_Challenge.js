//Create a function that calculates triangular numbers.
// EX. function(4) = 1+2+3+4 = 10

function addUp(num) {
    return (num*(num+1))/2;
}

//Test Cases
console.log(addUp(4)); //= 10
console.log(addUp(13)); //= 91
console.log(addUp(600)); // = 180300