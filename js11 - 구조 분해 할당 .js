// Destructuring assignment
// 구조 분해 할당 구문은 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식

// 배열 구조 분해
let [x, y] = [5, 3]
console.log(x); // 5
console.log(y); // 3
console.log("");

let users = ['Mike', 'Joy', 'Ash'];
let [user1, user2, user3] = users; // let user1 = users[0]; , let user2 = users[1];, let user3 = users[2]; 와 동일한 코드

console.log(user1);
console.log(user2);
console.log(user3);
console.log("");

// split()을 이용한 방법
let str = "Mike-Joy-Ash";
let [user4, user5, user6] = str.split('-');

console.log(user4);
console.log(user5);
console.log(user6);
console.log("");

let [a,b,c] = [1,2]; // c는 undefined
let [d=3, e=4, f=5] = [1,2]; // 기본 값 셋팅을 하면 값이 할당이 안될 경우 기본 값으로 설정됨

console.log(a); // 1
console.log(b); // 2
console.log(c); // undefined
console.log(d); // 1
console.log(e); // 2
console.log(f); // 5
console.log("");

let [user7, , user8] = ["Mike", "Tom", "Jane", "Tony"]; //
console.log(user7); // Mike
console.log(user8); // Jane
console.log("");

// 배열 구조 분해 바꿔치기, 임시변수가 필요 없다는 장점이 있음
a = 1;
b = 2;
console.log(a); // 1
console.log(b); // 2

[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1
console.log("");


// 객체 구조 분해
user = {name: 'Mike', age: 30};
// let {name, age} = user; // 이렇게 프로퍼티를 그대로 사용 가능
let {name: userName, age: userAge} = user; // 프로퍼티 이름을 변경, name => userName, age=> userAge
console.log(userName);
console.log(userAge);

// 기본값도 배열과 동일하게 사용 가능
let {name, age, gender = 'male'} = user;
console.log(name);
console.log(age);
console.log(gender);

