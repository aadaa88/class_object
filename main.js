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
}
*/

// Some 'array' methods
const items = [
    {name: 'bike',      price: 100},
    {name: 'TV',        price: 200},
    {name: 'Album',     price: 50},
    {name: 'Book',      price: 1000},
    {name: 'Phone',     price: 10},
    {name: 'Computer',  price: 5},
    {name: 'Keyboard',  price: 25},
]

console.log('Some "array" methods: ');
console.log(items);

//      1 . Filter method:   array.filter((variable) => {function})'
console.log('\t "filter" method:');
const filtered_items = items.filter((item) => {return item.price < 100});
console.log(filtered_items);
const findByName = items.filter((item) => {return item.name === 'Phone'});
console.log(findByName);
console.log('\n');

//      2. Loop method:      array.forEach((variable) => {function})
console.log('\t "forEach" method:');
items.forEach((item) => {console.log(item);console.log(item.name);console.log('====')});
console.log('\n');

//      3. Some method:      array.some((variable) => {function}) !!this method returns boolean!!
console.log('\t "some" method:');
const hasInExpensiveItems = items.some((item) => {return item.price <= 100});
console.log(hasInExpensiveItems);
const hasInExpensiveItems1 = items.some((item) => {return item.price <= 0});
console.log(hasInExpensiveItems1);
console.log('\n');

//      4. Every method:     array.every((variable) => {function}) !!almost same as 'some' method but every condtions satisfied for items!!
console.log('\t "every" method:');
const hasInExpensiveItems2 = items.every((item) => {return item.price <= 1000});
console.log(hasInExpensiveItems2);
const hasInExpensiveItems3 = items.every((item) => {return item.price <= 500});
console.log(hasInExpensiveItems3);
console.log('\n')

//      5. Reduce method:    array.reduce((previousValue, currentValue, currentIndex, array) = {}, initialValue)
console.log('\t "reduce" method:  can be useful but need more study!');
const total = items.reduce((currTotal, currItem) => {return currItem.price + currTotal}, 0);
console.log(total);
console.log('\n');

//      6. include method:   array.include(argument)
console.log('\t "include" method:');
const items1 = [1, 2, 3 , 4, 5];
const includesSomething = items1.includes(1);
const includesSomething1 = items1.includes(6);
console.log(includesSomething);
console.log(includesSomething1);
console.log('\n');

console.log('_'.repeat(40));

// function -> default parameters
function someFunction(name, work){
    console.log(`my name is ${name}, and i am doing ${work}!`);
}
someFunction('aDa');

console.log('\n')
function someFunction1(name, work='customDefault'){
    console.log(`my name is ${name}, and i am doing ${work}!`);
}
someFunction1('aDa');
console.log('\n')

function someFunction2(name, work){
    work = (typeof work !== 'undefined') ?  work : 'someDefault';
    console.log(`my name is ${name}, and i am doing ${work}!`);
}
someFunction2('aDa');
console.log('\n')

console.log('_'.repeat(40));

// Rest parameters (EC6)
function f(...args) {
    for(let i = 0; args.length; i++){
        console.log(args[i]);
    }
}
f1('hi', 'this', 'is', 'fun', '!');