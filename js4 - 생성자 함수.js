// 생성자 함수 동작 원리 , 내부에서 this를 선언하고 this를 반환함. 어떤 함수라도 new를 붙여서 호출하면 아래와 같이 this를 이용해 동작함. 
// 따라서 일반함수와 구분하기위해 생성자 함수의 첫 문자를 대문자로 사용
function User(name, age){
    // this = {};

    this.name = name;
    this.age = age;
    this.sayName = function(){
        console.log(this.name);
    }
    // return this;
}

let user5 = new User('han', 40);
user5.sayName(); 

function Item(title, price){
    this.title = title;
    this.price = price;
    this.showPrice = function(){
        console.log(`가격은 ${this.price}원 입니다.`);
    }
}

const item1 = new Item('인형', 3000);
const item2 = new Item('가방', 5000);
const item3 = new Item('지갑', 7000);

console.log(item1, item2, item3);

item3.showPrice();