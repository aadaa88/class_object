// objects
// one of the Javascript's data types.
// a collection of related data/or functionality.
// Nearly all objects in Javascript are instances of object

// 1. Literals and properties
const obj1 = {};                // 'object literal' syntax
const obj2 = new Object();      // 'object constructor' syntax

function printPerson(person) {
    console.log(person.name);
    console.log(person.age);
}

const aadaa = { name: 'aDa', age: 34 };
printPerson(aadaa);
//  js is dynamically type language -> add properties later
aadaa.hasJob = true;
console.log(aadaa.hasJob);
delete (aadaa.hasJob)        // also properties can be deleted
console.log(aadaa.hasJob);

// 2. Computed properties
// key should be always String
console.log(aadaa.name);
console.log(aadaa[name]);   // wrong use of computed properties
console.log(aadaa['name']);
console.log(aadaa.hasJob);
aadaa['hasJob'] = true;
console.log(aadaa['hasJob']);

function printValue(obj, key) {
    console.log(obj.key);   // returns: undefined -> because aadaa has not any property named 'key'
    console.log(obj[key]);  // returns: aDa
}
printValue(aadaa, 'name');

// 3. Property value shorthand
const person1 = { name: 'aDa', age: 33 };
const person2 = { name: 'bOb', age: 23 };
const person3 = { name: 'Joy', age: 44 };
const person4 = makePerson('Big', 34);
console.log(person4);
function makePerson(name, age) {
    return {
        name,
        age
    };
}

// 4. Constructor Function
const person5 = new MPerson('Roonie', 55);
function MPerson(name, age) {
    // this = {}; js에서 이러한 작업이 생략 되고 자동으로 객체 생성 됩니다.
    this.name = name;
    this.age = age;
    // return this; 이것도 역시 생략 되고 자동으로 리턴해 혹은 반환해 줍니다.
}
console.log(person5);

// 5. "in" operator: property existance check ('key' in obj)
console.log('name' in aadaa);
console.log('age' in aadaa);
console.log('work' in aadaa);
console.log(aadaa.work);    // 존재하지 않은 프로퍼티 -> undefined
console.log(aadaa['work']); // 존재하지 않은 프로퍼티 -> undefined

// 6. for..in vs for..of
// for(key in obj)
for ( key in aadaa) {
    console.log(key);
}
array1=[1, 2, 3, 'string', {obj: 1, obj1: 'str'}];
for ( item of array1){
    console.log(item);
}

// 7. Fun cloning
const someone1 = {name:'Bold', age: 20}; 
const someone2 = someone1;        // 메모리에 user1와 같은 reference를 가르키며 reference도 또한 같은 값을 가르킨다.
someone2.name = 'Gold';        
console.log(someone2);
someone1.age = 18;
console.log(someone2);
// clonning old way
const someone3 = {};
for(key in someone1) {
    someone3[key] = someone1[key];
}
console.clear();
console.log(someone3);
someone1.name = 'Silver';
console.log(someone1);
console.log(someone3);
// new way for clonning. ES6
const someone4 = {};
Object.assign(someone4, someone1);
console.log(someone1);
const someone5 = Object.assign({}, someone1); // 한 줄 코딩도 가능하죱!
//  example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'white', size: 10};
const mix = Object.assign({}, fruit1, fruit2); // possible to merging obj. 
console.log(mix);                       // when two objs has same properties, then the last obj's properties will be applied
array1.forEach((x, _index, _array) => console.log(x, _index));
const array2 = ['23','33']
const array3 = array1.concat(array2);
console.log(array3);
console.log(array3.indexOf('33'));
console.log(array3.includes('23'));
array3.push('⥀.⥀');
array3.push('🦸');
array3.push('🦸');
array3.push('🦸');
console.log(array3.lastIndexOf('🦸'));