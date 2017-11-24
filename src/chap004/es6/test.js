'use strict';

for (let temp, i = 0, j = 1; j < 30; temp = i, i = j, j = i + temp) console.log(j);


// for(;;) console.log('i will repeat forever!'); // infinity loop


let s = '3';
for (; s.length < 10; s = ' ' + s) ;

console.log(s);

for (let x = 0.2; x < 3.0; x += 0.2) console.log(x);

// for(; !player.isBroke();) console.log("still playing!");

// for 안의 let 변수는 for 안에만 존재함, while 문 과의 유일한 차이, 자바랑 비슷


switch (expenssion) {
    case 7:    expenssion = 7;     break;
    case 8:    expenssion = 7;     break;

}