// arr.sort() 배열 재정렬, 배열 자체가 변경됨 , 정렬할 때 요소를 문자열로 취급함
let arr = [1,5,4,2,3];
let arr2 = ["a","d","c","e","b"];
let arr3 = [27, 8, 5, 13];
arr.sort();
arr2.sort();
arr3.sort();

console.log(arr);
console.log(arr2);
console.log(arr3);

// 문자열을 비교를 하기 때문에 비교함수를 넣어줘야함. 이해는 잘 안되는데 걍 비교하는 함수임;;
arr3.sort((a,b) => {
    return a - b;
});

console.log(arr3);
console.log("");
// 어려우니 Lodash라는걸 사용함 알아서 비교해줌, 공식 사이트 가서 학습하기 https://loadsh.com/


// 배열의 모든 수 합치기
arr = [1,2,3,4,5];

// for, for of, forEach
result = 0;
arr.forEach((num)=>{
    result += num;
});

console.log(result);

// reduce는 배열을 돌면서 원하는 작업을 하고 최종값을 반환함
result = arr.reduce((prev, cur) => { // 첫번째 인수는 누적된 계산된 값, 두번째 인수는 현재 값
    return prev + cur;
}, 0) // 초기값 안써도 됨, 안쓰면 배열의 첫번째 요소가 들어감

let userList = [
    { name: "Mike", age: 30 },
    { name: "Joy", age: 26 },
    { name: "Ash", age: 27 },
    { name: "Kate", age: 23 },
    { name: "Hanna", age: 19 },
    { name: "Jake", age: 60 },
];

// 20세 이상 이름
result = userList.reduce((prev, cur) =>{
    if(cur.age > 19){
        prev.push(cur.name);
    }
    // console.log(prev);
    return prev;
}, []) // 초기값 빈 배열

console.log(result);
console.log("");

// 전체 나이의 합
result = userList.reduce((prev, cur) =>{
    return prev + cur.age;
}, 0) // 초기값 0

console.log(result);
console.log("");

// 이름이 3글자인 사람
result = userList.reduce((prev, cur) =>{
    if(cur.name.length === 3){
        prev.push(cur.name);
    }
    return prev;
}, []) // 초기값 빈 배열

console.log(result);
console.log("");

// arr.reduceRight(); => reduce와 동일한 연산이지만 배열의 우측요소부터 차례로 동작함