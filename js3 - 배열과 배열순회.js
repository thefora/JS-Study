// 배열

let days = ['월', '화', '수'];

days[1] = '화요일'

console.log(days.length);

days.push('목요일');
days.unshift('sun');

for(let index = 0; index< days.length; index++){
    console.log(days[index]);
}

for(let day of days){ // 인덱스를 바로 얻지 못하는 단점이 있음
    console.log(day);
}