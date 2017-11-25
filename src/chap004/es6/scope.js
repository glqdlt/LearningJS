
// jhun 은 전역 스코프
let jhun = {
    name: "jhun",
    age: 30
}




// block1 , block2 는 블록 스코프
{
    //block 1

    const x = 'blue';
    console.log(x);

}

// console.log(x); // x is not defined

{
    //block 2
    const x = 3;
    console.log(x);
}

// 중첩 블록 그리고, 변수 숨김 (variable masking)

{
    const x = 3;
    console.log(`첫번째 ${x}`);
    {
        const x = '하하';
        console.log(`내부 블록 ${x}`);
    }
    console.log(`다시 첫번쨰 ${x}`);
}


//194 page 휴식