"use strict";
/*
  interface 를 통해 클래스가 아닌 일반 객체의 타입 지정
*/
const person = {
    name: "김사람",
    age: 20,
};
const expert = {
    name: "김개발",
    skills: ["javascript", "react"],
};
const people = [person, expert];
