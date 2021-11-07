// jshint는 vscode 확장 기능이명 자바스크립트 형식을 맞춰서 코딩 하는 습관에 도움을 주는 것이다.
/* jshint esversion: 6 */
/* jshint browser: true */
/* jslint node: true */
/* jshint strict: false */
'use strict';

// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - synactical sugar over prototype-based inheritance

// 1. class declerations

class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

console.log('Person Object v1 :');
const ada = new Person('Aadaa', '34');
console.log(ada.name);
console.log(ada.age);
ada.speak();
console.log((`_`).repeat(40));
console.log('\n');

class PC {
    constructor(type, operatingsystem, performance) {
        this.type = type;
        this.operatingsystem = operatingsystem;
        this.performance = performance;
    }
    poweron() {
        console.log(`your ${this.type} starts!`);
        this.playsound();
    }
    playsound() {
        if (this.operatingsystem === 'mac')
            console.log('jrring');
        else if (this.operatingsystem === 'win')
            console.log('dondrongdingdong');
        else if (this.operatingsystem === 'linux')
            console.log('tuk');
    }
    poweroff() {
        console.log(`your ${this.type} shutdown!`);
        this.playsound();
    }
    dosomething() {
        console.log(`you did something on your ${this.type}`);
    }
}

console.log('PC Object v1 :');
const myPC = new PC('macair', 'mac', 'm1');
myPC.dosomething();
myPC.poweron();
myPC.poweroff();
console.log((`_`).repeat(40));
console.log('\n');


class appliance {
    constructor(refrigator, sofa, table, chair, tv, bookcase, drier, washingmachine) {
        this.refrigator = refrigator;
        this.sofa = sofa;
        this.table = table;
        this.chair = chair;
        this.tv = tv;
        this.bookcase = bookcase;
        this.drier = drier;
        this.washingmachine = washingmachine;
    }
    existance() {
        let things = [];
        for (const appliances in appliance) {
            if (appliances !== undefined) {
                things.push(appliances);
            }
        }

        console.log(`you have: ` + things);
    }
}
class calendar {
    constructor(year, month, week, date) {
        this.year = year;
        this.month = month;
        this.week = week;
        this.date = date;
    }
    getstring() {
        return `${this.year} ${this.month} ${this.date} ${this.week}`;
    }
}

const cal = new calendar(2021, 10, 'Wed', 3);
console.log(cal.getstring());
console.log(cal);
console.log((`_`).repeat(40));
console.log('\n');


// 2. Getter and Setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0){
        // throw Error('age can not be negative!')
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Aadaa', 'Bilgee', -1);
console.log(user1.age);
console.log((`_`).repeat(40));
console.log('\n');

class coffeBendingMachine {
    constructor(numberOfCoffee, coin) {
        this.numberOfCoffee = numberOfCoffee;
        this.coin = coin;
    }
    get putcoin() {
        this.makecoffee();
    }
    set putcoin(coin) {
        this._coin = coin < 0 ? 0 : coin;
    }
    makecoffee() {
        if (this.numberOfCoffee <= 0) {
            if (this.coin > 0) {
                console.log('☕️ - 맛있게 드세요!');
                this._coin--;
            }
            else {
                console.log('돈 더 주세요!');
            }
        }
        console.log('🙅‍♂️ 죄송합니다, 현재 커피 재고가 없습니다. 자판기 주인에게 알려 주세요.');
    }
    get refill() {
        if (this.numberOfCoffee > 0) {
            console.log(this.numberOfCoffee + ': 자판기를 리필 안 해도 되겠습니다.');
        }
        else {
            console.log(this._numberOfCoffee + ': 자판기를 리필 해 주세요.');
        }
    }
    set refill(name) {
        if (this.hasPrivilage(name)) {
            // this._numberOfCoffee = amount < 0 ? 0 : amount;
            this._numberOfCoffee += 5;
        }
    }
    hasPrivilage(name) {
        return name === 'Aadaa';
    }
}
const coffemachine1 = new coffeBendingMachine(3, 4);

console.log('Coffee Blending Machine v1 :');
coffemachine1.putcoin;
console.log((`_`).repeat(40));
console.log('\n');


/*
// 3. Fields (public, private)
// Too soon!
class Expirement {
    publicField = 2;
    const privateField = 1;
    console.log(privateField);
}

console.log(publicField);
console.log(privateField);

// 4. Static properties and methods;
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
    static printPublisher(){
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2  = new Article(2);

console.log(article1.publisher); // return: undefined;
console.log(Article.publisher); // return: 'Dream Coding';
Article.printPublisher(); // return: 'Dream Coding';
*/


// 5. Inheritance 
//      a way for one class extend to another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color! try to remove this sentence.`);
    }
    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}

const rect = new Rectangle(10, 20, 'red');
rect.draw();
console.log(rect.getArea());
class Triangle extends Shape{
    // overriding!
    getArea(){
        return this.width * this.height / 2;
    }
    drawShape(){
        console.log('🔺')
        super.draw();
    }
} 
const triangle = new Triangle(10, 20, 'blue');
triangle.draw();
triangle.drawShape();
console.log(triangle.getArea());

// 6. Class checking: instanceof

console.log(rect instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);

// Class Test

let param1 = 10;
let param2 = 'foo';
let param3 = 200;
let param4 = 'bar';

let props = {options: { op1: param2, op3: param4 }};

console.log('Object props');
console.log(props);

class Test {
  
  constructor({id = 'defaultId', options = { op2:'0'}} = {}){
    this.id = id;
    this.options = options;
  }
  
}

let test = new Test(props);
console.log('Class test');
console.log(test.id);
console.log(test.options);
console.log(test.options.op2);
let test1 = new Test()
console.log(test1)
