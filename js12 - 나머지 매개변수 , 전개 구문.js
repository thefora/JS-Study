// JS에서 인수 전달할 때 개수 제한이 없다 인수가 필요한데 하나도 안주면 undefined가 반환
// aguments 함수로 넘어 온 모든 인수에 접근 가능, 함수 내에서 이용 가능한 지역 변수 length / index 접근 가능, Array 형태의 객체, 배열의 내장 메소드 없음(forEach, map)
function showName(name){
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
}

showName('Joy', 'Ash');

// ES6이상이면 나머지 매개변수 사용 권장
function showName2(...names){ // 아무것도 전달하지 않으면 undefined가 아니라 빈배열 반환, 나머지 매개변수는 항상 마지막에 있어야함
    console.log(names);
}

showName2(); // []
showName2('Joy'); // ['Joy']
showName2('Joy, Ash'); // ['Joy', 'Ash']
console.log("");

function add(...numbers) {
    let result = 0;
    numbers.forEach((num) => (result += num));
    let result2 = numbers.reduce((prev, cur) => prev + cur);
    console.log(result);
    console.log(result2);
}

add(1, 2, 3);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log("");

function User(name, age, ...skills){
    this.name = name;
    this.age = age;
    this.skill = skills
}

const user1 = new User('Mike', 30, 'html', 'css');
const user2 = new User('Joy', 26, 'JS', 'html', 'css', 'react');
const user3 = new User('Ash', 27, 'Django', 'MySql');

console.log(user1);
console.log(user2);
console.log(user3);
console.log("");

// 전개 구문 : 배열
let arr1 = [1,2,3];
let arr2 = [4,5,6];

result = [...arr1, ...arr2]; // ...arr1 => arr1을 풀어 쓴 것
result2 = [0, ...arr1, 200, ...arr2, 400]; // 중간에 작성도 가능 전개구문을 사용하면 배열 요소 추가/삭제/병합 등이 쉽다

console.log(result) // [1,2,3,4,5,6]
console.log(result2); // [0, 1, 2, 3, 200, 4, 5, 6, 400]
console.log("");

// 전개 구문 : 객체
let user = {name: 'Mike', gender: 'male'};
let mike = {...user, age:30};

console.log(mike); // {name: 'Mike', gender: 'male', age:30}
console.log("");

user = { name: "Mike" };
info = { age: 30 };
fe = ["JS", "React"];
lang = ["Korean", "English"];

user = {
    ...user,
    ...info,
    skills : [
        ...fe,
        ...lang
    ]
}

console.log(user);
