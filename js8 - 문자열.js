// 배틱(`) 은 문자열을 여러줄로 표현 가능함 \n 없이도 "" , '' 는 그냥 줄바꿈 하면 오류남
let desc = `오늘은 맑고
화창한 날씨가
계속 되겠습니다.`;

console.log(desc);

// length : 문자열 길이 
// 배열 처럼 특정 위치에 접근이 가능 , 하지만 내용을 바꾸는 건 불가능, 변화없음
console.log(desc[2]);
desc[2] = "도";
console.log(desc);

// toUpperCase() , toLowerCase() - 모든 영어 대문자, 모든 영어 소문자로 바꿈

// str.indexOf(text) 특정 문자의 위치 반환, 없으면 -1, 여러개 있으면 첫 번째의 위치를 반환
let desc2 = "Hi guys. Nice to meet you.";

console.log(desc2.indexOf('to')); // 14
console.log(desc2.indexOf('man')); // -1

// if문을 쓸 때 주의해야함
if(desc2.indexOf('Hi')){ // => Hi는 첫번째에 있어서 0값이 반환되고 false로 인식, 그래서 항상 (desc2.indexOf('Hi') > -1) 로 비교해주기
    console.log('Hi가 포함된 문장입니다.')
}

// str.slice(n, m) - n:시작점, m: 끝점, 없으면 문자열 끝까지, 양수면 그 숫자까지(포함하지 않음), 음수면 끝에서 부터 셈
let desc3 = "abcdefg";
console.log(desc3.slice(2)); // "cdefg"
console.log(desc3.slice(0, 5)); // "abcde"
console.log(desc3.slice(2, -2)); // "cde" // 인덱스 2부터 끝에서 2번쨰까지 반환
console.log("");

// str.substring(n, m) - n과 m사이 문자열을 반환 , n과 m을 바꿔도 동작함 음수 허용x(0으로 인식)
console.log(desc3.substring(2, 5)); // "cde"
console.log(desc3.substring(5, 2)); // "cde"
console.log("");

// str.substr(n, m) - n부터 시작 m개를 가져옴
console.log(desc3.substr(2, 4)); // "cdef"
console.log(desc3.substr(-4, 2)); // "de"
console.log("");

// str.trim() : 앞 뒤 공백 제거 중간 공백은 안댐
let desc4 = "       I        am     ash             ";
// result = String.prototype.trim(desc4);
result = desc4.trim();
console.log(result);
console.log("");

// str.repeat(n) : 문자열 n번 반복
let hello = "hello";
console.log(hello.repeat(3));
console.log("");

// 문자열 비교 - 아스키 코드 기반
console.log("a" < "c"); // true
console.log("a".codePointAt(0)); // 아스키코드 번호 추출 : 97
console.log(String.fromCodePoint(97)); // 아스키코드 번호에 해당하는 문자 추출 : "a"
console.log("");

// 책 제목만 뽑기
let list = [
    "01. 들어가며",
    "02. JS의 역사",
    "03. 자료형",
    "04. 함수",
    "05. 배열",
]

let newList = [];

for(let i = 0; i<list.length; i++){
    newList.push(list[i].slice(4));
}

console.log(newList);
console.log("");

// 금칙어 : 콜라
function hasCoke(str){
    if(str.indexOf('콜라') > -1){
        console.log('금칙어가 있습니다.')
    }
    else {
        console.log('통과');
    }
}

function hasCoke2(str){
    if(str.includes("콜라")){
        console.log('금칙어가 있습니다.')
    }
    else {
        console.log('통과');
    }
}

hasCoke("와 사이다가 짱이야!");
hasCoke("무슨소리, 콜라가 최고");
hasCoke("콜라");
console.log("");
hasCoke2("와 사이다가 짱이야!");
hasCoke2("무슨소리, 콜라가 최고");
hasCoke2("콜라");
console.log("");

// includes - 문자가 있으면 true, 없으면 false반환