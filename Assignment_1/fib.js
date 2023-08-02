// function "fibs(n)" returns an array of numbers representing the fibonacci sequence using iteration
// n represents the length of the returned array

function fibs(n) {
    if (n < 1 || isNaN(n)) return "please select a value greater than 1"; // check for lengths less than 1 or NaN
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const arr = [0, 1];

    for (let i = 2; i < n; i++) {
        arr.push(Number(arr.slice(-1)) + Number(arr.slice(-2, -1)));
    }
    return arr
}

// function "fibsRec(n)" returns array of numbers of fibonacci sequence using recursion
// n represents the length of the returned array

function fibsRec(n ,fibArr = [0, 1]) {
    if (n < 1 || isNaN(n)) return "please select a value greater than 1"; // check for lengths less than 1 or NaN
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    if (fibArr.length >= n) return fibArr;
    return fibsRec(n, [...fibArr, (Number(fibArr.slice(-1)) + Number(fibArr.slice(-2, -1))) ])
}


console.log(fibs(0)) // returns "please select a value greater than 1"
console.log(fibs(8)) // returns [0, 1, 1, 2, 3, 5, 8, 13]

console.log(fibsRec(0)) // returns "please select a value greater than 1"
console.log(fibsRec(6)) // returns [0, 1, 1, 2, 3, 5]



