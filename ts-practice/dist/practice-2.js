"use strict";
/*
  함수에서 타입 정의 (내장함수 사용 시에도 타입 유추)
*/
function sum(x, y) {
    return x + y;
}
sum(1, 2);
function sumArray(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);
function returnNothing() {
    console.log("I am just saying hello world");
}
