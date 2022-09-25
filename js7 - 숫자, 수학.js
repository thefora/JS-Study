// 10진수 -> 2진수/16진수
let num = 10;
result1 = num.toString(); // "10"
result2 = num.toString(2); // "1010"

let num2 = 255;
result3 = num2.toString(16); // "ff"

console.log(result1 + "\n" + result2 + "\n" + result3 + "\n");

// PI값 
console.log(Math.PI);

let num3 = 5.1;
let num4 = 5.7;

// 올림 함수
result4 = Math.ceil(num3); // 6
result5 = Math.ceil(num4); // 6

// 내림 함수
result6 = Math.floor(num3); // 5
result7 = Math.floor(num4); // 5

// 반올림 함수
result8 = Math.round(num3); // 5
result9 = Math.round(num4); // 6

// 소수점 자릿수 표현
let userRate = 30.1234;

// 소수점 둘째자리 까지 표현(셋째 자리에서 반올림)
result10 = Math.round(userRate*100)/100; // 30.12
console.log(result10);

// toFixed 함수로 조절도 가능 - 훨씬 간단~ 하지만 문자열을 반환하기 때문에 반환받고 숫자로 형변환을 해줘야 함
result11 = userRate.toFixed(2);
result12 = userRate.toFixed(0);
result13 = userRate.toFixed(6);
console.log(result11);
console.log(result12);
console.log(result13);
console.log("");

numberOfUserRate = Number(userRate.toFixed(2)); // toFixed()는 이렇게 형변환 해서 사용함

// isNaN() - NaN인지 판단 & NaN은 신기하게 자기 자신도 똑같지 않다고 판단하기 떄문에 특정 변수가 NaN인지 판단 할 수 있는 유일한 수단임
let x = Number('x');
result14 = (x == NaN); // false
result15 = (x === NaN); // false
result16 = (NaN == NaN); // false
result17 = (NaN === NaN); // false
console.log(result14);
console.log(result15);
console.log(result16);
console.log(result17);
console.log(isNaN(x));
console.log("");

// parseInt() - Number()와는 다르게 문자가 혼용되어 있어도 동작을 함, 숫자가 아닌게 나오기 전 까지 읽고 숫자 반환, 2번째 인수로 진수를 지정이 가능
let margin = '10px';
let redColor = 'f3';

result18 = parseInt(margin); // 10
result19 = Number(margin); // NaN
result20 = parseInt(redColor); // NaN
result21 = parseInt(redColor, 16); // 243 - 첫 번째 인수를 16진수로 바꿔서 형변환
result22 = parseInt('11', 2); // 3 - 첫 번째 인수를 2진수로 바꿔서 형변환
console.log(result18);
console.log(result19);
console.log(result20);
console.log(result21);
console.log(result22);
console.log("");

// parseFloat() - 부동 소수점을 반환 나머지는 parseInt()와 동일
let padding = '18.5%';

result21 = parseInt(padding); // 18 - 소수점 무시
result22 = parseFloat(padding); // 18.5
console.log(result21);
console.log(result22);
console.log("");

// Math.random() - 0 ~ 1사이의 무작위 숫자 생성
// 1~100 사이 임의의 숫자를 뽑고 싶다면?
Math.floor(Math.random()*100)+1

// Math.max() , Math.min() - 괄호 안의 임의 값 중 최소값, 최댓값을 구함
// Math.abs() - 절대값을 구함
// Math.pow(n, m) - n의 m승 값을 구함 : Math.pow(2, 10); // 1024
// Math.sqrt() - 제곱근 : Math.sqrt(16) // 4 


