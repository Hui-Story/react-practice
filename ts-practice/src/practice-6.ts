/*
  Generics 을 사용하여 여러 종류의 타입에 대한 호환
*/

function merge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b,
  };
}

const merged = merge({ foo: 1 }, { bar: 1 });

function wrap<T>(param: T) {
  return {
    param,
  };
}

const wrapped = wrap(10);

// interface 에서 Generics 사용
interface Items<T> {
  list: T[];
}

const items: Items<string> = {
  list: ["a", "b", "c"],
};

// type 에서 Generics 사용
type Items2<T> = {
  list: T[];
};

const items2: Items2<string> = {
  list: ["a", "b", "c"],
};

// Class 에서 Generics 사용
class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
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
