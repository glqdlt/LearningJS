let v, v0;

v = v0 = 9.8;  // 오른쪽에서 왼쪽으로 할당  v0 = 9.8, v= 9.8

const nums = [3, 5, 15, 7, 5];

let n, i = 0;
while ((n = nums[i]) < 10 && i++ < nums.length) {
    console.log(`Number less than 10 : ${n}`);

}

console.log(`Number greater than 10 found : ${n}`);
console.log(`${nums.length - i - 1} numbers remain.`);


const obj = {b: 2, c: 3, d: 4};

let {d, b, c} = obj;

console.log(`${d}, ${b}, ${c} , ${obj}`);

({b, c, d} = obj);


console.log(`${d + b}`);

function getGreeting() {
    return "Hello world";
}

function getGreeting2() {
    console.log("hell josun");
}

console.log(getGreeting());
console.log(getGreeting2());

console.log(getGreeting());
console.log(getGreeting);

const f = getGreeting;

console.log(f());
console.log(f);

const o = {};
//객체안의 함수(o객체 프로포티 f에 함수를 할당했으므로 이는 메서드임)는 메서드라고 불림,
o.f = f;
console.log(o.f());
console.log(o.f);
console.log(o);

const arrObj = [1, 2, 3];
arrObj[1] = f;
console.log(arrObj[1]);
console.log(arrObj); // 2가 없어지고, f의 함수가 배열[1] 에 들어감.
// 자바스크립트에서 ()는 함수의 표현보다는 함수의 호출을 뜻함.


function oooo(target) {
    target.message = "f에서 수정함";


    target = {
        message: "새로운 객체!"
    };
    console.log(`oooo 내부: target.message="${target.message}" (할당 후)`);

}

let target = {
    message: '초기값'
}


console.log(`oooo를 호출하기 전 : target.message =${target.message}`);

oooo(target);
console.log(`oooo를 호출한 다음: target.message="${target.message}`);


function wow(num) {
    return `in num wow = ${num}`;
}

console.log(wow(5));
console.log(wow());


// 확산 매개변수, 확산 연산자
function addPrefix(prefix, ...words) {
    const prefixedWords = [];
    for (let i = 0; i < words.length; i++) {
        prefixedWords[i] = prefix + words[i];
    }
    return prefixedWords;
}

console.log(addPrefix("con", "verse", "vex")); //["con+verse","con+vex",]


function defaultF(a, b = "default", c = 3) {
    return `${a} , ${b}, ${c}`;
}

console.log(defaultF("a할당"));
console.log(defaultF("a할당", "b에할당"));

// 객체에 메서드(객체 프러퍼티의 함수를 메서드라고 함) 할당

const fffObj = {
    name: 'jhun',
    func : function(){ return '30 old';}
}
const fffObj2 = {
    name: 'jhun',
    func() {return '30 old';}
}

console.log(fffObj.func());
console.log(fffObj);
console.log(fffObj2.func());
console.log(fffObj2);


// this 선언
const fffObj3 = {
    name: 'jhun',
    func() {return `${this.name} 's 30 old`;}
}

console.log(fffObj3.func());