// const name = "ASH";
// console.log(name);

// 객체 , for ... in
const superman = {
    name : 'coco',
    age : 30,
}

superman.hairColor = 'black';
superman['hobby'] = 'computer';

console.log(superman.name)
console.log(superman['name'])
console.log(superman.age)
console.log(superman['age'])

delete superman.hobby;

console.log(superman)

function makeObject(name, age){
    return{
        name, // name : name,  name 이란 프로퍼티에 name 값을 할당
        age, // age : age
        hobby : 'computer',
    };
}

const ash = makeObject("ash", 27);
console.log(ash);

console.log("age" in ash);
console.log("birthday" in ash);

function isAdult(user){
    if(!('age' in user) || user.age < 20){ // user에 age가 없거나, 20살 미만이면 false
        return false;
    }
    return true;
}

const joy = {
    name : "joy",
    age: '26',
};

const ashsh = {
    name : "ashsh",
};
console.log('\nuse isAdult func\n');
console.log(isAdult(joy));
console.log(isAdult(ash));

for(x in joy){
    console.log(joy[x]); // joy['name'] & ['age']
}