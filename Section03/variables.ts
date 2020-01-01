// Type annotations
// 해당 변수가 어떤 타입을 참조한다고 명시 하기위해 (개발자가) 추가하는 코드

// Type inference
// 변수가 어떤 타입을 참조하는지 속성으로 추론하는 것

// [:number] is Type annotation.
const apples: number = 5;

// Compile Error
// const apples2: number = false;
// apples = '12345';

let speed: string = 'fast';
let hasName: boolean = true;

// null, undefined 타입으로도 지정 가능
let nothingMuch: null = null;
let nothing: undefined = undefined;

// 빌트인 객체(javaScript 내장 객체)로도 지정할 수 있음
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4, 5];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
// car는 clss Car의 인스턴스
let car: Car = new Car();

//Object literal
// 직접 오브젝트 내부 요소의 타입을 지정할 수 있다.
let point: {
  x: number;
  y: number;
} = {
  x: 10,
  y: 20
};

// Function
// 함수가 받는 매개변수의 타입과 반환값의 타입을 지정할 수 있다.
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
