const superman = {
    name : 'ash',
    age : 27,
    fly : function(){ // => fly() 로 생략도 가능
        console.log('날아갑니다');
    }
    // fly(){ // => fly()
    //     console.log('날아갑니다');
    // }
};

// boy가 아니라 this로 바꾸면 아래 boy = null 로 만든 오류가 해결됨, 그니까 this를 활용하는게 좋음
// let boy = {
//     name : "mike",
//     showName: function() {
//         console.log(boy.name);
//     }
// };

// let man = boy;
// boy = null;
// man.showName();

let boy = {
    name : "mike",
    showName: function() {
        console.log(this.name);
    }
};

let man = boy;
boy = null;
man.showName();

let arrowBoy = {
    name : "mike",
    sayThis: () => {
        console.log(this.name);
    }
};

arrowBoy.sayThis(); // undefined => 애로우 펑션엔 this가 작동 안함, 따라서 객체를 이용한 함수를 작성할 땐 에로우 펑션 사용 안하는게 좋음~!

// man.name = "tom";
// console.log(boy.name);
// boy.showName()