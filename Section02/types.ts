// Type에 신경을 써야 하는 이유
// 타입스크립트 컴파일러가 형식에 맞지 않는 값을 사용해버리면 컴파일 에러를 내기 때문에
// 코드가 어떤 식으로 짜여 있는지 다른 엔지니어가 이해하기 쉽게 하기위해

const today = new Date();
today.getMonth();

// Compile Error!
// today.someMethod();

const person = {
  // 요소에 값을 집어넣으면 어떤 타입의 값인지 알아서 지정
  //const person: {
  //     age: number;
  // }
  age: 20
};

class Color {}

const red = new Color();
// 'Color' 형식에 'anything' 속성이 없습니다.
// red.anything;
