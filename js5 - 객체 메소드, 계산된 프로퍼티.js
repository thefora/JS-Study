// 계산된 프로퍼티, 객체를 선언할 때, 키에 문자열이나 계산식을 넣어도 키로써 작용함
let n = "name";
let a = "age";

const user = {
    [n] : "Mike",
    [a] : 30,
    [1 + 4] : 5,
};

console.log(user)


// 계산된 프로퍼티의 실용적 사용 : 어떤게 키로 될지 모를 때 유용함
function makeObj(key, val){
    return {
        [key] : val,
    }
}

const obj = makeObj("나이", 33);
const obj2 = makeObj("이름", "세현");
console.log(obj);
console.log(obj2);

// 객체의 복사
const user2 = {
    name : "Mike",
    age : 30,
};

// 단순 대입은 같은 객체를 참조 하기때문에 사용하면 안됨
// const user3 = user2;
// user2.name = "tom";
// console.log(user2);
// console.log(user3);

// 올바른 객체 복사, 첫번째 인자는 초기값, 초기값에 user 객체의 키,값을 추가, 같은 키가 있으면 덮어씀
const user3 = Object.assign({hobby : "computer"}, user2);
user3.name = "tom";
console.log(user2);
console.log(user3);

// 객체의 키, 값 배열화
const result = Object.keys(user2); // 객체의 키를 배열화
const result2 = Object.values(user2); // 객체의 값을 배열화
const result3 = Object.entries(user2); // 객체의 키,값 쌍 배열화 - 2중배열
console.log(result);
console.log(result2);
console.log(result3);

// Object.entries() 의 반대 개념
let arr = [
    ['mon', '월'],
    ['tue', '화'],
]

const result4 = Object.fromEntries(arr); // 배열을 객체화
console.log(result4);