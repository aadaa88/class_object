console.log(hoisting);

// Some 'array' methods
const items = [
    { name: 'bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 50 },
    { name: 'Book', price: 1000 },
    { name: 'Phone', price: 10 },
    { name: 'Computer', price: 5 },
    { name: 'Keyboard', price: 25 },
]

console.log('Some "array" methods: ');
console.log(items);

//      1 . Filter method:   array.filter((variable) => {function})'
console.log('\t "filter" method:');
const filtered_items = items.filter((item) => { return item.price < 100 });
console.log(filtered_items);
const findByName = items.filter((item) => { return item.name === 'Phone' });
console.log(findByName);
console.log('\n');

//      2. Loop method:      array.forEach((variable) => {function})
console.log('\t "forEach" method:');
items.forEach((item) => { console.log(item); console.log(item.name); console.log('====') });
console.log('\n');

//      3. Some method:      array.some((variable) => {function}) !!this method returns boolean!!
console.log('\t "some" method:');
const hasInExpensiveItems = items.some((item) => { return item.price <= 100 });
console.log(hasInExpensiveItems);
const hasInExpensiveItems1 = items.some((item) => { return item.price <= 0 });
console.log(hasInExpensiveItems1);
console.log('\n');

//      4. Every method:     array.every((variable) => {function}) !!almost same as 'some' method but every condtions satisfied for items!!
console.log('\t "every" method:');
const hasInExpensiveItems2 = items.every((item) => { return item.price <= 1000 });
console.log(hasInExpensiveItems2);
const hasInExpensiveItems3 = items.every((item) => { return item.price <= 500 });
console.log(hasInExpensiveItems3);
console.log('\n')

//      5. Reduce method:    array.reduce((previousValue, currentValue, currentIndex, array) = {}, initialValue)
console.log('\t "reduce" method:  can be useful but need more study!');
const total = items.reduce((currTotal, currItem) => { return currItem.price + currTotal }, 0);
console.log(total);
console.log('\n');

//      6. include method:   array.include(argument)
console.log('\t "include" method:');
const items1 = [1, 2, 3, 4, 5];
const includesSomething = items1.includes(1);
const includesSomething1 = items1.includes(6);
console.log(includesSomething);
console.log(includesSomething1);
console.log('\n');

console.log('_'.repeat(40));

// function -> default parameters
function someFunction(name, work) {
    console.log(`my name is ${name}, and i am doing ${work}!`);
}
someFunction('aDa');

console.log('\n')
function someFunction1(name, work = 'customDefault') {
    console.log(`my name is ${name}, and i am doing ${work}!`);
}
someFunction1('aDa');
console.log('\n')

function someFunction2(name, work) {
    work = (typeof work !== 'undefined') ? work : 'someDefault';
    console.log(`my name is ${name}, and i am doing ${work}!`);
}
someFunction2('aDa');
console.log('\n')

console.log('_'.repeat(40));

// Rest parameters (EC6)
// function (...){}
function f(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    for (arg of args) {
        console.log('beatiful: ' + arg);
    }
    args.forEach((arg) => { console.log(`More powerful js: ${arg}`) });
}
f('hi', 'this', 'is', 'fun', '!');
console.log('\n')

// charAt()
console.log('This is ".charAt()" : ' + 'ganodur'.charAt(1))

// 'var' : don't ever use this!
// 'var' hoisting : move decleration from bottom to top!
// 'var' has no block scope!
{
    hoisting = 'hoisting';
    var hoisting;
}
console.log('\n' + hoisting);
// use 'let' instead of 'var'

// First-class function
//      functions are treated like any other variable
//      can be assignde as value to variable
//      can be passed as an argument to other functions
//      can be returned by function

// 1. Function expression
//      a function decleration can be called earlier than it is defined. (hoisted!)
//      a function expression is created when the execution reaches it.

const print = function () { console.log('print') } //anonymous function
print();
const printAgain = print;
printAgain();

// 2. Callback function using function expression

function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    }
    else {
        printNo();
    }
}
// anonymous function
const printYes = function () {
    console.log('Yes');
}
// first-class function
function printNo() {
    console.log('No');
}
// named-function
// better debugging in debugger's stack traces
// recursion
const printNoName = function print() {
    console.log('no!');
}

randomQuiz('Wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);
randomQuiz('wwwrong', printYes, printNoName);

// **Arrow function**
// always anonymous!
//      one line arrow function
const simplePrint = () => console.log('This is ARROW FUNCTION!!!');
simplePrint();
const addTwoNumber = (a, b) => a + b;
console.log(addTwoNumber(5, 6));
//      multiple line arrow function
const multipLineArFunc = (a, b) => {
    // do something more than one line code
    for (let i = 0; i < a; i++) {
        b += a;
    }
    return b;
}
console.log(multipLineArFunc(5, 6));

// IIFE - Immediately Invoked Funcetion Expression
(function hello() {
    console.log('Hello!');
})();
