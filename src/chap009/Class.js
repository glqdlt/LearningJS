//ES5 에서 Class 생성

function Car(make, model) {
    this.make = make;
    this.model = model;
    this._userGears = ['P', 'N', 'R', 'D'];
    this._userGear = this.userGears[0];
};


// es5 와 es6 의 차이, 생성자는 일부러 생략 , page 232 에 오탈자 있음. function Es5Car {} 라 되어있는데 function Es5Car(){} 라 해야함.
class Es6Car {
};

function Es5Car() {
};

// 프로토타입과 동적 디스패치 에 대해 이해해야한다.


class SuperCar {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this._userGears = ['P', 'N', 'R', 'D'];
        this._userGear = this._userGears[0];

    }

    get userGear() {
        return this._userGear
    };

    set userGear(val) {
        if (this._userGears.indexOf(val) < 0) {
            throw new Error(`Invalid gear: ${val}`);
        }
        this._userGear = val;
    }

    //shift 메서드는 SuperCar 안에서 쓸수있는 '프로토타입 메서드' 라고 말한다.
    shift(gear) {
        this.userGear = gear;
    }
}


const car1 = new SuperCar("Kia","k5");
const car2 = new SuperCar("hyundai","avante");
car1.shift('N'); // Car.prototype.shift; 와 같은 말이다. 실제로 car1 안의 method 중에 shift라는 메서드는 없다. 하지만 car1 은 SuperCar의 객체이므로, SupserCar의 메서드 중에서 shift를 검색해서 사용가능하게 하는 것. 이것이 동적 디스패치 라고 한다.
console.log(car1.userGear);

car1.shift = function(x){return `${x}Wahahaha`};

console.log(car1.shift('qweqwe'));  // car1.shift 라는 메서드(return wahahaha 해주는거)를 새로 정의했으므로, 이제 Supercar의 프로토타입 메서드에 접근을 할수가없다.
console.log(car1.userGear);

console.log( car1.shift === car2.shift);
console.log(car2.shift === SuperCar.prototype.shift);


car2.shift('R');

console.log(car1.userGear);
console.log(car2.userGear);

// TODO car1.shift 를 원래 SuperCar().prototype.shift 로 되돌리려면 어떻게 해야할까?
