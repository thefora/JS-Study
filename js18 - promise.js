// 어떤일이 완료됐을 때 실행되는 함수 : callback 함수, promise는 callback함수임
// 선언 방법
const pr = new Promise((resolve, reject) => {  // resolve : 성공 , reject : 실패
    // code
});

// 타임아웃 3초 설정한 promise
const pr2 = new Promise((resolve, reject) => {  // resolve : 성공 , reject : 실패
    setTimeout(() => {
        resolve('OK');
    }, 3000)
});

// then을 이용해서 resolve, reject를 처리할 수 있음
pr2.then(
    // 이행 됐을 때 실행
    function(result) {
        console.log(result + ' 가지러 가자.');
    },
    // 거부 됐을 때 실행 
    function(err) {
        console.log('다시 주문해주세요..');
    } 
);

// catch를 이용한 코드도 작성 가능 - 아래 코드는 15~24줄과 같은 기능 실행 , catch로 구분해서 잡아주는게 가독성에도 좋고, 오류 파악이 쉽다??..
// finally는 성공하든 실패하든 마지막에 꼭 실행되는 코드~ 필요하면 작성
pr2.then(
    function(result) {}
).catch(
    function(err) {}
).finally(
    function(){
        console.log('----주문 끝 ----');
    }
)


// 실사용
const pr3 = new Promise((resolve, reject)=> {
    setTimeout(() => {
        //resolve("OK");
        reject(new Error("err...."));
    }, 1000);
});

console.log("시작");
pr3.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("끝");
});

// 프로미스 체이닝
const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("1번 주문 완료");
        }, 1000);
    });
};

const f2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("xxx");
            // res("2번 주문 완료");
        }, 3000);
    });
};

const f3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("3번 주문 완료");
        }, 2000);
    });
};

// 프로미스 체이닝
console.log("시작");
f1()
.then((res) => f2(res))
.then((res) => f3(res))
.then((res) => console.log(res))
.catch(console.log)
.finally(() => {
    console.log("끝");
});

// promis.all 배열 함수들의 작업을 한꺼번에 시작하고 모두 이행되면 then 부분이 실행됨 - 비동기 라고 보면 될듯! 시간 절약 가능~~
// 하지만 promise.all 은 error가 뜨면 아무런 정보도 얻을 수 없음, 따라서 하나의 정보라도 누락되면 안되는 페이지를 보여줄 때 사용, 
Promise.all([f1(), f2(), f3()])
.then(res => {
    console.log(res);
});

// promis.race - all과 비슷함, 하나라도 1등으로 완료되면 끝냄, 용량이 큰 이미지를 로딩하는데 그 중 하나라도 완료되면 그 이미지를 보여줄 때 사용하면 됨
Promise.race([f1(), f2(), f3()])
.then(res => {
    console.log(res);
});