/*
  Type Alias 를 사용하여 특정 타입에 별칭 붙이기
  (확장이 용이하지 않기 때문에 되도록 interface 를 사용)
*/

type Person2 = {
  name: string;
  age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
};

// & 는 Intersection 으로서 두개 이상의 타입들을 합쳐줍니다.
// 참고: https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types
type Developer2 = Person2 & {
  skills: string[];
};

const person2: Person2 = {
  name: "김사람",
};

const expert2: Developer2 = {
  name: "김개발",
  skills: ["javascript", "react"],
};

type People2 = Person2[]; // Person[] 를 이제 앞으로 People 이라는 타입으로 사용 할 수 있습니다.
const people2: People2 = [person2, expert2];

type Color2 = "red" | "orange" | "yellow";
const color2: Color2 = "red";
const colors2: Color2[] = ["red", "orange"];
