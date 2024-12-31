#!/usr/bin/env node
// first question
//  this function should return the array [0, 1, 1, 2, 3, 5, 8, 13]
function fibs(n) {
   if ( n == 0 ) return [];
   if ( n == 1 ) return [0];

   const result = [0, 1];
   for(let i=2; i < n ; i++){
    result.push(result[result.length - 1] + result[result.length - 2]);
   }
   return result;
}
console.log(fibs(8));

// second question
function fibsRec(n){
    console.log("This was printed recursively");
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [1];

    const sequence = fibsRec(n-1);
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    return sequence;
}

console.log(fibsRec(8)); 


// third question
function mergeSort(arr){
    if(arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    const sortLeft = mergeSort(left);
    const sortRight = mergeSort(right);

    return merge(sortLeft, sortRight);
}

function merge(left, right){
    const result = [];
    let i = 0;
    let j = 0;

    while(i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    while(i < left.length) {
        result.push(left[i]);
        i++;
    }

    while(j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}
const inputArray = [3, 2, 1, 13, 8, 5, 0, 1];
const inputArraySecond = [105, 79, 100, 110];

const SortedArray = mergeSort(inputArray);
const SortedArraySecond = mergeSort(inputArraySecond);
console.log(SortedArray);
console.log(SortedArraySecond);2