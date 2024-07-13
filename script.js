// const data = [
//     { id: 'e1', title: 'wre', description: "adas", age: 21 },
//     { id: 'e2', title: 'lorem', description: "adas asdasd asdasdas", age: 21 },
//     { id: 'e3', title: 'sadsa', description: "adas asdasd", age: 21 },
//     { id: 'e4', title: 'lorem', description: "adas", age: 21 },
// ];

// const newObj = {};

// data.forEach((item) => {
//     for(let key in item) {
//         if(!newObj[key]) {
//             newObj[key] = [item[key]]
//         }else if(newObj[key]){
//             newObj[key] = newObj[key].concat(item[key])
//         }
//     }
// })

// for(let key in newObj) {
//     const countObj = {};
//     newObj[key].forEach((item) => {
//         if(!countObj[item]) {
//             countObj[item] = 1
//         }else if(countObj[item]){
//             countObj[item] += 1
//         }
//     });
    
//     let maxCount = 0;
//     for(let i in countObj) {
//         if(countObj[i] > maxCount){
//             maxCount = countObj[i];
//             newObj[key] = i;
//         }
//     };
// };

// console.log(newObj);


/* ------------------------------------------------------------------------------------------------------------------- */


// const reverseString = (str) => {
//     const arr = str.split("");
//     const reversedArr = arr.toReversed();
//     return reversedArr.join("");
// };  

// console.log(reverseString("apple"));


/* ------------------------------------------------------------------------------------------------------------------- */


// const isPalindrome = (str) => {
//     const halfStr1 = str.slice(0, Math.ceil(str.length / 2));
//     const halfStr2 = str.substr(Math.floor(Math.abs(str.length / 2)));

//     return halfStr1 === halfStr2.split("").toReversed().join("");
// };  

// console.log(isPalindrome("aabbaa"));


/* ------------------------------------------------------------------------------------------------------------------- */


// const reverseInteger = (num) => {
//     if(num > (2 ** 31) - 1 || num < -(2 ** 31)) {
//         return 0;
//     }
//     if(num < 0) {
//         const newNum = Math.abs(num);
//         const str = newNum.toString();
//         const reversedStr = str.split("").toReversed().join("");

//         return -Number(reversedStr)
//     }

//     const str = num.toString();
//     const reversedStr = str.split("").toReversed().join("");

//     return Number(reversedStr);

// };

// console.log(reverseInteger(1534236469));


/* ------------------------------------------------------------------------------------------------------------------- */


// const data = [
//     { id: 'e1', title: 'wre', description: "adas", age: 21 },
//     { id: 'e2', title: 'lorem', description: "adas asdasd asdasdas", age: 21 },
//     { id: 'e3', title: 'sadsa', description: "adas asdasd", age: 21 },
//     { id: 'e4', title: 'lorem', description: "adas", age: 21 },
// ];

// const newArr = data.map((item) => {    
//     const {id,description,age} = item;

//     return { id, description, age, name: 'Ilkin' }
// });

// console.log(newArr);
// console.log(data);


/* ------------------------------------------------------------------------------------------------------------------- */


// const getFlatArray = (arr, n) => {
//     let newArr = [];

//     for(let i=0; i<Math.ceil(arr.length/n); i++) {
//         const pieceArr = arr.slice(i*n, (i+1)*n);
//         newArr.push(pieceArr);
//     }

//     return newArr;
// };

// console.log(getFlatArray([1,4,12,3,2,5,-9,0], 7));


/* ------------------------------------------------------------------------------------------------------------------- */


// const isAnagram = (str1, str2) => {
//     if (str1.length !== str2.length) return false;

//     const sortStr = (str) => str.split("").sort().join("");

//     return sortStr(str1) === sortStr(str2);
// };

// console.log(isAnagram("bab", "aba")); 


/* ------------------------------------------------------------------------------------------------------------------- */


// const data = [
//     { id: 'e1', title: 'wre', description: "adas", age: 21, address: { city: 'New York' } },
//     { id: 'e2', title: 'lorem', description: "adas asdasd asdasdas", age: 11, address: { city: 'San Francisco' } },
//     { id: 'e3', title: 'sadsa', description: "adas asdasd", age: 13, address: { city: 'Chicago' } },
//     { id: 'e4', title: 'lorem', description: "adas", age: 27, address: { city: 'Los Angeles' } },
// ];


// const newObj = data.reduce((acc, item) => {
//     acc[item.id] = item.title;
//     return acc;
// }, {});

// console.log(newObj);


/* ------------------------------------------------------------------------------------------------------------------- */


// const data2 = [
//     { id: 'e1', name: 'John', age: 17 },
//     { id: 'e2', name: 'Jane', age: 22 },
//     { id: 'e3', name: 'Jim', age: 15 },
//     { id: 'e4', name: 'Jill', age: 30 },
// ];

// data2.sort((a,b) => a.age - b.age);

// console.log(data2);


/* ------------------------------------------------------------------------------------------------------------------- */


// const data = [
//     { id: 'e1', name: 'John', age: 21 },
//     { id: 'e2', name: 'Jane', age: 22 },
//     { id: 'e3', name: 'Jim', age: 21 },
//     { id: 'e4', name: 'Jill', age: 30 },
// ];

// const newObj = data.reduce((acc, item) => {
//     const { age } = item;
//     acc[age] = data.filter((item) => item.age === age);
//     return acc;
// }, {});

// console.log(newObj);

// RESULT must be


/* ------------------------------------------------------------------------------------------------------------------- */


// const arr1 = [
//     { id: 'e1', name: 'John', age: 17 },
//     { id: 'e2', name: 'Jane', age: 22 },
// ];

// const arr2 = [
//     { id: 'e1', address: '123 Main St', phone: '123-456-7890' },
//     { id: 'e3', name: 'Jim', age: 15 },
// ];

// const mergeArrays = (a1, a2) => {
//     const resultArr = arr1.reduce((acc,item1) => {
//         const { id } = item1;

//         const findedIndex = arr2.findIndex((item) => item.id === id);

//         if(findedIndex !== -1) {
//             acc[findedIndex] = {...acc[findedIndex], ...item1}
//         }else{
//             acc.push(item1)
//         }

//         return acc;
//     }, [...arr2]);

//     return resultArr;
// };

// console.log(mergeArrays(arr1, arr2));


/* ------------------------------------------------------------------------------------------------------------------- */


// const data = [
//     { id: 'e1', title: 'Developer', age: 25 },
//     { id: 'e2', title: 'Designer', age: 30 },
//     { id: 'e3', title: 'Developer', age: 35 },
//     { id: 'e4', title: 'Manager', age: 40 },
//     { id: 'e5', title: 'Designer', age: 28 },
// ];

// const calculateAverageAgeByGroup = () => {
//     const countObj = {};

//     const newObj = data.reduce((acc, item) => {
//         const { title, age } = item;

//         if(!acc[title]) {
//             countObj[title] = 1;
//             acc[title] = age;
//         }else if(acc[title]) {
//             countObj[title] += 1;
//             acc[title] = (acc[title] + age) / countObj[title];
//         }

//         return acc;
//     }, {}); 

//     return newObj;
// };

// console.log(calculateAverageAgeByGroup(data));


/* ------------------------------------------------------------------------------------------------------------------- */


// const data = [
//     { id: 'e1', name: 'John', address: { city: 'New York', zip: '10001' } },
//     { id: 'e2', name: 'Jane', address: { city: 'San Francisco', zip: '94101' } },
// ];

// const flattenedData = data.map((item) => {
//     const { address } = item;
//     const newObj = {};

//     for(let key in item) {
//         if(key !== 'address') {
//             newObj[key] = item[key];
//         }else if(key === 'address'){
//             for(let key2 in address) {
//                 newObj[`${key}.${key2}`] = `${address[key2]}`;
//             }
//         }
//     }

//     return newObj;
// });

// console.log(flattenedData);


/* ------------------------------------------------------------------------------------------------------------------- */


// const data = {
//     id: 'e1',
//     name: 'John',
//     address: {
//         city: 'New York',
//         zip: '10001',
//         coordinates: {
//             lat: 40.7128,
//             lng: -74.0060,
//         },
//     },
// };


// const getValueByPath = (obj, path) => {
//     const arr = path.split('.');

//     const result = arr.reduce((acc, part) => { 
//         if(acc) {
//             return acc[part]
//         }
//     }, obj)

//     return result;
// };

// console.log(getValueByPath(data, 'address.city')); // Output: 'New York'
// console.log(getValueByPath(data, 'address.coordinates.lat')); // Output: 40.7128
// console.log(getValueByPath(data, 'address.country')); // Output: undefined


/* ------------------------------------------------------------------------------------------------------------------- */


// const data = [
//     { id: 'e1', name: 'John', age: 17 },
//     { id: 'e2', name: 'Jane', age: 22 },
//     { id: 'e3', name: 'Jim', age: 15 },
//     { id: 'e4', name: 'Jill', age: 30 },
// ];

// const keyedObject = data.reduce((acc,item) => {
//     const { id } = item;

//     acc[id] = { ...item };

//     return acc;
// }, {});

// console.log(keyedObject);


/* ------------------------------------------------------------------------------------------------------------------- */


// const data = [
//     { id: 'e1', name: 'John', age: 17 },
//     { id: 'e2', name: 'Jane', age: 22 },
//     { id: 'e3', name: 'Jim', age: 15 },
//     { id: 'e4', name: 'Jill', age: 30 },
// ];

// const replaceValue = (arr, key, oldValue, newValue) => {
//     const findedObject = arr.find((item) => item[key] === oldValue);
//     findedObject[key] = newValue;

//     return arr;
// };

// const newArr = replaceValue(data, 'age', 22, 23);

// console.log(newArr);


/* ------------------------------------------------------------------------------------------------------------------- */


// const data = [
//     { id: 'e1', category: 'Fruit', type: 'Apple' },
//     { id: 'e2', category: 'Fruit', type: 'Orange' },
//     { id: 'e3', category: 'Vegetable', type: 'Carrot' },
//     { id: 'e4', category: 'Fruit', type: 'Apple' },
//     { id: 'e5', category: 'Vegetable', type: 'Broccoli' },
// ];

// const groupBy = data.reduce((obj, item) => {
//     const { category } = item;

//     if(category === 'Fruit'){
//         const filteredFruit = data.filter((item2) => item2.category === 'Fruit');
//         obj[category] = [...filteredFruit];
//     }else if(category === 'Vegetable'){
//         const filteredVegetable = data.filter((item2) => item2.category === 'Vegetable');
//         obj[category] = [...filteredVegetable];
//     }

//     return obj;
// }, {});

// console.log(groupBy);

/* ------------------------------------------------------------------------------------------------------------------- */


// const chunkArray = (arr, size) => {
//     const result = [];
//     for (let i = 0; i < arr.length; i += size) {
//         result.push(arr.slice(i, i + size));
//     }
//     return result;
// };

// const data = [1, 2, 3];
// console.log(chunkArray(data, 2)); 


/* ------------------------------------------------------------------------------------------------------------------- */


// const nestedArray = [1, [2, [3, [4, [5]]]]];

// const flattenArray = (arr) => {
//     const newArr = arr.reduce((flat, toFlatten) => {
//         if (Array.isArray(toFlatten)) {
//             flat = flat.concat(flattenArray(toFlatten));
//         } else {
//             flat.push(toFlatten);
//         }
//         return flat;
//     }, []);
//     return newArr;
// };

// console.log(flattenArray(nestedArray));  


/* ------------------------------------------------------------------------------------------------------------------- */


// const arr = [
//     { id: 't1', typ: 'Income', amont: 100 },
//     { id: 't2', typ: 'Expense', amont: 50 },
//     { id: 't3', typ: 'Income', amont: 200 },
//     { id: 't4', typ: 'Expense', amont: 150 },
//     { id: 't5', typ: 'Income', amont: 300 },
// ];

// const obj = arr.reduce((acc,item) => {
//     const { typ } = item;

//     if(!acc[typ]) {
//         acc[typ] = {
//             count: 1,
//             totalAmount: item.amont
//         };
//     }else{
//         acc[typ] = {
//             count: acc[typ].count + 1,
//             totalAmount: acc[typ].totalAmount + item.amont
//         };
//     }

//     return acc;
// }, {});

// console.log(obj);


/* ------------------------------------------------------------------------------------------------------------------- */


// const items = [
//     { id: 'a1', value: 10 },
//     { id: 'a2', value: 20 },
//     { id: 'a1', value: 10 },
//     { id: 'a3', value: 30 },
//     { id: 'a2', value: 20 },
// ];

// const filteredArr = items.reduce((arr,item) => {
//     const { id } = item;

//     const findedIndex = arr.find((item) => item.id === id);

//     if(!findedIndex) {
//         arr.push(item)
//     }

//     return arr;
// }, []);

// console.log(filteredArr);


/* ------------------------------------------------------------------------------------------------------------------- */


// const people = [
//     { name: 'John', age: 25, city: 'New York' },
//     { name: 'Jane', age: 22, city: 'San Francisco' },
//     { name: 'John', age: 30, city: 'Chicago' },
//     { name: 'Jane', age: 22, city: 'New York' },
// ];

// people.sort((a, b) => {
//     if (a.name === b.name) {
//         return a.age - b.age;
//     }
//     return a.name.localeCompare(b.name);
// });

// console.log(people);


/* ------------------------------------------------------------------------------------------------------------------- */


// const arr1 = [
//     { id: '1', value: 'A' },
//     { id: '2', value: 'B' },
//     { id: '3', value: 'C' },
// ];

// const arr2 = [
//     { id: '2', value: 'X' },
//     { id: '3', value: 'Y' },
//     { id: '4', value: 'Z' },
// ];

// const mergedArr = arr2.reduce((totalArr, item) => {
//     const { id } = item;

//     const findedIndex = totalArr.find((item2) => item2.id === id);

//     if(!findedIndex) {
//         totalArr.push(item)
//     }

//     return totalArr;

// }, [...arr1]);

// console.log(mergedArr);


/* ------------------------------------------------------------------------------------------------------------------- */


// const products = [
//     { id: 'p1', name: 'Laptop', price: 1000 },
//     { id: 'p2', name: 'Phone', price: 500 },
//     { id: 'p3', name: 'Tablet', price: 300 },
// ];

// const affordableProducts = products.filter((item) => {
//     if(item.price <= 500) {
//         return item
//     } 
// }).map((item) => {
//     return {
//         ...item,
//         discount: 10
//     }
// });

// console.log(affordableProducts);


/* ------------------------------------------------------------------------------------------------------------------- */


// const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// const obj = words.reduce((acc, item) => {
//     if(!acc[item]) acc[item] = 1;
//     else acc[item] += 1;

//     return acc;
// }, {});

// console.log(obj);


/* ------------------------------------------------------------------------------------------------------------------- */


// const data = [
//     { id: 1, details: { name: 'John', age: 25 } },
//     { id: 2, details: { name: 'Jane', age: 22 } },
//     { id: 3, details: { name: 'Jake', age: 30 } },
// ];

// const newArr = data.map((item) => {
//     return item.details.name
// });

// console.log(newArr);


/* ------------------------------------------------------------------------------------------------------------------- */


// var mergeTwoLists = function(list1, list2) {
//     const newArr = list1;
//     let min = Infinity;
//     const lastArr = [];

//     for(let i=0; i<list2.length; i++){
//         newArr.push(list2[i])
//     }

//     for(let j = 0; j<newArr.length; j++){
//         for(let k = 0; k<newArr.length; k++){
//             if(newArr[k] > newArr[k+1]){
//                 const temp = newArr[k];
//                 newArr[k] = newArr[k+1];
//                 newArr[k+1] = temp;
//             }
//         }
//     }

//     return newArr;

// };

// console.log(mergeTwoLists([1,2,4],[1,3,4]));


/* ------------------------------------------------------------------------------------------------------------------- */


// const obj1 = { a: 1, b: { c: 2, d: 3 } };
// const obj2 = { b: { c: 3, e: 4 }, f: 5 };

// const mergedObj = (o1, o2) => {
//     for(let key1 in o1) {
//         if(!o2[key1]){
//             o2[key1] = o1[key1];
//         }else{
//             mergedObj(o1[key1], o2[key1]);
//         }
//     }

//     return o2;
// };

// console.log(mergedObj(obj1, obj2));


/* ------------------------------------------------------------------------------------------------------------------- */


// const mergeObj = (str, value) => {
//     const arr = str.split(".");
//     const obj = {};
//     let current = obj

//     for(let i=0; i<arr.length; i++) {
//         if(i === arr.length - 1) { 
//             current[arr[i]] = value;
//         }else{
//             current[arr[i]] = {};
//             current = current[arr[i]]; 
//         }
//     }

//     return obj;
// };

// console.log(mergeObj("b.c", 2));


/* ------------------------------------------------------------------------------------------------------------------- */


// const obj = { a: 1, b: 2, c: 3 };

// const arr = Object.keys(obj);

// const transformedObj = arr.reduce((acc, item) => {
//     acc[item] = Number(obj[item]) * 2;
//     return acc;
// }, {}); 

// console.log(transformedObj)


/* ------------------------------------------------------------------------------------------------------------------- */


// const keys = ['a', 'b', 'c'];
// const values = [1, 2, 3];

// const resultObj = keys.reduce((acc,item,index) => {
//     acc[item] = values[index]

//     return acc;
// }, {});

// console.log(resultObj); 


/* ------------------------------------------------------------------------------------------------------------------- */


// const objectToQueryString = (params) => {
//     let query = "";

//     for(let key in params) {
//         query += `${key}=${params[key]}&`;
//     }

//     let arr = query.split("");
//     arr.pop();
//     let newStr = arr.join("");

//     return newStr;
// };

// const obj = { search: 'test', page: 1, size: 20 };

// console.log(objectToQueryString(obj));


/* ------------------------------------------------------------------------------------------------------------------- */


// const data = [
//     { name: 'Alice', group: 'A' },
//     { name: 'Bob', group: 'B' },
//     { name: 'Charlie', group: 'A' },
// ];

// const obj = data.reduce((acc,item) => {
//     const { group } = item;

//     if(!acc[group]) {
//         acc[group] = [{ ...item }]
//     }else{
//         acc[group] = [...acc[group], { ...item }]
//     }

//     return acc;
// }, {});

// console.log(obj);


/* ------------------------------------------------------------------------------------------------------------------- */


// const nested = { a: 1, b: { c: 2, d: { e: 3 } } };

// const obj = {};

// function getNestedObj(outerObj, outerKey) {
//     let str = `${outerKey}`;

//     for(let key in outerObj) {
//         if(typeof outerObj[key] === 'object') {
//             str += `.${key}`;
//             getNestedObj(outerObj[key], str);
//         }else{
//             obj[`${str}.${key}`] = outerObj[key];
//         }
//     }
// };

// for(let key in nested) {
//     if(typeof nested[key] === 'object') {
//         getNestedObj(nested[key], key);
//     }else{  
//         obj[key] = nested[key];
//     }
// }

// console.log(obj);


/* ------------------------------------------------------------------------------------------------------------------- */


// const flatObj = { 'a': 1, 'b.c': 2, 'b.d.e': 3 };

// const obj = {};

// const getNestedObj = (str, val) => {
//     const arr = str.split(".");
//     let current = obj;

//     arr.forEach((key, index) => {
//         if (index === arr.length - 1) {
//             current[key] = val;
//         } else {
//             current[key] = current[key] || {};
//             current = current[key];
//         }
//     });
// };

// for (let key in flatObj) {
//     if (!key.includes(".")) {
//         obj[key] = flatObj[key];
//     } else {
//         getNestedObj(key, flatObj[key]);
//     }
// }

// console.log(obj);


/* ------------------------------------------------------------------------------------------------------------------- */


// const arr1 = ["I want to become", "a professional front end", "developer"];

// const arr2 = arr1.map((item,index) => {
//     if(index === arr1.length - 1) {
//         return item;
//     }

//     // const startItem = item.padEnd(item.length + 1, " ");
    
//     // return startItem;

//     return item + " ";
// });

// const str = arr2.join("");

// const resultArr = str.split(" ");

// console.log(resultArr);


/* ------------------------------------------------------------------------------------------------------------------- */


// const products = [
//     { id: 1, category: 'electronics', name: 'Laptop', price: 1000 },
//     { id: 2, category: 'electronics', name: 'Smartphone', price: 700 },
//     { id: 3, category: 'furniture', name: 'Chair', price: 100 },
//     { id: 4, category: 'furniture', name: 'Table', price: 150 },
// ];
  
// function groupByCategory(products) {
//     const newObj = Object.groupBy(products, (item) => item.category);

//     return newObj;
// };

// console.log(groupByCategory(products));


/* ------------------------------------------------------------------------------------------------------------------- */


// const original = {
//     name: 'John',
//     age: 30,
//     address: {
//       city: 'New York',
//       zip: '10001'
//     },
//     hobbies: ['reading', 'traveling'],
// };
  
// function deepClone(obj) {
//     return JSON.parse(JSON.stringify(obj));
// }
  
// const cloned = deepClone(original);
// cloned.name = 'Ilkin';
// console.log(cloned);  
// console.log(original);  


/* ------------------------------------------------------------------------------------------------------------------- */


// const users = [
//     { id: 1, name: 'Alice', age: 25 },
//     { id: 2, name: 'Bob', age: 30 },
//     { id: 3, name: 'Alice', age: 22 },
//     { id: 4, name: 'Charlie', age: 30 },
// ];
  
// function uniqueByProperty(arr) {
//     return arr.filter((item, index) => {
//         const { name } = item;

//         const findedIndex = arr.findLastIndex((obj) => obj.name === name);

//         if(findedIndex === index) {
//             return item;
//         }
//     });
// }
  
// const uniqueUsers = uniqueByProperty(users);
// console.log(uniqueUsers);


/* ------------------------------------------------------------------------------------------------------------------- */


// const nestedArray = [1, [2, 3, [4, [5, 6, [3,5]]]], 7];

// function flattenArray(arr) {
//   return arr.flat(4);
// }

// const flatArray = flattenArray(nestedArray);
// console.log(flatArray); 


/* ------------------------------------------------------------------------------------------------------------------- */


// const transactions = [
//     { id: 1, type: 'deposit', amount: 100 },
//     { id: 2, type: 'withdrawal', amount: 50 },
//     { id: 3, type: 'deposit', amount: 200 },
//     { id: 4, type: 'deposit', amount: 150 },
//     { id: 5, type: 'withdrawal', amount: 100 },
// ];

// function mostFrequent(arr) {
//     let maxCount = 0;
//     let selectedKey;
    
//     const newObj = arr.reduce((acc,item) => {
//         const { type } = item;

//         if(!acc[type]) acc[type] = 1;
//         else acc[type] += 1;

//         return acc;
//     }, {});

//     for(let key in newObj) {
//         if(maxCount < newObj[key]) {
//             maxCount = newObj[key];
//             selectedKey = key;
//         }
//     }

//     return selectedKey;
// }

// const mostFrequentType = mostFrequent(transactions);
// console.log(mostFrequentType);  


/* ------------------------------------------------------------------------------------------------------------------- */


// const obj = { a: 1, b: 2, c: 3, d: 4 };
// const keys = ['a', 'c'];
// const filteredObj = Object.keys(obj);

// const resultObj = filteredObj.reduce((acc,item) => {
//     if(keys.includes(item)) {
//         acc[item] = obj[item];
//     }

//     return acc;
// }, {});

// console.log(resultObj);


/* ------------------------------------------------------------------------------------------------------------------- */


// function hasNestedProperty(obj, path) {
//     return path.split('.').reduce((o, key) => (o && o.hasOwnProperty(key) ? o[key] : undefined), obj) !== undefined;
// }
  
// const obj = { a: { b: { c: 1 } } };
// console.log(hasNestedProperty(obj, 'a.b.c')); // true
// console.log(hasNestedProperty(obj, 'a.b.d')); // false
  

/* ------------------------------------------------------------------------------------------------------------------- */


// const obj = { a: 1, b: 2, c: 3 };  // Result: { 1: 'a', 2: 'b', 3: 'c' };

// const arr = Object.entries(obj);

// const newArr = arr.map((item) => [item[1], item[0]]);

// const newObj = Object.fromEntries(newArr);

// console.log(newObj);


/* ------------------------------------------------------------------------------------------------------------------- */


// const data = [
//     { name: 'Alice', role: 'admin' },
//     { name: 'Bob', role: 'user' },
//     { name: 'Charlie', role: 'admin' },
// ];


// SOLUTION 1

// const resultObj = data.reduce((acc,item) => {
//     const { role } = item;

//     if(!acc[role]) acc[role] = [item];

//     else acc[role] = [ ...acc[role], {...item} ];

//     return acc;
// }, {});

// console.log(resultObj); 


// SOLUTION 2

// const resultObj = Object.groupBy(data, (item) => item.role);
// console.log(resultObj);


/* ------------------------------------------------------------------------------------------------------------------- */


// const sentence = "hello world from chatgpt";

// const arr = sentence.split(" ");

// const newArr = arr.map((item) => {
//     const itemArr = item.split("");

//     const upArr = itemArr.map((element, index) => {
//         if(index === 0) {
//             return element.toLocaleUpperCase();
//         }

//         return element;
//     });

//     const str = upArr.join("");

//     return str;
// });

// console.log(newArr.join(" "));


// function capitalizeWords(str) {
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }
  
// const sentence = "hello world from chatgpt";
// console.log(capitalizeWords(sentence)); 
  

/* ------------------------------------------------------------------------------------------------------------------- */

  
// const arr1 = [1,2,3,4,5];
// const arr2 = [3,4,5,6,7];

// const mergedArray = arr1.concat(arr2);

// const newSet = new Set([...mergedArray]);

// console.log(Array.from(newSet));


/* ------------------------------------------------------------------------------------------------------------------- */


// const arr1 = [1,2,3,4,5];
// const arr2 = [3,4,5,6,7];

// const mergedArray = arr1.concat(arr2);

// const newArr = mergedArray.filter((item,index) => mergedArray.lastIndexOf(item) !== index)

// console.log(newArr);


/* ------------------------------------------------------------------------------------------------------------------- */


// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };

// const keys = Object.keys(obj);

// const newObj = keys.reduce((acc,item) => {
//     acc[item] = obj[item] * 3;
//     return acc;
// }, {});

// console.log(newObj);


/* ------------------------------------------------------------------------------------------------------------------- */


// const users = [
//     { name: "Alice", age: 22, city: "New York" },
//     { name: "Bob", age: 27, city: "San Francisco" },
//     { name: "Charlie", age: 30, city: "Chicago" },
//     { name: "David", age: 23, city: "Los Angeles" },
//     { name: "Eve", age: 28, city: "New York" }
// ];

// const namesUsingFilterMap = users.filter(user => user.age > 25).map(user => user.name);

// console.log(namesUsingFilterMap);

// const namesUsingReduce = users.reduce((acc, user) => {
//     if (user.age > 25) {
//         acc.push(user.name);
//     }
//     return acc;
// }, []);

// console.log(namesUsingReduce); 


/* ------------------------------------------------------------------------------------------------------------------- */


// const data = [
//     {
//         name: 'Ilkin', 
//         age: 24, 
//         married: false,
//         jobs: ["Frontend", "Backend", "Software"]
//     },
//     {
//         name: 'Elvin', 
//         age: 25, 
//         married: true,
//         jobs: ["HR", "Backend", "Insaat"]
//     },
//     {
//         name: 'Cavid', 
//         age: 24, 
//         married: false,
//         jobs: ["Televoting", "Backend", "Software"]
//     }
// ];

// const allJobs = data.flatMap(item => item.jobs);

// const jobCounts = allJobs.reduce((counts, job) => {
//     counts[job] = (counts[job] || 0) + 1;
//     return counts;
// }, {});

// const numberOfPeople = data.length;
// const commonJobs = Object.keys(jobCounts).filter(job => jobCounts[job] === numberOfPeople);

// console.log(commonJobs);


/* ------------------------------------------------------------------------------------------------------------------- */


// const arr1 = [1, 2, 2, 4];
// const arr2 = [4, 3, 2, 1];

// const isEqual = arr1.length === arr2.length && arr1.sort().every((item, index) => item === arr2.sort()[index]);

// console.log(isEqual); 


/* ------------------------------------------------------------------------------------------------------------------- */


// const arr1 = ["Ilkin", "Abi", "Fariz"];
// const arr2 = ["Fariz", "Abi", "Ilkin"];

// const isEqual = arr1.length === arr2.length && arr1.sort().every((item,index) => item === arr2.sort()[index]);

// console.log(isEqual);


/* ------------------------------------------------------------------------------------------------------------------- */


// var lengthOfLongestSubstring = function(s) {
//     let maxCount = 0;
//     let start = 0;
//     let charIndexMap = new Map();

//     for (let end = 0; end < s.length; end++) {
//         if (charIndexMap.has(s[end])) {
//             start = Math.max(charIndexMap.get(s[end]) + 1, start);
//         }
//         charIndexMap.set(s[end], end);
//         maxCount = Math.max(maxCount, end - start + 1);
//     }

//     return maxCount;
// };

// console.log(lengthOfLongestSubstring("dfdv"));



/* ------------------------------------------------------------------------------------------------------------------- */


// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 213;
// a[c] = 413;

// console.log(a);


/* ------------------------------------------------------------------------------------------------------------------- */


// var searchRange = function(nums, target) {
//     const findFirst = nums.findIndex((item) => item === target);
//     const findLast = nums.findLastIndex((item) => item === target);

//     return [findFirst, findLast];
// };

// console.log(searchRange([5,7,7,8,8,10], 8));


/* ------------------------------------------------------------------------------------------------------------------- */


// var multiply = function(num1, num2) {
//     const int1 = BigInt(num1);
//     const int2 = BigInt(num2);

//     const hasil = int1 * int2;
//     return hasil.toString();
// };

// console.log(multiply("123456789", "987654321"));


/* ------------------------------------------------------------------------------------------------------------------- */


// const data = [
//     {
//         name: 'Ilkin', 
//         age: 24, 
//         married: false,
//         jobs: ["HR", "Backend", "Software"]
//     },
//     {
//         name: 'Elvin', 
//         age: 25, 
//         married: true,
//         jobs: ["HR", "Backend", "Insaat"]
//     },
//     {
//         name: 'Cavid', 
//         age: 24, 
//         married: false,
//         jobs: ["Insaat", "Backend", "Software"]
//     }
// ];

// const newArr = data.map((item) => {
//     const { jobs } = item;
//     const [ el1,el2,el3 ] = jobs.map((element) => element);

//     return {
//         ...item,
//         [el1]: el1,
//         [el2]: el2,
//         [el3]: el3,
//     }
// });

// console.log(newArr);


/* ------------------------------------------------------------------------------------------------------------------- */