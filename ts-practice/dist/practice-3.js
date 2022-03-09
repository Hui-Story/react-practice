"use strict";
/*
  interface 를 통한 클래스, 객체 타입 지정
*/
class Circle {
    // `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시합니다.
    // radius: number; // 멤버 변수 radius 값을 설정합니다.
    // --- public 또는 private accessor 작성으로 변수 설정 생략 가능 ---
    // constructor(radius: number) {
    constructor(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    // 너비를 가져오는 함수를 구현합니다.
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    // width: number;
    // height: number;
    // constructor(width: number, height: number) {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);
console.log(circle.radius);
// console.log(rectangle.width); // private 조회 불가능
const shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach((shape) => {
    console.log(shape.getArea());
});
