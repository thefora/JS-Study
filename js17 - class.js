// 생성자 함수 사용해서 객체 생성
const User = function(name, age){
    this.name = name;
    this.age = age;
    this.showName = function() {
        console.log(this.name);
    };
};

const mike = new User("Mike", 30);

// 클래스를 이용해 객체 생성
class User2 {
    constructor(name, age){ // 객체를 만들어주는 생성자 메소드
        this.name = name;
        this.age = age;
    }
    showName() { // 클래스 내에 정의한 메소드는 __proto__에 저장됨
        console.log(this.name);
    };
};

const tom = new User2("Tom", 19);

// tom은 showName이 보이지 않음 __proto__에 정의되 있기 때문
console.log(mike);
console.log(tom);

// 생성자 함수로도 __proto__에 정의 하는법
User.prototype.showAge = function() {
    console.log(this.age);
}

console.log(mike);
console.log(mike.showAge);
console.log("");

// class의 탄생 이유?! - 생성자 이용 : 개발자의 실수지만 정상 동작, 코드상의 오류가 없음, for... in, 상속 등에서 차이
const ash = User("Ash", 27);
// const joy = User2("Joy", 26); // 하지만 클래스는 오류 발생

// 또한 for ... in 문에서 생성자를 이용한 객체는 __proto__ 까지 모두 출력되지만, class로 생성한 객체는 메소드가 출력되지 않음
for(const p in mike){
    console.log(p);
}

console.log("");

for(const p in tom){
    console.log(p);
}
console.log("");

// extends
class Car {
    constructor(color){
        this.color = color;
        this.wheels = 4;
    }
    drive() {
        console.log("drive..");
    }
    stop() {
        console.log("STOP!");
    }
}

class Bmw extends Car {
    PerformanceMark() {
        console.log("PARK");
    }
}

const z4 = new Bmw("blue")
console.log(z4.__proto__);
console.log(z4.__proto__.__proto__);
console.log("");

// 메소드 오버라이딩 - 부모와 똑같은 메소드를 그냥 정의하면 덮어씀, 부모 기능을 확장하고 싶으면 super를 쓰면 됨
class Bmw2 extends Car {
    PerformanceMark() {
        console.log("PARK");
    }
    stop() {
        super.stop();
        console.log("OFF");
    }
}

const z5 = new Bmw2("black");
console.log(z5.stop());
console.log("");

// 컨스트럭터에서 this를 사용하기 전에 super 컨스트럭터, 즉 부모 생성자를 반드시 생성해야함.
class Bmw3 extends Car {
    constructor(color){
        super(color); // 이 코드가 선행되야 함!
        this.navigation = 1;
    }
    park() {
        console.log("PARK");
    }
}

const z6 = new Bmw2("black"); // super로 color를 넘겨줘야 color가 할당됨
console.log(z6);
console.log("");