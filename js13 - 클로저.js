// Closure - 함수와 렉시컬 환경의 조합, 함수가 생성될 당시의 외부 변수를 기억, 생성 이후에도 계속 접근 가능
function makeCounter() {
    let num = 0; // 은닉화 성공 , 값 변경 불가능
    
    return function () { // 내부 함수에서 외부함수의 변수 num에 접근함, 이렇게 생성된 이후에 계속 값을 기억
        return num++;
    };
}

let counter = makeCounter;

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2