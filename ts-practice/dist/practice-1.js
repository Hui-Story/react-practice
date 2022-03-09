"use strict";
/*
  let 과 const 를 사용하여 특정 값 선언 (기본 타입 지정)
*/
let count = 0; // 숫자
count += 1;
// count = "갑자기 분위기 문자열"; // 이러면 에러가 납니다!
const message = "hello world"; // 문자열
const done = true; // 불리언 값
const numbers = [1, 2, 3]; // 숫자 배열
const messages = ["hello", "world"]; // 문자열 배열
// messages.push(1); // 숫자 넣으려고 하면.. 안된다!
let mightBeUndefined = undefined; // string 일수도 있고 undefined 일수도 있음
let nullableNumber = null; // number 일수도 있고 null 일수도 있음
let color = "red"; // red, orange, yellow 중 하나임
color = "yellow";
// color = "green"; // 에러 발생!
