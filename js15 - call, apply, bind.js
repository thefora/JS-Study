// call, apply, bind : 함수 호출 방식과 관계없이 this를 지정할 수 있음

// call 메소드는 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있다.
const mike = {
    name: "Mike",
};

const tom = {
    name: "Tom",
};

function showThisName(){
    console.log(this.name);
}

showThisName();
showThisName.call(mike); // call의 첫번째 매개변수는 this로 사용할 값, 매개변수가 더 있으면 그 매개변수를 호출하는 함수로 전달됨
showThisName.call(tom);

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(mike, 1999, "singer"); // 첫번째 매개변수는 this로 사용할 값! 두번째 부터는 해당 함수(여기서는 update)가 사용할 값!
console.log(mike);

update.call(tom, 2002, "teacher");
console.log(tom);

// apply - 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같음, call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, apply는 매개변수를 배열로 받음
update.apply(mike, [1988, "rapper"]); // 첫번째 매개변수는 this로 사용할 값! 두번째 부터는 해당 함수(여기서는 update)가 사용할 값!
console.log(mike);

update.apply(tom, [1993, "developer"]);
console.log(tom);

// call, apply 사용 예제
const nums = [3, 10, 1, 6, 4];

const minNum = Math.min(...nums);
const maxNum = Math.max(...nums);

const minNum2 = Math.min.apply(null, nums); // min, max 함수는 this가 필요없기 떄문에 아무 값이나 넣어도 됨
const maxNum2 = Math.max.apply(null, nums);
// = Math.min.apply(null, [3, 10, 1, 6, 4])

const minNum3 = Math.min.call(null, ...nums); // min, max 함수는 this가 필요없기 떄문에 아무 값이나 넣어도 됨
const maxNum3 = Math.max.call(null, ...nums);
// = Math.min.apply(null, 3, 10, 1, 6, 4)

console.log(minNum);
console.log(maxNum);
console.log(minNum2);
console.log(maxNum2);
console.log(minNum3);
console.log(maxNum3);

// bind 함수의 this값을 영구히 바꿀 수 있음
const updateMike = update.bind(mike);

updateMike(1980, "police");
console.log(mike);

const user = {
    name: "Mike",
    showName: function() {
        console.log(`hello, ${this.name}`);
    }
};

user.showName();

let fn = user.showName;
fn(); // undefined , fn을 할당할 떄 this를 잃어버림! 메소드는 ~.함수() 에서 점 앞이 this임!
fn.call(user);
fn.apply(user);
fn.call("ash");

let boundFn = fn.bind(user);

boundFn();