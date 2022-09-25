// arr.splice(n, m) - 특정 요소 지움
let arr = [1, 2, 3, 4, 5];
arr.splice(1,2);

console.log(arr); // [1,4,5]
console.log("");

// arr.splice(n, m, x) 특정 요소 지우고 추가 지워진 곳에 추가가 되는듯?
arr = [1, 2, 3, 4, 5];
arr.splice(1, 3, 100, 200, 300, 400); // [1, 100, 200, 300, 400, 5]

console.log(arr);

let arr2 = ['나는', '철수', '입니다'];

arr2.splice(1, 0, "대한민국", "소방관"); // 두번째 인수를 0으로 하면 첫번째 인수 자리에 요소가 추가됨

console.log(arr2);
console.log("");

// arr.spice() : 삭제된 요소 반환
arr = [1,2,3,4,5];
let result = arr.splice(1,2);

console.log(arr); // [1,4,5]
console.log(result); // [2,3]
console.log("");

// arr.slice(n, m) - n부터 m까지 반환, m을 안쓰면 배열 끝까지를 의미함 - 할당을 해줘야 하는듯 배열 자체가 바뀌지 않음
arr = [1,2,3,4,5];
result = arr.slice(1,4);
console.log(result); // [2,3,4]
console.log("");

// 배열 복사는 slice()를 이용
arr = [1,2,3,4,5];
copiedArr = arr.slice();
console.log(copiedArr);
console.log("");

// arr.concat(arr2, arr3 ..) - 합쳐서 새배열 반환
arr = [1,2];
r1 = arr.concat([3,4]); // [1,2,3,4]
r2 = arr.concat([3,4], [5,6]); // [1,2,3,4,5,6]
r3 = arr.concat([3,4],5,6); // [1,2,3,4,5,6]

console.log(r1);
console.log(r2);
console.log(r3);
console.log("");

// arr.forEach(fnc) - 배열 반복
let users = ['Mike', 'Tom', 'Ash'];
users.forEach((item, index, arr) => { // 첫번째 인수 item은 해당 요소 : Mike, Tom, Ash... , 두번째 인수 index는 인덱스 : 0,1,2..., 세번째는 배열 자체인데 보통 안씀 : users
    console.log(` ${index + 1}. ${item}`);
});
console.log("");

// arr.indexOf , arr.lastIndexOf
arr = [1,2,3,4,5,1,2,3];
r1 = arr.indexOf(3); // 2 - 제일 처음 3을 탐색
r2 = arr.indexOf(3,3) // 7 - 두번째 인수는 시작 위치를 의미, 인덱스 3부터 탐색하면 배열에선 4부터 탐색해서 뒤쪽의 3의 인덱스 반환
r3 = arr.lastIndexOf(3); // 7 - 끝에서 부터 탐색
console.log(r1);
console.log(r2);
console.log(r3);
console.log("");

// arr.includes() : 인덱스 확인 없이 포함하는지만 확인 하고싶을 떄 사용
arr = [1,2,3];
console.log(arr.includes(2)); // true
console.log(arr.includes(8)); // false
console.log("");

// arr.find(fn), arr.findIndex(fn) - 보다 복잡한 연산이 가능하도록 함수를 전달 할 수 있다. 짝수, 성인 등을 찾아낼 수 있따. 
// find : 첫번째 true값만 반환하고 끝, 만약 없으면 undefined를 반환, findIndex : 첫번 째 인덱스만 반환, 만약 없으면 -1 반환
arr = [1,2,3,4,5];
result = arr.find((item) => {
    return item % 2 === 0;
});
console.log(result);
console.log("");

userList = [
    { name: "Mike", age:30 },
    { name: "Joy", age:26 },
    { name: "Ash", age:27 },
    { name: "John", age:17 },
];

result = userList.find((user) => {
    if (user.age < 19) {
        return true;
    }
    return false;
});
console.log(result);
console.log("");

result = userList.findIndex((user) => {
    if (user.age < 19) {
        return true;
    }
    return false;
});
console.log(result);
console.log("");

// arr.filter(fn) - 조건을 만족하는 모든 요소를 찾을 때

result = arr.filter((item) => {
    return item % 2 === 0;
});

console.log(result);
console.log("");

// arr.reverse() - 배열을 역순으로 재정렬
arr = [1,2,3,4,5];
console.log(arr.reverse()); // [5,4,3,2,1]

// arr.map(fn) - 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환하는 메소드
let newUserList = userList.map((user, index)=>{
    return Object.assign({}, user, {
        id: index + 1,
        isAdult: user.age > 19,
    });
});

console.log(newUserList);
console.log(userList);

arr = ['안녕', '나는', '철수야'];
result = arr.join(); // 안녕,나는,철수야
console.log(result);
result = arr.join("-"); // 안녕-나는-철수야
console.log(result);

let str = "Hello, My Name is Ash";
result = str.split(""); // 한글자 한글자 자름
console.log(result);

// Array.isArray() - 배열은 해당 함수로 판별 할 수 있음, typeof를 사용하면 객체라고 나오기 떄문에 배열인지 아닌지 알 수 없음
let user = {
    name: "Mike",
    age : 30,
};

userList = ["Mike", "Joy", "Ash"];

console.log(typeof user);
console.log(typeof userList);

console.log(Array.isArray(user));
console.log(Array.isArray(userList));