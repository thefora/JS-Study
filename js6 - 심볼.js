// 객체 프로퍼티 키는 문자형으로 접근 가능
const obj = {
    1 : '1입니다.',
    false : '거짓',
};

Object.keys(obj); // ['1', 'false']
obj['1'] // "1입니다."
obj['false'] // "거짓"

console.log(Object.keys(obj));
console.log(obj['1'] + '\n' + obj['false']);


// 심볼은 유일한 식별자를 만들 때 사용함, new를 붙이지 않음
const a = Symbol();
const b = Symbol();

// 심볼의 할당 값은 같지만 비교해보면 다르다고 나옴 , 유일성을 보장하기 때문
console.log(a);
console.log(b);
console.log(a===b);
console.log(a==b);

// 심볼을 생성할 때 설명을 붙일 수 있음, 디버깅 할때 편함 문자열을 전달하면 되고 심볼 생성에는 어떤 영향도 없음, 설명이 똑같아도 생성이 되고 다르다고 나옴
const id = Symbol('첫 번째 심볼');
const user = {
    name : 'mike',
    age : 30,
    [id] : 'myid',
}

// 키가 심볼형인 프로퍼티는 건너 뜀
Object.keys(user); // ["name", "age"]
Object.values(user); // ["mike", 30]
Object.entries(user); // [Array(2), Array(2)]
for(let a in user) {} 

// 사용처 - 특정객체에 원본데이터는 건드리지 않고 속성을추가할 수 있다. 다른사람이 만들어놓은 객체에 자신만의 속성을 추가해서 덮어쓰면 안됨

// 전역심볼 - 하나의 심볼만 보장받을 수 있음 없으면 만들고 있으면 가져오기 때문
// Symbol 함수는 매번 다른 Symbol값을 생성하지만, Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유
const id1 = Symbol.for('전역심볼');
const id2 = Symbol.for('전역심볼');

console.log(id1 === id2);
console.log(Symbol.keyFor(id1)) // 심볼의 이름을 얻는 메소드 - Symbol.keyFor()
// 전역심볼이 아닌 심볼은 Symbol.keyFor() 메소드 사용불가 대신 description 으로 값 참조 가능
console.log(id.description);

// 심볼을 완전히 숨길 수 있는 방법은 없음 
console.log(Object.getOwnPropertySymbols(user)); // 객체의 심볼만 보는 함수 Object.getOwnPropertySymbols() - 배열
console.log(Reflect.ownKeys(user)); // 심볼을 포함한 객체의 모든 키를 보는 함수 Reflect.ownKeys()


// ------------- 심볼 사용 예시 ---------------

// 다른 개발자가 만들어 놓은 객체
const userInform = {
    name : "Ash",
    age : 27,
};

// 내가 작업
// user.showName = function() {}; // 사용자가 이상한 메시지를 볼 수 있음
const showName = Symbol('show name');
userInform[showName] = function(){
    console.log(this.name);
}

userInform[showName]();


// 사용자가 접속하면 보는 메세지
for (let key in userInform){
    console.log(`His ${key} is ${userInform[key]}.`);
}