"use strict";
/*
  Generics 을 사용하여 여러 종류의 타입에 대한 호환
*/
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged = merge({ foo: 1 }, { bar: 1 });
function wrap(param) {
    return {
        param,
    };
}
const wrapped = wrap(10);
const items = {
    list: ["a", "b", "c"],
};
const items2 = {
    list: ["a", "b", "c"],
};
// Class 에서 Generics 사용
class Queue {
    constructor() {
        this.list = [];
    }
    get length() {
        return this.list.length;
    }
    enqueue(item) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}
const queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
