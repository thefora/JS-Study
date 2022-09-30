
const user = {
    name : 'Mike'
}

console.log(user.name);
// 객체가 프로퍼티를 갖고있는지 확인하는 방법
console.log(user.hasOwnProperty('name'));
console.log(user.hasOwnProperty('age'));


const car = {
    wheels: 4,
    drive() {
        console.log("drive..");
    }
}

const bmw = {
    color: "red",
    navigation: 1,
};

const benz = {
    color: "black",
};

const audi = {
    color: "blue",
};

// 상속받음
bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;

console.log(bmw); // bmw에서 탐색을 먼저 하고 __proto__ 항목에 숨겨져 있는지 탐색, __proto__항목에 있는건 로그엔 보이지 않는듯?
console.log(bmw.wheels);
console.log(bmw.drive);

// 상속은 계속 이어질 수 있음
const x5 = {
    color: "white",
    name: "x5",
};

x5.__proto__ = bmw;

console.log(x5.wheels);
console.log(x5.navigation);


// 객체의 프로퍼티 순회
for(p in x5){
    console.log(p);
};
console.log("");

// 키, 값과 관련된 객체 메소드는 상속된 proto는 안나옴
console.log(Object.keys(x5));
console.log(Object.values(x5));
console.log("");

// 객체의 키, 값과 proto 항목 구분
for(p in x5){
    if(x5.hasOwnProperty(p)){ // hasOwnProperty - 객체가 직접 가지고 있는 프로퍼티만 반환
        console.log('o', p);
    }
    else {
        console.log('x', p);
    }
};
console.log("");


// 생성자 함수를 사용해서 상속
const Bmw = function (color) {
    this.color = color;
    // this.wheels = 4;
    // this.drive = function() {
    //     console.log("drive..");
    // };
};

// Bmw.prototype.wheels = 4;
// Bmw.prototype.drive = function() {
//     console.log("drive..");
// };
// Bmw.prototype.navigation = 1;
// Bmw.prototype.stop = function() {
//     console.log("STOP");
// };

// 85~ 92 코드 아래와 같이 대체 가능 훨씬 간결! 하지만 constructor가 사라짐 그래서 아래보다는 85~92 처럼 써야함 아니면 constructo를 수동으로 명시
Bmw.prototype = {
    constructor: Bmw,
    wheels: 4,
    drive() {
        console.log("drive..");
    },
    navigation: 1,
    stop() {
        console.log("STOP!");
    },
};

// 85~92 줄 코드를 작성하면 아래 코드 처럼 변수 개수마다 car를 계속 넣어 줄 필요가 없음, 한번만 작업해주면 생성자로 만들어진 모든 객체에 작업이 필요 없음
// x6.__proto__ = car;
// z4.__proto__ = car;

const x6 = new Bmw("red");
const z4 = new Bmw("blue");

console.log(x6.stop);
console.log(z4);
console.log("");

// 생성자 함수가 새로운 객체를 만들때 그 객체는 생성자의 인스턴스라고 부름, 자바스크립트에서는 이를 편리하게확인할 수 있는 연산자가 있음 - instanceof
console.log(z4 instanceof Bmw); // Bmw를 이용해서 z4를 만들었는가?? true
console.log(z4.constructor === Bmw); // z4의 생성자가 Bmw인가?? true
console.log("");

// 클로저를 이용해서 자동차의 컬러를 아무나 변경할 수 없게 만들기, 색상을 얻을 수 만 있꼬 바꿀 수 는 없음
const Bmw2 = function(color){
    const c = color;
    this.getColor = function() {
        console.log(c);
    };
};

const x7 = new Bmw2("red");

console.log(x7.getColor);

