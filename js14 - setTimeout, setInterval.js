// setTimeout - 일정 시간이 지난 후 함수를 실행, timeID를 반환함
function fn(){
    console.log(3);
}

setTimeout(fn, 3000); // 3000ms => 3초

// 위의 2~6 줄과 동일한 기능
setTimeout(function() { 
    console.log(3);
}, 3000);

// 인수가 필요한 경우
function showName(name){
    console.log(name);
}

const tId = setTimeout(showName, 3000, 'Mike'); // 함수, 시간, 인수
// clearTimeout(tId); // 예정된 타임아웃 작업을 없앰, 3초가 지나기전에 이 코드가 실행되기 때문에 위의 showName 함수는 실행되지 않음

// setInterval - 일정 시간 간격으로 함수를 반복, setTimeout과 사용법이 동일함, 계속 반복 수행
const tId2 = setInterval(showName, 3000, 'Mike');
// clearInterval(tid2); // 중단 코드

// 딜레이 타임을 0으로 줘도 실제로 바로 실행되지 않음

let num = 0;

// 특정 조건 달성되면 반복 종료하기!
function showTime() {
    console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`);
    if (num > 5){
        clearInterval(tId3);
    }
    
}

const tId3 = setInterval(showTime, 1000);

