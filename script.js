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

//     return { id, description, age }
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

// function Zero(arr) {
//     const newArr = [];
//     const zeros = [];

//     arr.forEach((item) => {
//         if(item === 0) {
//             zeros.push(item);
//         }else{
//             newArr.push(item);
//         }
//     });

//     newArr.sort((a,b) => a - b);

//     const i = newArr.concat(zeros);

//     return i;
// };

// console.log(Zero([0,1,0,12,3]));

/* ------------------------------------------------------------------------------------------------------------------- */

// var minimumLength = function(s) {
//     if(s.length > 2 * Math.pow(10, 5)) {
//         return 0;
//     }
//     const arr = s.split("");

//     for(let i=0; i<arr.length; i++) {
//         const starArr = arr.toSpliced(i, 1, "*");
//         const newStr = starArr.join("");
//         const newArr = newStr.split("*");

//         if(newArr[0].includes(arr[i]) && newArr[1].includes(arr[i])) {
//             const index1 = newArr[0].split("").findIndex((item) => item === arr[i]);
//             const index2 = newArr[1].split("").findIndex((item) => item === arr[i]) + newArr[0].length;

//             arr.splice(index1, 1);
//             arr.splice(index2, 1);
//             i = 0;
//         }
//     }

//     return arr.join("");
// };

// console.log(minimumLength("npmrundevn"));

/* ------------------------------------------------------------------------------------------------------------------- */

// var compress = function(chars) {
//     if(chars.length > 2000 || chars.length === 0) {
//         return 0;
//     }

//     const newObj = chars.reduce((acc,item) => {
//         if(!acc[item]) acc[item] = 1;
//         else acc[item] += 1;

//         return acc;
//     }, {});

//     let resultStr = "";

//     for(let key in newObj) {
//         if(newObj[key] === 1) {
//             resultStr += key;
//         }else{
//             resultStr += `${key}${newObj[key]}`
//         }
//     }

//     const arr = resultStr.split("");

//     arr.forEach((item,index) => {
//         chars[index] = item;
//     });

//     return resultStr.length;
// };

// console.log(compress(["a","a","a","b","b","a","a"]));

/* ------------------------------------------------------------------------------------------------------------------- */

// var compress = function(chars) {
//     if(chars.length > 2000 || chars.length === 0) {
//         return 0;
//     }

//     let str = "";
//     let count = 0;

//     for(let i=0; i<chars.length; i+=count) {
//         count = 0;

//         for(let j=i; j<chars.length; j++) {
//             if(chars[i] === chars[j]) {
//                 count++;
//             }else{
//                 break;
//             }
//         }

//         if(count > 1) {
//             str += (chars[i] + count);
//         }else{
//             str += chars[i];
//         }
//     }

//     const newArr = str.split("");

//     newArr.forEach((item,index) => {
//         chars[index] = item;
//     });

//     return str.length;
// };

// console.log(compress(["a","a","a","b","b","a","a"]));

/* ------------------------------------------------------------------------------------------------------------------- */

// var frequencySort = function(s) {
//     if(s.lenght > 5 * Math.pow(10,5) || s.lenght === 0) return "";

//     const arr = s.split("");
//     let resultArr = [];
//     let maxCount = 0;

//     const obj = arr.reduce((acc,item) => {
//         if(!acc[item]) acc[item] = 1;
//         else acc[item] += 1;

//         return acc;
//     }, {});

//     const entries = Object.entries(obj);

//     entries.sort((a,b) => b[1]-a[1]);

//     const sortedObj = Object.fromEntries(entries);

//     for(let key in sortedObj) {
//         if(sortedObj[key] >= maxCount) {
//             maxCount = sortedObj[key];
//             for(let i=0; i<sortedObj[key]; i++) {
//                 resultArr.unshift(key);
//             }
//         }else{
//             for(let i=0; i<sortedObj[key]; i++) {
//                 resultArr.push(key);
//             }
//         }
//     }

//     return resultArr.join("");
// };

// console.log(frequencySort("2a554442f544asfasssffffasss"));

/* ------------------------------------------------------------------------------------------------------------------- */

// var deleteDuplicates = function(head) {
//     const frequency = {};

//     for (let i=0; i<head.length; i++) {
//         frequency[head[i]] = (frequency[head[i]] || 0) + 1;
//     }

//     const newArr = head.filter(element => frequency[element] === 1);

//     return newArr;
// };

// console.log(deleteDuplicates([1,2,3,3,4,4,5]));

/* ------------------------------------------------------------------------------------------------------------------- */

// var partition = function(head, x) {
//     let lessThanX = [];
//     let greaterThanOrEqualX = [];

//     head.forEach(item => {
//         if (item < x) {
//             lessThanX.push(item);
//         } else {
//             greaterThanOrEqualX.push(item);
//         }
//     });

//     return lessThanX.concat(greaterThanOrEqualX);
// };

// console.log(partition([1,4,3,2,5,2], 3));

/* ------------------------------------------------------------------------------------------------------------------- */

// var subsetsWithDup = function(nums) {
//     if(nums.length === 0) {
//         return [];
//     }

//     const result = [[]];

//     for(let i=0; i<nums.length; i++) {
//         let arr = [];

//         for(let j=i; j<nums.length; j++) {
//             const newArr = arr.concat(nums[j]);
//             newArr.sort((a,b) => a-b);
//             arr.push(nums[j]);

//             if(!JSON.stringify(result).includes(JSON.stringify(newArr))) {
//                 result.push(newArr);
//             }
//         }
//     }

//     return result;
// };

// console.log(subsetsWithDup([1,2,2]));

/* ------------------------------------------------------------------------------------------------------------------- */

// var longestPalindrome = function(s) {
//     if(s.length > 1000 || s.length < 1) {
//         return "";
//     };

//     const palindromeTexts = [];

//     function isPalindrome(text) {
//         const reversedText = text.split("").reverse().join("");

//         if(text === reversedText) {
//             palindromeTexts.push(text);
//         }
//     };

//     for(let i=0; i<s.length; i++) {
//         let content = "";
//         for(let j=i; j<s.length; j++) {
//             content += s[j];
//             if(content.length >= 1) {
//                 isPalindrome(content);
//             }
//         }
//     };

//     let longestPlndrm = "";

//     palindromeTexts.forEach((item) => {
//         if(item.length > longestPlndrm.length) {
//             longestPlndrm = item;
//         }
//     });

//     return longestPlndrm;
// };

// console.log(longestPalindrome("babad"));

/* ------------------------------------------------------------------------------------------------------------------- */

// var intersect = function(nums1, nums2) {
//     let arr = [];

//     for(let i=0; i<nums1.length; i++) {
//         for(let j=0; j<nums2.length; j++) {
//             if(nums1[i] === nums2[j]) {
//                 nums2.splice(j, 1);
//                 arr.push(nums1[i]);
//                 break;
//             }
//         }
//     }

//     return arr;
// };

// console.log(intersect([12,3,4],[12,3,5]));

/* ------------------------------------------------------------------------------------------------------------------- */

// const findDublicates = (arr) => {
//     return arr.reduce((acc,item,index) =>  {
//         arr.lastIndexOf(item) !== index && !acc.includes(item) && acc.push(item);
//         return acc;
//     },[]);
// };

// console.log(findDublicates([1,1,1,2,3,3,4,4,5,5,6,7,8,8]));

/* ------------------------------------------------------------------------------------------------------------------- */

// function miniMaxSum(arr) {
//     arr.sort((a, b) => a - b);

//     let minSum = arr.slice(0, 4).reduce((sum, num) => sum + num, 0);

//     let maxSum = arr.slice(1, 5).reduce((sum, num) => sum + num, 0);

//     return [minSum, maxSum];
// }

// console.log(miniMaxSum([1,2,5,63,2,34]));

/* ------------------------------------------------------------------------------------------------------------------- */

// function kangaroo(x1, v1, x2, v2) {
//     let differ = Math.abs(x1-x2);

//     for(let i=0; i<Infinity; i++) {
//         x1+=v1;
//         x2+=v2;
//         if(x1 === x2) {
//             return "YES";
//         }else{
//             if(differ > Math.abs(x1-x2)) {
//                 differ = Math.abs(x1-x2);
//                 continue;
//             }else{
//                 return "NO";
//             }
//         }
//     }
// }

// console.log(kangaroo(0,3,4,2));

/* ------------------------------------------------------------------------------------------------------------------- */

// function migratoryBirds(arr) {
//     let minNum = Infinity;

//     const obj = arr.reduce((acc,item) => {
//         if(!acc[item]) acc[item] = 1;
//         else acc[item] += 1;
//         return acc;
//     }, {});

//     const arrValues = Object.values(obj);

//     let max = Math.max(...arrValues);

//     const arrEntries = Object.entries(obj);

//     const filteredArr = arrEntries.filter((item) => {
//         const [key,value] = item;

//         return value === max;
//     });

//     filteredArr.forEach((item) => {
//         let [key] = item;

//         if(key < minNum) {
//             minNum = key;
//         }
//     });

//     return parseInt(minNum);
// }

// console.log(migratoryBirds([1,2,2,2,4,4,4]));

/* ------------------------------------------------------------------------------------------------------------------- */

// function bonAppetit(bill, k, b) {
//     bill.splice(k,1);

//     const totalSum = bill.reduce((total,item) => {
//         total += item;
//         return total;
//     }, 0);

//     const resultSum = b - (totalSum / 2);

//     if(resultSum === 0) {
//         console.log("Bon Appetit");
//     }else{
//         console.log(resultSum);
//     }
// };

// console.log(bonAppetit([3,10,2,9], 1, 7));

/* ------------------------------------------------------------------------------------------------------------------- */

// function sockMerchant(n, ar) {
//     const obj = ar.reduce((acc,item) => {
//         if(!acc[item]) acc[item] = 1;
//         else acc[item] += 1;
//         return acc;
//     }, {});

//     let sum = 0;

//     for(let key in obj) {
//         if(obj[key] > 1) {
//             const total = Math.floor(obj[key] / 2);
//             sum += total;
//         }
//     }

//     return sum;
// }

// console.log(sockMerchant(9,[10,20,20,10,10,10,30,50,20]));

/* ------------------------------------------------------------------------------------------------------------------- */

// function pageCount(n, p) {
//     let count = 0;
//     let startPage = 1;
//     let endPage = n % 2 === 0 ? n : n - 1;
//     const halfOfPages = n / 2;

//     for(let i=0; i<halfOfPages; i++) {
//         if(1 <= p && p <= halfOfPages) {
//             if(startPage >= p) {
//                 return count;
//             }
//             startPage += 2;
//             count++;
//         }else if(halfOfPages <= p && p <= n) {
//             if(endPage <= p) {
//                 return count;
//             }
//             endPage -= 2;
//             count++;
//         }
//     }
// };

// console.log(pageCount(5, 4));

/* ------------------------------------------------------------------------------------------------------------------- */

// function gradingStudents(grades) {
//     const finalGrade = [];

//     grades.forEach((item) => {
//         if(item >= 40) {
//             if(item % 5 < 3) {
//                 finalGrade.push(item);
//             }else if(item % 5 >= 3) {
//                 const resultGrade = Math.ceil(item / 5) * 5;
//                 finalGrade.push(resultGrade);
//             }
//         }else{
//             if(item > 37) {
//                 finalGrade.push(40);
//             }else{
//                 finalGrade.push(item);
//             }
//         }
//     });

//     return finalGrade;
// };

// console.log(gradingStudents([73,67,38,33]));

/* ------------------------------------------------------------------------------------------------------------------- */

// function pickingNumbers(a) {
//     let maxLength = 0;
//     const absoluteNums = [];
//     const checkedNums = [];
//     a.sort((a,b) => a-b);  // [1,1,2,2,2,3]

//     for(let i=0; i<a.length; i++) {
//         const arr = [];
//         if(!checkedNums.includes(a[i])) {
//             for(let j=i; j<a.length; j++) {
//                 if(a[j] - a[i] <= 1) {
//                     arr.push(a[j]);
//                 }
//             }
//         }else{
//             continue;
//         }

//         absoluteNums.push(arr);
//         checkedNums.push(a[i]);
//     }

//     const newSet = new Set(absoluteNums.map((item) => JSON.stringify(item)));
//     const filteredArr = Array.from(newSet).map(item => JSON.parse(item));

//     filteredArr.forEach((item) => {
//         if(item.length >= maxLength) {
//             maxLength = item.length;
//         }
//     })

//     return maxLength;
// };

// console.log(pickingNumbers([1,2,2,3,1,2]));

/* ------------------------------------------------------------------------------------------------------------------- */

// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//     const aCordinates = [];
//     const bCordinates = [];
//     let aCount = 0;
//     let bCount = 0;

//     for(let i=0; i<apples.length; i++) {
//         aCordinates.push(a + apples[i]);
//     }

//     for(let i=0; i<oranges.length; i++) {
//         bCordinates.push(b + oranges[i]);
//     }

//     aCordinates.forEach((item) => {
//         if(s <= item && item <= t) {
//             aCount++;
//         }
//     });

//     bCordinates.forEach((item) => {
//         if(s >= item && item <= t) {
//             bCount++;
//         }
//     });

//     console.log(aCount);
//     console.log(bCount);
// };

// console.log(countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6]));

/* ------------------------------------------------------------------------------------------------------------------- */

// function breakingRecords(scores) {
//     const highest = [];
//     const lowest = [];

//     scores.forEach((item) => {
//         if(highest.length === 0 && lowest.length === 0) {
//             highest.push(item);
//             lowest.push(item);
//         }else {
//             if(highest.at(-1) < item) {
//                 highest.push(item);
//             }else if(lowest.at(-1) > item) {
//                 lowest.push(item);
//             }
//         }
//     });

//     return [highest.length - 1, lowest.length - 1];
// };

// console.log(breakingRecords([10,5,20,20,4,5,2,25,1]));

/* ------------------------------------------------------------------------------------------------------------------- */

// function birthday(s, d, m) {
//     let count = 0;

//     for(let i=0; i<=s.length-m; i++) {
//         let sum = 0

//         for(let j=0; j<m; j++) {
//             sum += s[i+j];
//         }

//         if(sum === d) {
//             count++
//         }
//     }

//     return count;
// };

// console.log(birthday([1,2,1,3,2],3,2));

/* ------------------------------------------------------------------------------------------------------------------- */

// function countingValleys(steps, path) {
//     let count = 0;
//     let seaLevel = 0;

//     for(let i=0; i<steps; i++) {
//         if(path[i] === "U"){
//             seaLevel += 1;

//             if(seaLevel === 0) {
//                 count++
//             }
//         }else{
//             seaLevel -= 1;
//         }
//     }

//     return count;
// };

// console.log(countingValleys(8, "UDDDUDUU"));

/* ------------------------------------------------------------------------------------------------------------------- */

// function getMoneySpent(keyboards, drives, b) {
//     let mostExpensive = -1;

//     keyboards.forEach((k) => {
//         drives.forEach((d) => {
//             let cost = k + d;
//             if (cost <= b && cost > mostExpensive) {
//                 mostExpensive = cost;
//             }
//         });
//     })

//     return mostExpensive;
// }

// console.log(getMoneySpent([40,50,60], [5,8,12], 60));

/* ------------------------------------------------------------------------------------------------------------------- */

// function catAndMouse(x, y, z) {
//     let distanceCatA = Math.abs(x - z);
//     let distanceCatB = Math.abs(y - z);

//     if (distanceCatA < distanceCatB) {
//         return "Cat A";
//     } else if (distanceCatB < distanceCatA) {
//         return "Cat B";
//     } else {
//         return "Mouse C";
//     }
// };

// console.log(catAndMouse(1,2,3));

/* ------------------------------------------------------------------------------------------------------------------- */

// function hurdleRace(k, height) {
//     let difference = 0;
//     const max = Math.max(...height);

//     if(max > k) {
//         difference = max - k;
//     }

//     return difference;
// };

// console.log(hurdleRace(4, [1,6,3,5,2]));

/* ------------------------------------------------------------------------------------------------------------------- */

// function designerPdfViewer(h, word) {
//     const letters = 'abcdefghijklmnopqrstuvwxyz';
//     let indexValues = [];

//     for(let i=0; i<word.length; i++) {
//         const index = letters.indexOf(word[i]);

//         indexValues.push(h[index]);
//     }

//     return Math.max(...indexValues) * indexValues.length;
// };

// console.log(designerPdfViewer([1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,7],"zaba"));

/* ------------------------------------------------------------------------------------------------------------------- */

// function utopianTree(n) {
//     let sum = 1;
//     if(n === 0) return sum;

//     for(let i=1; i<=n; i++) {
//         if(i % 2 === 0) {
//             sum += 1;
//         }else if(i % 2 === 1) {
//             sum *= 2;
//         }
//     }

//     return sum;
// };

// console.log(utopianTree(5));

/* ------------------------------------------------------------------------------------------------------------------- */

// function angryProfessor(k, a) {
//     let count = 0;

//     a.forEach(element => {
//         if(element <= 0) {
//             count++;
//         }
//     });

//     if(count >= k) {
//         return "NO";
//     }

//     return "YES";
// }

// console.log(angryProfessor(3,[-1,-3,0,2]));

/* ------------------------------------------------------------------------------------------------------------------- */

// function beautifulDays(i, j, k) {
//     let count = 0;

//     for(let a=i; a<=j; a++) {
//         const num = parseInt(a.toString().split("").toReversed().join(""));

//         if(Number.isInteger(Math.abs(a-num)/k)) count++;
//     }

//     return count;
// };

// console.log(beautifulDays(20,23,6));

/* ------------------------------------------------------------------------------------------------------------------- */

// function viralAdvertising(n) {
//     let num = 2;
//     let total = num;
//     if(n === 1) return sum;

//     for(let i=2; i<=n; i++) {
//         num = (Math.floor(num / 2 * 3));
//         total += num;
//     }

//     return total;
// };

// console.log(viralAdvertising(5));

/* ------------------------------------------------------------------------------------------------------------------- */

// function saveThePrisoner(n, m, s) {
//     let count = 0;
//     let loop = m/n > 1 ? Math.ceil(m/n) : 1;

//     for(let i=1; i<=loop; i++) {
//         for(let j=s; j<=n; j++) {
//             count++;
//             if(count === m) {
//                 return j
//             }
//             if(j === n) {
//                 s=1;
//             }
//         }
//     }
// };

// console.log(saveThePrisoner(5,2,2));

/* ------------------------------------------------------------------------------------------------------------------- */

// function circularArrayRotation(a, k, queries) {
//     for(let i=1; i<=k; i++) {
//         const item = a.pop();
//         a.unshift(item);
//     }

//     for(let i=0; i<queries.length; i++) {
//         console.log(a[queries[i]]);
//     }
// };

// console.log(circularArrayRotation([100,200,300,400,500,600,700],2,[0,2,4,6,1]));

/* ------------------------------------------------------------------------------------------------------------------- */

// function permutationEquation(p) {
//     let n = p.length;
//     let result = [];

//     for (let x = 1; x <= n; x++) {
//         let index1 = p.indexOf(x) + 1;

//         let index2 = p.indexOf(index1) + 1;

//         result.push(index2);
//     }

//     return result;
// };

// console.log(permutationEquation([4,3,5,1,2]));

/* ------------------------------------------------------------------------------------------------------------------- */

// function findDigits(n) {
//     const arr = n.toString().split("");
//     let result = 0;

//     arr.forEach((item) => {
//         if(n % Number(item) === 0) {
//             result++;
//         }
//     });

//     return result;
// }

// console.log(findDigits(124));

/* ------------------------------------------------------------------------------------------------------------------- */

// function extraLongFactorials(n) {
//     let bigInt = BigInt(n);

//     if (bigInt === 1n) return BigInt(1);
//     else return bigInt * extraLongFactorials(bigInt - 1n);
// }

// console.log(extraLongFactorials(25));

/* ------------------------------------------------------------------------------------------------------------------- */

// function appendAndDelete(s, t, k) {
//     let commonLength = 0;
//     for (let i = 0; i < Math.min(s.length, t.length); i++) {
//         if (s[i] === t[i]) {
//             commonLength++;
//         } else {
//             break;
//         }
//     }

//     const totalOperations = (s.length - commonLength) + (t.length - commonLength);

//     if (totalOperations > k) {
//         return 'No';
//     } else if ((k - totalOperations) % 2 === 0 || k >= s.length + t.length) {
//         return 'Yes';
//     } else {
//         return 'No';
//     }
// };

// console.log(appendAndDelete("hackerhappy", "hackerrank", 9));

/* ------------------------------------------------------------------------------------------------------------------- */

// var findRelativeRanks = function(score) {
//     let max = Math.max(...score);
//     let result = [];

//     function lessFunc(n) {
//         let count = 0;

//         score.forEach((item) => {
//             if(n < item) {
//                 count++;
//             }
//         })

//         return count;
//     }

//     score.forEach((item) => {
//         if(item === max){
//             result.push("Gold Medal");
//         }else{
//             const place = lessFunc(item) + 1;

//             if(place === 2) {
//                 result.push("Silver Medal");
//             }else if(place === 3) {
//                 result.push("Bronze Medal");
//             }else{
//                 result.push(`${place}`)
//             }
//         }
//     });

//     return result;
// };

// console.log(findRelativeRanks([5,4,3,2,1]));

/* ------------------------------------------------------------------------------------------------------------------- */

// function promiseFunc() {
//   return new Promise((resolve, reject) => {
//     if (Math.random() > 0.7) {
//       resolve("Promise success");
//     } else {
//       reject("Promise error");
//     }
//   });
// }

// function retryPromise(fn, options = {}) {
//   const { retries = 3, delay = 1000, onRetry = () => {} } = options;

//   let attempt = 1;

//   return new Promise((resolve, reject) => {
//     const attemptExecution = () => {
//       fn()
//         .then(resolve)
//         .catch((error) => {
//           if (attempt < retries) {
//             onRetry(attempt);
//             attempt++;
//             setTimeout(attemptExecution, delay);
//           } else {
//             reject(error);
//           }
//         });
//     };

//     attemptExecution();
//   });
// }

// retryPromise(promiseFunc, {
//   retries: 5,
//   delay: 500,
//   onRetry: (attempt) => console.log(`Retrying: ${attempt}`),
// })
//   .then(console.log)
//   .catch(console.error);

/* ------------------------------------------------------------------------------------------------------------------- */


// const students = [
//     { name: "Alice", grades: [85, 92, 88], city: "New York" },
//     { name: "Bob", grades: [70, 75, 78], city: "Los Angeles" },
//     { name: "Charlie", grades: [90, 95, 92], city: "New York" },
//     { name: "Dave", grades: [60, 58, 65], city: "Los Angeles" },
//     { name: "Eve", grades: [88, 85, 91], city: "New York" }
// ];
  
// const threshold = 80;

// const filteredStudents = students.filter((student) => {
//     const { grades } = student;
//     const total = grades.reduce((total,num) => {
//         total += num;
//         return total;
//     });

//     const avarageGrade = Math.trunc(total / 3);

//     if(avarageGrade >= threshold) return student;
// });

// const obj = filteredStudents.reduce((acc, item) => {
//     const { city,name } = item;

//     if(city in acc) {
//         acc[city].push(name);
//     }else{
//         acc[city] = [name];
//     }

//     return acc;
// }, {});

// console.log(obj);


/* ------------------------------------------------------------------------------------------------------------------- */


// const people = [
//     { name: "Alice", age: 25, city: "New York" },
//     { name: "Bob", age: 22, city: "London" },
//     { name: "Charlie", age: 30, city: "New York" },
//     { name: "Dave", age: 23, city: "London" },
//     { name: "Eve", age: 28, city: "Paris" },
// ];


// SOLUTION 1 
// const obj = Object.groupBy(people, (item) => item.city);

// console.log(obj);


// SOLUTION 2
// const obj = people.reduce((acc,item) => {
//     const { city } = item;

//     if(acc[city]) acc[city].push(item)
//     else acc[city] = [item]

//     return acc;
// }, {});

// console.log(obj);


/* ------------------------------------------------------------------------------------------------------------------- */


// const findLongestString = (str) => {
//     const chars = [];
//     let count = 0;
//     let char = "";
//     let longestChar = "";

//     for(let i=0; i<str.length; i++) {
//         for(let j=i; j<str.length; j++) {
//             if(char.includes(str[j])) count++

//             if(count === 1) {
//                 chars.push(char);
//                 char = "";
//                 count = 0;
//                 break;
//             }else{
//                 char += str[j];
//             }
//         }

//         if(chars.at(-1).length > str.length - (i+1)) break;
//     }

//     chars.forEach((char) => {
//         if(char.length > longestChar.length) longestChar = char;
//     }); 
    
//     return longestChar;
// };

// console.log(findLongestString("pwwkew"));


/* ------------------------------------------------------------------------------------------------------------------- */


// const arr = [2,7,11,15];
// const target = 17;

// const getArrayIndex = (arr,target) => {
//     for(let i=0; i<arr.length; i++) {
//         for(let j=i+1; j<arr.length; j++) {
//             if(arr[i] + arr[j] === target) {
//                 return [i,j]
//             }
//         }
//     }
// };

// console.log(getArrayIndex(arr,target));


/* ------------------------------------------------------------------------------------------------------------------- */


// const isValid = (s) => {
//     let parantheses = {
//         "(": ")",
//         "[": "]",
//         "{": "}"
//     };

//     const arr = [];

//     for(let i=0; i<s.length; i++) {
//         if(parantheses[s[i]]){
//             arr.push(s[i]);
//         }else{
//             let searchedKey;
//             for(let key in parantheses) {
//                 if(parantheses[key] === s[i]) {
//                     searchedKey = key;
//                 }
//             }

//             if(!arr.includes(searchedKey)){
//                 return false
//             }

//             if(arr.at(-1) === searchedKey) {
//                 arr.pop()
//             }
//         }
//     }

//     return arr.length === 0;
// };

// console.log(isValid("([]){}(]"));


/* ------------------------------------------------------------------------------------------------------------------- */


// var divide = function(dividend, divisor) {
//     if(dividend < 0 || divisor < 0) {
//         return Math.ceil(dividend / divisor);
//     }else if(dividend > 0 || divisor > 0){
//         return Math.floor(dividend / divisor);
//     }
// };

// console.log(divide(-2147483648, -1));


/* ------------------------------------------------------------------------------------------------------------------- */


// const arrayProducts = (arr) => {
//     const newArr = arr.map((item,index) => {
//         let result = 1;
//         arr.forEach((element,i) => {
//             if(index !== i ) {
//                 result *= element;
//             } 
//         });

//         return result;
//     });

//     return newArr;
// };  

// console.log(arrayProducts([1,2,3,4]));


/* ------------------------------------------------------------------------------------------------------------------- */


// function addTwoNumbers(l1, l2) {
//     const dummy = { val: 0, next: null }; // Dummy head node
//     let current = dummy;
//     let carry = 0;

//     while (l1 || l2 || carry) {
//         const val1 = l1 ? l1.val : 0;
//         const val2 = l2 ? l2.val : 0;

//         // Calculate the sum and carry
//         const total = val1 + val2 + carry;
//         carry = Math.floor(total / 10);

//         // Create a new node for the result
//         current.next = { val: total % 10, next: null };
//         current = current.next;

//         // Move to the next nodes
//         if (l1) l1 = l1.next;
//         if (l2) l2 = l2.next;
//     }

//     return dummy.next;
// }

// function createLinkedList(arr) {
//     const dummy = { val: 0, next: null };
//     let current = dummy;
//     for (const num of arr) {
//         current.next = { val: num, next: null };
//         current = current.next;
//     }
//     return dummy.next;
// }

// function printLinkedList(node) {
//     const result = [];
//     while (node) {
//         result.push(node.val);
//         node = node.next;
//     }
//     console.log(result.join(" -> "));
// }

// const l1 = createLinkedList([2, 4, 3]); 
// const l2 = createLinkedList([5, 6, 4]); 

// const result = addTwoNumbers(l1, l2);

// console.log(printLinkedList(result));


/* ------------------------------------------------------------------------------------------------------------------- */


// function isPalindrome(str) {
//     const reversedStr = str.split("").toReversed().join("");

//     return reversedStr === str;
// };

// var longestPalindrome = function(s) {
//     let longestPalindromeStr = "";

//     for(let i=0; i<s.length; i++) {
//         let str = "";

//         for(let j=i; j<s.length; j++) {
//             str += s[j];
//             const isItPalindrome = isPalindrome(str);
//             if(isItPalindrome && str.length > longestPalindromeStr.length) {
//                 longestPalindromeStr = str;
//             }
//         }
//     }

//     return longestPalindromeStr;
// };

// console.log(longestPalindrome("cbbd"));


/* ------------------------------------------------------------------------------------------------------------------- */


// var lengthOfLongestSubstring = function(s) {
//     let longestStr = "";
//     let str = "";
    
//     for(let i=0; i<s.length; i++) {
//         if(!str.includes(s[i])) {
//             str += s[i];
//         }else if(str.includes(s[i])){     
//             console.log(str.split(s[i]));
                   
//             str = str.split(s[i]).at(-1) + s[i];
//         }else if(str.includes(s[i]) && (s.length - i) < str.length) break;
//         if(str.length > longestStr.length) longestStr = str;
//     }

//     return longestStr;
// };

// console.log(lengthOfLongestSubstring("anviaj"));


/* ------------------------------------------------------------------------------------------------------------------- */


// var myAtoi = function(s) {
//     let str = s.trim();

//     if (!str || (!/^[0-9+-]/.test(str[0]))) {
//         return 0;
//     }
    
//     const num = parseInt(str, 10);

//     if (isNaN(num)) {
//         return 0;
//     }

//     if(num < 0 && Math.abs(num) > Math.pow(2, 31)) return Math.pow(-2, 31); 
//     if(num > 0 && num > Math.pow(2, 31)) return Math.pow(2, 31) - 1; 

//     return parseInt(str);
// };

// console.log(myAtoi("-987654323456765432"));


/* ------------------------------------------------------------------------------------------------------------------- */


// var countAndSay = function(n) {
//     let str = "1";
    
//     if(n === 1) return str;

//     for(let i=2; i<=n; i++) {
//         let count = 1;
//         let copy = str;
//         str = "";
//         for(let j=0; j<copy.length; j++) {
//             if(copy[j] === copy[j+1]) count ++;
//             else {
//                 str += `${count}${copy[j]}`;
//                 count = 1;
//             }        
//         }

//     }

//     return str;
// };

// console.log(countAndSay(6));


/* ------------------------------------------------------------------------------------------------------------------- */


// var rotate = function(matrix) {
//     const result = [];

//     matrix.reverse().forEach(element => {        
//         for(let i=0; i<element.length; i++) {
//             if(!result[i]) result[i] = [element[i]];
//             else result[i].push(element[i])         
//         }
//     });

//     return result
// };

// console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));


/* ------------------------------------------------------------------------------------------------------------------- */


// var maxSubArray = function(nums) {
//     let current_sum = 0;
//     let max_sum = -Infinity;

//     nums.forEach(element => {
//         current_sum = Math.max(current_sum + element, element);
//         if(current_sum > max_sum) {
//             max_sum = Math.max(current_sum, element);
//         }
//     });  
    
//     return max_sum;
// };

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));


/* ------------------------------------------------------------------------------------------------------------------- */


// var sortColors = function(nums) {
//     let n = nums.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (nums[j] > nums[j + 1]) {
//                 [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
//             }
//         }
//     }
// };

// console.log(sortColors([2,0,2,1,1,0]));


/* ------------------------------------------------------------------------------------------------------------------- */


// var uniquePaths = function(m, n) {
//     let count = 0;

//     function backtrack(right = 0, down = 0) {
//         if (right === n - 1 && down === m - 1) {
//             count++;
//             return;
//         }

//         if (right < n - 1) {
//             backtrack(right + 1, down);
//         }

//         if (down < m - 1) {
//             backtrack(right, down + 1);
//         }
//     }

//     backtrack();
//     return count;
// };

// console.log(uniquePaths(23, 12));


/* ------------------------------------------------------------------------------------------------------------------- */


// var findKthLargest = function(nums, k) {
//     const sortedNums = nums.toSorted((a,b) => a-b);

//     for(let i=1; i<k; i++) {
//         sortedNums.pop();
//     }

//     return sortedNums.at(-1);
// };

// console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));


/* ------------------------------------------------------------------------------------------------------------------- */


// var missingNumber = function(nums) {
//     let len = nums.length;
//     let missingNumber = len*(len+1)/2;
//     for (let i of nums){
//         missingNumber -= i;
//     }
//     return missingNumber;
// };

// console.log(missingNumber([9,6,4,2,3,5,7,0,1]));


/* ------------------------------------------------------------------------------------------------------------------- */


// var moveZeroes = function(nums) {
//     for(let i=nums.length-1; i>=0; i--) {
//         if(nums[i] === 0) {
//             nums.splice(i,1);
//             nums.push(0);
//         }
//     }

//     return nums;
// };      

// console.log(moveZeroes([0,0,0,0,1,1]));


/* ------------------------------------------------------------------------------------------------------------------- */


// var threeSumClosest = function(nums, target) {
//     let difference = Infinity;
//     let sum;

//     for(let i=0; i<nums.length; i++) {
//         for(let j=i+1; j<nums.length; j++) {
//             for(let k=j+1; k<nums.length; k++) {
//                 let currentSum = nums[i] + nums[j] + nums[k];
                
//                 if(Math.abs(target - currentSum) < difference) {
//                     difference = Math.abs(target - currentSum);
//                     sum = currentSum;
//                 }
//             }
//         }
//     }

//     return sum;
// };

// console.log(threeSumClosest([1,1,1,0], -100));


/* ------------------------------------------------------------------------------------------------------------------- */


// var removeElement = function(nums, val) {
//     for(let i=0; i<nums.length; i++) {
//         if(nums[i] === val) {
//             nums.splice(i, 1);
//             i--;
//         }
//     }

//     return nums.length;
// };

// console.log(removeElement([0,1,2,2,3,0,4,2], 2));


/* ------------------------------------------------------------------------------------------------------------------- */


// var permute = function(nums) {
//     if (nums.length === 1) {
//         return [nums];
//     }
    
//     var res = [];

//     for (var i = 0; i < nums.length; i++) {
//         var n = nums.shift();
//         var perms = permute([...nums]);

//         for (var p of perms) {
//             p.push(n);
//         }

//         res.push(...perms); 
//         nums.push(n); 
//     }
    
//     return res;  
// };

// console.log(permute([1,2,3]));


/* ------------------------------------------------------------------------------------------------------------------- */


// var permute = function(nums) {
//     if (nums.length === 0) return [];
//     if (nums.length === 1) return [nums];

//     let result = [];

//     function backtrack(current = [], used = Array(nums.length).fill(false)) {
//         if(current.length === nums.length) {
//             result.push([...current]);
//             return;
//         }

//         for(let i=0; i<nums.length; i++) {
//             if(used[i]) continue;

//             current.push(nums[i]);
//             used[i] = true;
//             backtrack(current, used);

//             current.pop();
//             used[i] = false;
//         }
//     }
    
//     backtrack();
//     return result;
// };

// console.log(permute([1, 2, 3]));


/* ------------------------------------------------------------------------------------------------------------------- */


// var removeNthFromEnd = function(head, n) {
//     head.splice(head.length-n, 1);

//     return head;
// };

// console.log(removeNthFromEnd([1,4,2,3,4,5], 2));


/* ------------------------------------------------------------------------------------------------------------------- */


// var countSubarrays = function(nums) {
//     let count = 0;

//     for(let i=0; i<nums.length-2; i++) {
//         let first = nums[i];
//         let middle = nums[i+1];
//         let last = nums[i+2];

//         if(first + last === middle / 2) count++;
//     }

//     return count;
// };

// console.log(countSubarrays([1,2,1,4,1]));


/* ------------------------------------------------------------------------------------------------------------------- */





/* ------------------------------------------------------------------------------------------------------------------- */


// var minimumOperations = function(nums) {
//     let count = 0;
//     while (new Set(nums).size !== nums.length) {
//         nums = nums.slice(3);
//         count++;
//     }
//     return count; 
// };

// console.log(minimumOperations([4,5,6,4,4]));


/* ------------------------------------------------------------------------------------------------------------------- */


// var maxDistinctElements = function(nums, k) {
//     nums.sort((a,b)=>(a-b));
//     const result = [];
//     let count = 0;

//     for(let i=0; i<nums.length; i++) {
//         for(let j=nums[i]-k; j<=nums[i]+k; j++) {            
//             if(!result.includes(j)) {                
//                 result.push(j);
//                 count++;
//                 break;
//             }
//         }
//     }

//     return count;
// };

// console.log(maxDistinctElements([8,7,8,7,10], 1));


/* ------------------------------------------------------------------------------------------------------------------- */


// var hasMatch = function(s, p) {    
//     const parts = p.split("*");
//     const indexOf = s.indexOf(parts[0]);
//     const lastIndexOf = s.lastIndexOf(parts[1]);
//     return indexOf !== -1 && lastIndexOf !== -1 && (indexOf + parts[0].length) <= lastIndexOf;
// }

// console.log(hasMatch("jjv", "*j"));


/* ------------------------------------------------------------------------------------------------------------------- */

// function hasMatch(s, p) {
//     const [a,b] = [p.split("*")[0], p.split("*")[1]];
//     const firstIndex = s.indexOf(p.split("*")[0]);
//     const lastIndex = s.lastIndexOf(b);
//     return firstIndex >= 0 && lastIndex >= firstIndex + a.length; 
// }

// console.log(hasMatch("eetcode", "ee*e"));


/* ------------------------------------------------------------------------------------------------------------------- */


// var jump = function(nums) {
//     let steps = 0;
//     let current_index = 0;
//     let n = nums[0];

//     for(let i=current_index; i<nums.length; i++) {
//         let I = current_index;
//         let N = n;
//         for(let j=i+1; j<=I+N; j++) {
//             n = nums[j];
//             current_index = n + j;
//             if(I > 0 && (j + nums[j] < nums[j-1] + j - 1)) {
//                 n = nums[j-1];
//                 current_index = n + j - 1;
//             }

//             if(current_index >= nums.length - 1) {
//                 steps++;
//                 break;
//             }
//         }
        
//         steps++;

//         if(current_index === nums.length - 1) {
//             break;
//         }
//     }

//     return steps;
// };

// console.log(jump([2,3,1,1,4,1]));


/* ------------------------------------------------------------------------------------------------------------------- */


// function jump(nums) {
//     let steps = 0;
//     let farthest = 0; 
//     let current_end = 0; 

//     for (let i = 0; i < nums.length - 1; i++) {
//         farthest = Math.max(farthest, i + nums[i]);

//         if (i === current_end) {
//             steps++;
//             current_end = farthest;

//             if (current_end >= nums.length - 1) {
//                 break;
//             }
//         }
//     }

//     return steps;
// }

// console.log(jump([1, 2, 1, 3, 1, 2, 1]));


/* ------------------------------------------------------------------------------------------------------------------- */


// var isBalanced = function(num) {
//     let sumOfEven = 0;
//     let sumOfOdd = 0;

//     for(let i=0; i<num.length; i++) {
//         if(i % 2 === 0) {
//             sumOfEven += parseInt(num[i]);
//         }else{
//             sumOfOdd += parseInt(num[i]);
//         }
//     }

//     return sumOfEven === sumOfOdd;
// };

// console.log(isBalanced("3234"));


/* ------------------------------------------------------------------------------------------------------------------- */


// var smallestNumber = function(n, t) {
//     let result;

//     while(true) {
//         const arr = n.toString().split("");
//         const product = arr.reduce((total, num) => {
//             total *= parseInt(num);
//             return total
//         }, 1);

//         if(product % t === 0) {
//             result = n;
//             break;
//         }

//         n++;
//     }

//     return result;
// };

// console.log(smallestNumber(11,2));


/* ------------------------------------------------------------------------------------------------------------------- */


// var canAliceWin = function(n) {
//     for(let i=10; i>0; i--) {
//         n-=i;
//         if(i % 2 === 0) {
//             if(n < 0) return false;
//             else if(n < i - 1) return true;
//         }else if(i % 2 === 1) {
//             if(n < i - 1) return false;
//         }
//     }
// };

// console.log(canAliceWin(1));


/* ------------------------------------------------------------------------------------------------------------------- */


// var buttonWithLongestTime = function(events) {
//     let selectedIndex = events[0][0];
//     let maxTime = events[0][1];

//     for(let i=1; i<events.length; i++) {
//         if(events[i][1] - events[i-1][1] > maxTime) {
//             maxTime = events[i][1] - events[i-1][1];
//             selectedIndex = events[i][0];
//         }else if(events[i][1] - events[i-1][1] === maxTime) {
//             if(events[i][0] < selectedIndex) {
//                 selectedIndex = events[i][0];
//             }
//         }
//     }

//     return selectedIndex;
// };

// console.log(buttonWithLongestTime([[9,4],[19,5],[2,8],[3,11],[2,15]]));


/* ------------------------------------------------------------------------------------------------------------------- */


// var lengthAfterTransformations = function(s, t) {
//     const alphabeth = "abcdefghijklmnopqrstuvwxyz";
//     let result = [s];

//     for(let i=1; i<=t; i++) {
//         const strArr = result[i-1].split("");
                
//         for(let j=0; j<strArr.length; j++) {
//             const index = alphabeth.indexOf(strArr[j]);

//             if(index !== 25) {
//                 strArr[j] = alphabeth[index + 1];
//             }else{
//                 strArr[j] = "ab";
//             }
//         }
//         let str = strArr.join("");        
//         result.push(str);
//     }

//     return result.at(-1).length;
// };

// console.log(lengthAfterTransformations("p", 16));


/* ------------------------------------------------------------------------------------------------------------------- */


// var stableMountains = function(height, threshold) {
//     const result = [];
    
//     for(let i=1; i<height.length; i++) {
//         if(height[i-1] > threshold) {
//             result.push(i);
//         }
//     }

//     return result;
// };

// console.log(stableMountains([10,1,10,1,10],3));


/* ------------------------------------------------------------------------------------------------------------------- */


// var getSneakyNumbers = function(nums) {
//     const result = [];

//     const obj = nums.reduce((acc,num) => {
//         if(!acc[num]) acc[num] = 1;
//         else acc[num] += 1;

//         return acc;
//     }, {});

//     for(let key in obj) {
//         if(obj[key] === 2) {
//             result.push(parseInt(key));
//         }
//     }

//     return result;
// };

// console.log(getSneakyNumbers([0,1,0,1,2]));


/* ------------------------------------------------------------------------------------------------------------------- */


// var minElement = function(nums) {
//     let minNumber = Infinity;

//     const newArr = nums.map((num) => {
//         const sum = num.toString().split("").reduce((total, n) => {
//             total += parseInt(n);
//             return total;
//         }, 0);

//         return sum;
//     });

//     newArr.forEach(element => {
//         if(element < minNumber) {
//             minNumber = element
//         }
//     });

//     return minNumber;
// };

// console.log(minElement([999,19,199]));


/* ------------------------------------------------------------------------------------------------------------------- */


// var maximumTotalSum = function(maximumHeight) {
//     const result = [];
//     let max_num = 0;

//     for(let i=0; i<maximumHeight.length; i++) {
//         for(let j=1; j<=maximumHeight[i]; j++) {
//             if(!result.includes(j) && max_num !== j) {
//                 max_num = j;
//             }
//         }
//         result.push(max_num);
//     }

//     return result
// };

// console.log(maximumTotalSum([2,3,4,3]));


/* ------------------------------------------------------------------------------------------------------------------- */


// var canAliceWin = function(nums) {
//     let double = 0;
//     let single = 0;

//     for(let i=0; i<nums.length; i++) {
//         let isDoubleDigits = nums[i].toString().length === 2;

//         if(isDoubleDigits) {
//             double += nums[i];
//         }else single += nums[i];
//     }

//     if(double === single) return false;
//     else return true;
// };

// console.log(canAliceWin([1,2,3,4,10]));


/* ------------------------------------------------------------------------------------------------------------------- */


// var getFinalState = function(nums, k, multiplier) {
//     while(k > 0) {
//         const min_num = Math.min(...nums);

//         for(let i=0; i<nums.length; i++) {
//             if(nums[i] === min_num) {
//                 nums[i] *= multiplier;
//                 break; 
//             }
//         }

//         k--;
//     }

//     return nums;
// };

// console.log(getFinalState([2,1,3,5,6], 5, 2));


/* ------------------------------------------------------------------------------------------------------------------- */


// var generateKey = function(num1, num2, num3) {
//     let result = "";
//     const arr = [num1.toString(),num2.toString(), num3.toString()];
//     const modifiedArr = arr.map((num) => {
//         const padNum =  num.padStart(4,0);
//         return padNum;
//     });

//     for(let i=0; i<4; i++) {
//         const arr = [];

//         for(let j=0; j<modifiedArr.length; j++) {
//             arr.push(modifiedArr[j][i]);
//         }

//         const minNum = Math.min(...arr);
//         result += minNum;
//     }

//     return parseInt(result);
// };

// console.log(generateKey(987,879,798));


/* ------------------------------------------------------------------------------------------------------------------- */


// var checkTwoChessboards = function(coordinate1, coordinate2) {
//     let letters = "abcdefgh";
//     let index1 = letters.indexOf(coordinate1[0]);
//     let index2 = letters.indexOf(coordinate2[0]);
//     let isBlack1 = false;
//     let isBlack2 = false;

//     if((index1 % 2 === 0 && coordinate1[1] % 2 === 1) || (index1 % 2 === 1 && coordinate1[1] % 2 === 0)) {
//         isBlack1 = true;
//     }
//     if((index2 % 2 === 1 && coordinate2[1] % 2 === 0) || (index2 % 2 === 0 && coordinate2[1] % 2 === 1)) {
//         isBlack2 = true;
//     }

//     return isBlack1 === isBlack2;
// };

// console.log(checkTwoChessboards("a1", "c4"));


/* ------------------------------------------------------------------------------------------------------------------- */


// var scoreOfString = function(s) {
//     let sum = 0;

//     for(let i=1; i<s.length; i++) {
//         sum += Math.abs(s.charCodeAt(i) - s.charCodeAt(i-1))                
//     }

//     return sum;
// };

// console.log(scoreOfString("hello"));


/* ------------------------------------------------------------------------------------------------------------------- */


// var isArraySpecial = function(nums, queries) {
//     const result = [];

//     for(let i=0; i<queries.length; i++) {
//         const start = queries[i][0];
//         const end = queries[i][1];
//         let arr = [];

//         for(let j=start+1; j<=end; j++) {
//             if(nums[j-1] % 2 !== nums[j] % 2) {
//                 arr.push(true);
//             }else arr.push(false);            
//         }        
//         result.push(arr);
//     }

//     const flat = result.map(item => {
//         if(item.includes(false)) return false;
//         return true;
//     });

//     return flat;
// };

// console.log(isArraySpecial([1, 4, 7, 6, 2], [[0, 3], [1, 4], [3, 4]]));


/* ------------------------------------------------------------------------------------------------------------------- */


// function countSpecialLetters(word) {
//     const lowercase = new Set([...word].filter(c => c >= 'a' && c <= 'z'));
//     const uppercase = new Set([...word].filter(c => c >= 'A' && c <= 'Z').map(c => c.toLowerCase()));

//     let specialCount = 0;
//     lowercase.forEach(letter => {
//         if (uppercase.has(letter)) {
//             specialCount++;
//         }
//     });

//     return specialCount;
// }

// console.log(countSpecialLetters("aaAbcBC")); 


/* ------------------------------------------------------------------------------------------------------------------- */


// var addedInteger = function(nums1, nums2) {
//     nums1.sort((a,b) => a-b);
//     nums2.sort((a,b) => a-b);

//     return nums2[0] - nums1[0];
// };

// console.log(addedInteger([2,6,4], [9,7,5]));


/* ------------------------------------------------------------------------------------------------------------------- */


// var jump = function(nums) {
//     if (nums.length <= 1) return 0;

//     let jumps = 0;
//     let current_end = 0;
//     let farthest = 0;

//     for (let i = 0; i < nums.length - 1; i++) {
//         farthest = Math.max(farthest, i + nums[i]);

//         if (i === current_end) {
//             jumps++;
//             current_end = farthest;

//             if (current_end >= nums.length - 1) break;
//         }
//     }

//     return jumps;
// };

// console.log(jump([1, 2, 3, 1, 4, 2, 2, 3, 1])); 


/* ------------------------------------------------------------------------------------------------------------------- */


// var wordBreak = function(s, wordDict) {    
//     for(let i=0; i<wordDict.length; i++) {
//         if(s.includes(wordDict[i])) {
//             s = s.replace(wordDict[i], "");
//         }else{
//             return false;
//         }
//     }

//     return true;
// };

// console.log(wordBreak("applepenapple", ["apple","pen"]));


/* ------------------------------------------------------------------------------------------------------------------- */


// var singleNumber = function(nums) {
//     let result;

//     const obj = nums.reduce((acc,num) => {
//         if(!acc[num]) acc[num] = 1;
//         else acc[num] += 1;

//         return acc;
//     }, {});

//     for(let key in obj) {
//         if(obj[key] === 1) {
//             result = key;
//         }
//     }

//     return parseInt(result);
// };

// console.log(singleNumber([2,2,3,2]));


/* ------------------------------------------------------------------------------------------------------------------- */


// var fib = function(n) {
//     let previous = 0
//     let sum = 1;

//     if(n === 0) return 0;
//     else if(n === 1) return 1;

//     for(let i=2; i<=n; i++) {
//         let prev = previous;
//         previous = sum;
//         sum += prev;
//     }

//     return sum;
// };

// console.log(fib(5))


/* ------------------------------------------------------------------------------------------------------------------- */


// var detectCapitalUse = function(word) {
//     if(word === word.toUpperCase()) return true;

//     const arr = word.split("").map((letter,index) => {
//         if(index === 0) return letter.toUpperCase();
//         else return letter.toLowerCase();
//     });
        
//     if(word === arr.join("")) return true;
//     if(word === word.toLowerCase()) return true;

//     return false;
// };

// console.log(detectCapitalUse("UsA"));


/* ------------------------------------------------------------------------------------------------------------------- */


// var maxProfit = function(prices) {
//     let sum = 0;

//     for(let i=1; i<prices.length; i++) {
//         if((prices[i] > prices[i-1]) && i !== 1) {
//             sum += (prices[i] - prices[i-1]);
//         }
//     }

//     return sum;
// };

// console.log(maxProfit([7,1,5,3,6,4]));


/* ------------------------------------------------------------------------------------------------------------------- */


// var combinationSum = function(candidates, target) {
//     const result = [];
    
//     function backtrack(arr = [], sum = 0, start = 0) {
//         if(sum === target) {
//             result.push([...arr]);
//             return;
//         }

//         for(let i=start; i<candidates.length; i++) {
//             if (sum + candidates[i] > target) continue;
//             arr.push(candidates[i]);
//             backtrack(arr, sum + candidates[i], i); 
//             arr.pop();
//         }
//     }

//     backtrack();
    
//     return result;
// };

// console.log(combinationSum([2,3,6,7], 7));


/* ------------------------------------------------------------------------------------------------------------------- */


// var generate = function(numRows) {
//     const result = [];

//     for(let i=1; i<=numRows; i++) {
//         const arr = [];

//         for(let j=1; j<=i; j++) {
//             if(j > 1) {
//                 arr.push(i+i-1)
//                 if(j === i) {
//                     arr.push(j);
//                 }
//             }else{
//                 arr.push(i);
//             }
//         } 

//         result.push(arr);
//     }

//     return result;
// };

// console.log(generate(5));


/* ------------------------------------------------------------------------------------------------------------------- */


// const splitArr = (arr) => {
//     const freq = {};

//     for (const ele of arr) {
//         freq[ele] = (freq[ele] || 0) + 1;
//     }

//     for (const ele in freq) {
//         if (freq[ele] > 2) {
//             return false;
//         }
//     }
//     return true;
// };

// console.log(splitArr([1,1,1,1]));


/* ------------------------------------------------------------------------------------------------------------------- */


// var minOperations = function(nums, k) {
//     let minNum = Math.min(...nums);
//     let count = 0;

//     while(minNum < k) {
//         const index = nums.indexOf(minNum);
//         nums.splice(index, 1);
//         count++;
//         minNum = Math.min(...nums);
//     }

//     return count;
// };

// console.log(minOperations([2,11,10,1,3], 10));


/* ------------------------------------------------------------------------------------------------------------------- */


// var minimumBoxes = function(apple, capacity) {
//     let allApples = 0;
//     let count = 0;
//     const sortedCapacity = capacity.toSorted((a,b) => b-a);

//     for(let i=0; i<apple.length; i++) {
//         allApples += apple[i];
//     }

//     let sum = 0;

//     sortedCapacity.forEach((item) => {
//         if(sum < allApples) {
//             count++;
//         }
//         sum += item;
//     });

//     return count;
// };

// console.log(minimumBoxes([9,8,8,2,3,1,6], [10,1,4,10,8,5]));


/* ------------------------------------------------------------------------------------------------------------------- */


// var sumOfEncryptedInt = function(nums) {
//     let sum = 0;

//     for(let i=0; i<nums.length; i++) {
//         let arr = nums[i].toString().split("").map((num) => parseInt(num));
//         const max = Math.max(...arr);
//         const newArr = arr.map((item) => {
//             if(item !== max) item = max;

//             return item;
//         });

//         const resultNum = parseInt(newArr.join(""));

//         sum += resultNum;
//     }

//     return sum;
// };

// console.log((sumOfEncryptedInt([10,20,30])));


/* ------------------------------------------------------------------------------------------------------------------- */


// var isSubstringPresent = function(s) {
//     const reverseString = str => str.split('').reverse().join('');

//     for (let i = 0; i < s.length - 1; i++) {
//         const substring = s.substring(i, i + 2);
//         if (s.includes(reverseString(substring))) return true;
//     }

//     return false;
// };


/* ------------------------------------------------------------------------------------------------------------------- */


// var exist = function(board, word) {
//     const arr = board.map((item) => {
//         const str = item.join("");

//         return str;
//     });

//     for(let i=0; i<arr.length; i++) {
//         for(let j=0; j<arr[i].length; j++) {
            
//         }
//     }

//     return arr;
// };

// console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"));


/* ------------------------------------------------------------------------------------------------------------------- */


// var firstUniqChar = function(s) {    
//     const arr = s.split("");
//     const strs = [];

//     for(let i=0; i<arr.length; i++) {
//         const lastIndex = arr.lastIndexOf(arr[i]);

//         if(lastIndex === i && !strs.includes(arr[i])){
//             return i;
//         }else{
//             strs.push(arr[i]);
//         }
//     }

//     return -1;
// };

// console.log(firstUniqChar("aabb"));


/* ------------------------------------------------------------------------------------------------------------------- */


// const decodeString = (s) => {
//     let nums = [];
//     let strings = [];
//     let str = "";
//     let result = "";

//     for(let i=0; i<s.length; i++) {
//         if(s[i] === "[") {
            
//         }else if(s[i] === "]") {
            
//         }else if(!isNaN(parseInt(s[i]))) {
            
//         }else if(isNaN(parseInt(s[i]))) {
            
//         }
//     }
// };

// console.log(decodeString("3[a2[c]]"));


/* ------------------------------------------------------------------------------------------------------------------- */


// var removeDuplicateLetters = function(s) {
//     const arr = [];

//     const obj = s.split("").reduce((acc,letter) => {
//         if(!acc[letter]) acc[letter] = 1;
//         else acc[letter] += 1;

//         return acc;
//     }, {});

//     for(let key in obj) {
//         arr.push(key);
//     }

//     return arr.join("");
// };

// console.log(removeDuplicateLetters("cbacdcbc"));


/* ------------------------------------------------------------------------------------------------------------------- */


// var reversePrefix = function(word, ch) {
//     if(new Set(word).size === 1) return word;

//     let arr = [];

//     for(let i=0; i<word.length; i++) {
//         arr.push(word[i]);

//         if(word[i] === ch) {
//             break;
//         }    
//     }

//     if(arr.join("") === word && !arr.includes(ch)) {
//         return arr.join("");
//     }

//     const indexOfWord = word.indexOf(arr.join(""));

//     const a = word.split("").toSpliced(indexOfWord, arr.length, arr.toReversed().join(""));

//     return a.join("");
// };

// console.log(reversePrefix("xxxxxxxxxxxxxxxxx", "x"));


/* ------------------------------------------------------------------------------------------------------------------- */


// var minimumOperations = function(nums) {
//     let count = 0;
//     for(let i=0; i<nums.length; i++) {
//         let currentNum = nums[i]

//         if(currentNum % 3 !== 0) {
//             while(currentNum % 3 !== 0) {
//                 if(currentNum % 3 === 1) currentNum -= 1;
//                 else if(currentNum % 3 === 2) currentNum += 1;

//                 count++;
//             }
//         }
//     }

//     return count;
// };

// console.log(minimumOperations([1,2,3,4]));


/* ------------------------------------------------------------------------------------------------------------------- */


// var minimumChairs = function(s) {
//     let count = 0;
//     let maxCount = 0;

//     for(let i=0; i<s.length; i++) {
//         if(s[i] === 'E'){
//             count++;
//             if(maxCount < count) {
//                 maxCount = count;
//             }
//         }else{
//             count--;
//         }
//     }

//     return maxCount;
// };

// console.log(minimumChairs("ELELELELEEL"));


/* ------------------------------------------------------------------------------------------------------------------- */


// function chocolateFeast(n, c, m) {
//     let remain = Math.trunc(n / c);
//     let sum = remain;

//     while(remain >= m) {
//         let rem = Math.trunc(remain / m);
//         const qaliq = remain % m;
//         sum += rem;
//         remain = rem + qaliq;
//     }

//     return sum;
// }

// console.log(chocolateFeast(15,3,2)); 


/* ------------------------------------------------------------------------------------------------------------------- */


// function serviceLane(width, cases) {
//     const result = [];

//     cases.forEach(element => {
//         const [a,b] = element;
//         let min = Infinity;

//         for(let i=a; i<=b; i++) {
//             if(min > width[i]) {
//                 min = width[i];
//             }
//         }

//         result.push(min);
//     });

//     return result;
// }

// console.log(serviceLane([2, 3, 1, 2, 3, 2, 3, 3], [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]]));


/* ------------------------------------------------------------------------------------------------------------------- */


// function equalizeArray(arr) {
//     let max = 0;

//     const obj = arr.reduce((acc, item) => {
//         if(!acc[item]) acc[item] = 1;
//         else acc[item] += 1;
//         return acc;
//     }, {});

//     for(let key in obj) {
//         if(obj[key] > max) max = obj[key]
//     }

//     return arr.length - max;
// }

// console.log(equalizeArray([1,2,3,3,3,2]));


/* ------------------------------------------------------------------------------------------------------------------- */


// function permutationEquation(p) {
//     let n = p.length;
//     let result = [];

//     for (let x = 1; x <= n; x++) {
//         let index1 = p.indexOf(x) + 1;
        
//         let index2 = p.indexOf(index1) + 1;
        
//         result.push(index2);
//     }

//     return result;
// }

// console.log(permutationEquation([5,2,1,3,4]));


/* ------------------------------------------------------------------------------------------------------------------- */


// function climbingLeaderboard(ranked, player) {
//     const setRankedArray = Array.from(new Set([...ranked]));
//     const playerResult = [];

//     for(let i=0; i<player.length; i++) {
//         let rank = 1;

//         for(let j=0; j<setRankedArray.length; j++) {
//             if(player[i] < setRankedArray[j]) {
//                 rank += 1;
//             }
//         }

//         playerResult.push(rank);
//     }

//     return playerResult;
// }

// console.log(climbingLeaderboard([100,90,90,80], [70,80,105]));


/* ------------------------------------------------------------------------------------------------------------------- */


// function encryption(s) {
//     const str = s.split(" ").join("");
//     const strCeilLength = Math.ceil(Math.sqrt(str.length));
//     const arr = [];
//     let result = [];

//     for(let i=1; i<=strCeilLength; i++) {
//         const ss = str.slice((i-1) * strCeilLength, i * strCeilLength)
//         arr.push(ss);
//     }

//     for(let j=0; j<strCeilLength; j++) {
//         let myResultStr = "";
//         arr.forEach((element) => {
//             if(element[j]) {
//                 myResultStr += element[j]
//             }
//         })
//         result.push(myResultStr);
//     }
    
//     return result.join(" ");
// }   

// console.log(encryption("chill out"));


/* ------------------------------------------------------------------------------------------------------------------- */


// function nonDivisibleSubset(k, s) {
//     const allArr = [];

//     for(let i=0; i<k.length-1; i++) {
//         for(let j=i+1; j<k.length; j++) {
//             const arr = [k[i]];
//             arr.push(k[j]);
//             allArr.push(arr);
//         }
//     }

//     const allPossibleArr = allArr.filter((arr) => {
//         const sum = arr.reduce((total, item) => {
//             total += item;
//             return total;
//         }, 0);

//         if(sum % s !== 0) return arr;
//     });

//     const resultArr = allPossibleArr.flatMap((arr) => arr).reduce((result,item) => {
//         if(!result.includes(item)) result.push(item);
//         return result;
//     }, []);

//     const result = getResultArr(resultArr, s);

//     return result;
// }

// function getResultArr(arr, s) {
//     let maxSubset = [];  

//     function backtrack(start, subset) {
//         const sum = subset.reduce((acc, num) => acc + num, 0);
        
//         if (sum % s === 0 && subset.length > maxSubset.length) {
//             maxSubset = [...subset];
//         }

//         for (let i = start; i < arr.length; i++) {
//             subset.push(arr[i]);       
//             backtrack(i + 1, subset);  
//             subset.pop();              
//         }
//     }

//     backtrack(0, []);
//     return maxSubset;  
// }

// console.log(nonDivisibleSubset([2,5,7,9,3], 3));


/* ------------------------------------------------------------------------------------------------------------------- */


// function libraryFine(d1, m1, y1, d2, m2, y2) {
//     const date1 = new Date(y1, m1 - 1, d1).getTime();
//     const date2 = new Date(y2, m2 - 1, d2).getTime();

//     const daysDifference = (date2 - date1) / (1000 * 60 * 60 * 24);

//     return Math.abs(daysDifference) * 15;
// }

// console.log(libraryFine(9,6,2015,6,6,2015));


/* ------------------------------------------------------------------------------------------------------------------- */


// function lilysHomework(arr) {
//     let count = 0;
//     const sortedArr = arr.toSorted((a,b) => a - b);

//     for(let i=0; i<arr.length; i++) {
//         if(sortedArr[i] !== arr[i]) {
//             const index = arr.indexOf(sortedArr[i]);
//             [arr[i], arr[index]] = [arr[index], arr[i]];
//             count++;            
//         }
//     }

//     return count;
// }

// console.log(lilysHomework([3, 4, 2, 5, 1]));


/* ------------------------------------------------------------------------------------------------------------------- */


// function steadyGene(gene) {
//     const letters = "GATC";
//     const maxCount = Math.ceil(gene.length / 4);
//     let changes = 0;
//     let newStr = "";

//     function isGreaterThanNFunc(letter) {
//         let count = 0;

//         for(let i=0; i<newStr.length; i++) {
//             if(letter === newStr[i]) count += 1;
//         }

//         return count >= maxCount;
//     }

//     gene.split("").forEach(element => {
//         const isGreaterThanN = isGreaterThanNFunc(element);

//         if(isGreaterThanN) {
//             for(let i=0; i<letters.length; i++) {
//                 const isGreaterThanN = isGreaterThanNFunc(letters[i]);

//                 if(!newStr.includes(letters[i]) || !isGreaterThanN) {
//                     newStr += letters[i];
//                     break;
//                 } 
//             }
//             changes += 1;
//         }else{
//             newStr += element;
//         }
//     });

//     return newStr;
// }

// console.log(steadyGene("GAAATAAA"));


/* ------------------------------------------------------------------------------------------------------------------- */


// HELL EDILMEYIB

// function MinWindowSubstring(strArr) { 
//     const N = strArr[0];
//     const K = strArr[1];
//     let objK = {};
//     for (let char of K) objK[char] = (objK[char] || 0) + 1;

//     let smallestSubStrArr = [];
  
//     for(let i=0; i<N.length; i++) {
//         if(!smallestSubStrArr.includes(N[i])) {
//             smallestSubStrArr.push(N[i]);
//         }else{
//             let countOfLetter = smallestSubStrArr.reduce((total,letter) => {
//                 if(letter === N[i]) total += 1;
//                 return total;
//             }, 0);

//             if(countOfLetter >= objK[N[i]]) {
//                 let isThere = false;
                
//                 for(let key in objK) {
//                     if(key !== N[i]) {
//                         if(smallestSubStrArr.includes(key)) {
//                             isThere = true;
//                             break;
//                         } 
//                     }
//                 }

//                 if(!isThere) {
//                     smallestSubStrArr.push(N[i]);
//                     let lastIndex = smallestSubStrArr.lastIndexOf(N[i]);
//                     smallestSubStrArr = smallestSubStrArr.slice(lastIndex);                       
//                 }
//             }
//         }
//     }
  
//     return smallestSubStrArr; 
// }
     
// console.log(MinWindowSubstring(["aaabsaaddae", "aesd"]));


/* ------------------------------------------------------------------------------------------------------------------- */


// function jumpingOnClouds(c, k) {
//     let current = 100;
//     let resultIndex = (0 + k) % c.length;

//     while(resultIndex !== 0) {
//         if(c[resultIndex] === 1) current -= 3;
//         else current -= 1;
//         resultIndex = (resultIndex + k) % c.length;
//     }

//     if(resultIndex === 0) {
//         if(c[resultIndex] === 1) current -= 3;
//         else current -= 1;
//     }

//     return current;
// }

// console.log(jumpingOnClouds([1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1], 19)); 


/* ------------------------------------------------------------------------------------------------------------------- */


// function repeatedString(s, n) {
//     let strLength = s.length;
//     let fullRepeats = Math.floor(n / strLength);
//     let remainder = n % strLength;
//     let aCountInFullString = (s.match(/a/g) || []).length;
//     let aCountInRemainder = (s.slice(0, remainder).match(/a/g) || []).length;

//     return (aCountInFullString * fullRepeats) + aCountInRemainder;
// }

// console.log(repeatedString("a", 1000000));


/* ------------------------------------------------------------------------------------------------------------------- */


// function cutTheSticks(arr) {
//     const result = [];

//     while (arr.some(num => num !== 0)) { 
//         result.push(arr.filter(num => num !== 0).length); 

//         let minNum = Math.min(...arr.filter(num => num !== 0)); 
//         arr = arr.map(num => (num !== 0 ? num - minNum : 0)); 
//     }

//     return result;
// }

// console.log(cutTheSticks([5, 4, 4, 2, 2, 8]));


/* ------------------------------------------------------------------------------------------------------------------- */


// function LongestWord(sen) { 
//     let longestWord = "";
//     let arr = [];
//     let maxStr = "";

//     for(let i=0; i<sen.length; i++) {        
//         if((sen[i].charCodeAt(0) >= 65 && sen[i].charCodeAt(0) <= 90) || (sen[i].charCodeAt(0) >= 97 && sen[i].charCodeAt(0) <= 122)) {
//             longestWord += sen[i];
//         }else{
//             if(longestWord) {
//                 arr.push(longestWord);
//                 longestWord = "";
//             }
//         }
//     }

//     if(longestWord) {
//         arr.push(longestWord);
//     }

//     arr.forEach((word) => {
//         if(word.length > maxStr.length) maxStr = word;
//     })

//     return maxStr;
// }

// console.log(LongestWord("fun&!! time"));


/* ------------------------------------------------------------------------------------------------------------------- */


// function FirstFactorial(num) { 
//     if(num === 1) return 1;
  
//     let result = 0;
  
//     if(num > 1) {
//       result += (num * FirstFactorial(num - 1));
//     }
  
//     return result; 
// }

// console.log(FirstFactorial(4));


/* ------------------------------------------------------------------------------------------------------------------- */


// function CodelandUsernameValidation(str) { 
//     for(let i=0; i<str.length; i++) {
//       if(
//             (sen[i].charCodeAt(0) >= 65 && sen[i].charCodeAt(0) <= 90) || 
//             (sen[i].charCodeAt(0) >= 97 && sen[i].charCodeAt(0) <= 122) || 
//             (sen[i].charCodeAt(0) >= 48 && sen[i].charCodeAt(0) <= 57) ||
//             (sen[i].charCodeAt(0) === 95)){
                
//         }
//     console.log("_".charCodeAt(0));
  
//     return str; 
  
//   }
     
// console.log(CodelandUsernameValidation("aa_"));


/* ------------------------------------------------------------------------------------------------------------------- */


// function FirstReverse(str) { 
//   const newArr = str.split(" ").toReversed().map((item) => {
//     const arr = item.split("").toReversed();

//     return arr.join("");
//   })
  
//   return newArr.join(" ");
// }

// console.log(FirstReverse("I Love Coding"));


/* ------------------------------------------------------------------------------------------------------------------- */


// function hackerrankInString(s) {
//   const word = "hackerrank";
  
//   for(let i=0; i<word.length; i++) {
//       if(!s.includes(word[i])) {
//           return "NO"
//       }
//       const index = s.indexOf(word[i]);
//       s = s.slice(index + 1);
//       console.log(index,s);
//   }   
  
//   return "YES";
// }

// console.log(hackerrankInString("rhackerank"));


/* ------------------------------------------------------------------------------------------------------------------- */


// const secondBiggest = (arr) => {
//     const uniqueArr = [...new Set(arr)]; 

//     if (uniqueArr.length < 2) return null; 

//     uniqueArr.sort((a, b) => b - a); 
//     return uniqueArr[1];
// };

// console.log(secondBiggest([10, 5, 8, 20, 3]));


/* ------------------------------------------------------------------------------------------------------------------- */


// function howManyGames(p, d, m, s) {
//     let count = 0;

//     while (s >= p) { 
//         s -= p;    
//         count++;   
//         p = Math.max(p - d, m);  
//     }

//     return count;
// }

// console.log(howManyGames(20,3,6,80));


/* ------------------------------------------------------------------------------------------------------------------- */


// const containDuplicate = (arr) => {
//     const result =  [];
    
//     arr.forEach((element,index) => {
//         if(!result.includes(element) && (index !== arr.lastIndexOf(element))) {
//             result.push(element);
//         }
//     });

//     return result;
// };

// console.log(containDuplicate([2,2,3,4,55,55,6,7,2,3,9,8]));


/* ------------------------------------------------------------------------------------------------------------------- */


// const buyAndSell = (prices) => {
//     let maximumProfit = 0;

//     for(let i=0; i<prices.length; i++) {
//         for(let j=i+1; j<prices.length; j++) {
//             if(prices[j] - prices[i] > maximumProfit) {
//                 maximumProfit = prices[j] - prices[i]; 
//             }
//         }
//     }

//     return maximumProfit;
// };

// console.log(buyAndSell([7, 1, 5, 3, 6, 4]));


/* ------------------------------------------------------------------------------------------------------------------- */


// const productOfArray = (arr) => {
//     return arr.map(item => {
//         let max = 1;
        
//         for(let i=0; i<arr.length; i++) {
//             if(arr[i] === item) continue;
//             max *= arr[i];
//         }

//         return parseInt(max);
//     });
// };

// console.log(productOfArray([1, 2, 3, 4]));


/* ------------------------------------------------------------------------------------------------------------------- */


// var maxSubArray = function(nums) {
//     let current_sum = 0;
//     let max_sum = -Infinity;

//     nums.forEach(element => {
//         current_sum = Math.max(current_sum + element, element);
//         if(current_sum > max_sum) {
//             max_sum = current_sum
//         }
//     });

//     return max_sum;
// };

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));


/* ------------------------------------------------------------------------------------------------------------------- */


// const data = [
//     { id: 'e1', title: 'wre', description: "adas", age: 21 },
//     { id: 'e2', title: 'lorem', description: "adas asdasd asdasdas", age: 21 },
//     { id: 'e3', title: 'sadsa', description: "adas asdasd", age: 21 },
//     { id: 'e4', title: 'lorem', description: "adas", age: 21 },
// ];

// const obj = data.reduce((acc,item) => {
//     for(let key in item) {
//         if(!acc[key]) acc[key] = [];
//         acc[key].push(item[key]);
//     }

//     return acc;
// }, {});

// const array = Object.entries(obj);

// const result = array.reduce((obj,item) => {
//     const [key,arr] = item;
//     let max = 0;
//     let selectedStr;

//     const counts = arr.reduce((acc, el) => {
//         if(!acc[el]) acc[el] = 1;
//         else acc[el] += 1;
//         return acc;
//     }, {});

//     for(let k in counts) {
//         if(counts[k] > max) {
//             max = counts[k];
//             selectedStr = k;
//         }
//     }

//     obj[key] = selectedStr;

//     return obj;
// }, {});

// console.log(result);


/* ------------------------------------------------------------------------------------------------------------------- */


// const rotateArray = (arr,k) => {
//     k = k % arr.length;
//     if (k === 0) return arr;

//     const part1 = arr.slice(0, arr.length - k);
//     const part2 = arr.slice(arr.length - k);

//     return [...part2, ...part1];
// }

// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));


/* ------------------------------------------------------------------------------------------------------------------- */


// Array Destruction

// const arr = [1,2,3,4,5,6];

// [arr[0],arr[4]] = [23,454]

// console.log(arr);


/* ------------------------------------------------------------------------------------------------------------------- */


// var isValid = function(s) {
//     if(s.length % 2 === 1) return false;

//     let parantheses = {
//          "(": ")",
//          "[": "]",
//          "{": "}"
//     };
//     const arr = [];

//     for(let i=0; i<s.length; i++) {
//         if(s[i] in parantheses) {
//             arr.push(s[i]);
//         }else{
//             let selectedKey = "";

//             for(let key in parantheses) {
//                 if(parantheses[key] === s[i]) {
//                     selectedKey = key;
//                     break;
//                 }
//             }

//             if(arr.at(-1) === selectedKey){
//                 arr.pop();
//             }else {
//                 return false;
//             }
//         }
//     }

//     return arr.length === 0;
// }

// console.log(isValid("[]{}()"));


/* ------------------------------------------------------------------------------------------------------------------- */


// var sortPeople = function(names, heights) {
//     const combinedArr = names.map((name, index) => {
//         return [
//             name,
//             heights[index]
//         ];
//     });

//     combinedArr.sort((a,b) => b[1] - a[1]);

//     return combinedArr.map((person) => person[0]);
// };

// console.log(sortPeople(["Mary","John","Emma"],[180,165,170]));


/* ------------------------------------------------------------------------------------------------------------------- */


// var removeAnagrams = function(words) {
//     const result = [words[0]];

//     for(let i=1; i<words.length; i++) {
//         const str = words[i].split("").sort().join("");
//         const isNotThere = result.every((item) => item.split("").toSorted().join("") !== str);
        
//         if(isNotThere) {
//             result.push(words[i]);
//         }
//     }

//     return result;
// };

// console.log(removeAnagrams(["abba","cd","bbaa","cd","cd","baba"]));


/* ------------------------------------------------------------------------------------------------------------------- */


// var largestNumber = function(nums) {
//     const sorted = nums.map(String).sort((a, b) => (b + a) - (a + b));
//     if (sorted[0] === "0") return "0";
//     return sorted.join("");
// };

// console.log(largestNumber([34323, 3432]));


/* ------------------------------------------------------------------------------------------------------------------- */


// const removeDuplicates = (arr) => {
//     return arr.reduce((acc,el) => {
//         if(!acc.includes(el)) acc.push(el);
//         return acc;
//     }, []);
// };

// console.log(removeDuplicates([1,1,2]));


/* ------------------------------------------------------------------------------------------------------------------- */


// const longestWord = (sentence) => {
//     let max = 0;
//     let selectedWord = "";
//     const arr = sentence.split(" "); 

//     arr.forEach(element => {
//         const letters = element.split("");
//         let count = 0;
//         let isHave = false; 

//         letters.forEach((letter) => {
//             if ((letter >= "a" && letter <= "z") || (letter >= "A" && letter <= "Z")) {
//                 count++;        
//             }else{
//                 isHave = true;
//             }
//         })

//         if(count > max) {
//             max = count;
//             if(isHave) {
//                 const arr = element.split("");
//                 arr.pop();
//                 selectedWord = arr.join("");
//             }else{
//                 selectedWord = element;
//             }
//         }
//     });

//     return selectedWord;
// };

// console.log(longestWord("The quick brown fox jumps over the lazy dogasdsa!"));


/* ------------------------------------------------------------------------------------------------------------------- */


// const targetSum = (nums,target) => {
//     for(var i=0;i<nums.length;i++){
//         for(var j=0;j<nums.length;j++){
//             if(i !== j){
//                 if(nums[i] + nums[j] === target){
//                     arr = [i,j];
//                     return arr;
//                 }
//             }else{
//                 continue;
//             }
//         }
//     }
// };

// console.log(targetSum([2,7,11,15], 9));


/* ------------------------------------------------------------------------------------------------------------------- */


// const capitalizeWord = (str) => {
//     const arr = str.split(" ");

//     const newArr = arr.map((item) => {
//         const wordArr = item.split("");

//         const capitalizeStr = wordArr.map((letter,index) => {
//             if(index === 0) {
//                 return letter.toUpperCase();
//             }

//             return letter;
//         }).join("");

//         return capitalizeStr;
//     });

//     return newArr.join(" ");
// };

// console.log(capitalizeWord("hello world"));


/* ------------------------------------------------------------------------------------------------------------------- */


// const groupAnagram = (arr) => {
//     const result = [];
//     arr.forEach((element,index1) => {
//         const a = [element];
//         const sortedEl = element.split("").toSorted((a,b) => a.localeCompare(b)).join("");
        
//         arr.forEach((el2,index2) => {
//             const sortedEl2 = el2.split("").toSorted((a,b) => a.localeCompare(b)).join("");
            
//             if(index1 !== index2) {
//                 if(sortedEl === sortedEl2) {
//                     a.push(el2);
//                 }
//             }
//         });

//         a.sort((a,b) => a.localeCompare(b));
//         if(!result.toString().includes(a)) {
//             result.push(a);
//         }
//     });

//     return result;
// };

// console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]));


/* ------------------------------------------------------------------------------------------------------------------- */


// var generate = function(numRows) {
//     const triangle = [];

//     for (let i = 0; i < numRows; i++) {
//         const row = [];

//         for (let j = 0; j <= i; j++) {
//             if (j === 0 || j === i) {
//                 row.push(1);
//             } else {
//                 row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
//             }
//         }

//         triangle.push(row);
//     }

//     return triangle;
// };

// console.log(generate(5));


/* ------------------------------------------------------------------------------------------------------------------- */


// const repetitions = (str) => {
//     if (!str) return 0;

//     let result = [];
//     let arr = [str[0]];

//     for (let i = 1; i < str.length; i++) {
//         if (str[i] === str[i - 1]) {
//             arr.push(str[i]);
//         } else {
//             result.push(arr);
//             arr = [str[i]];
//         }
//     }

//     result.push(arr); 

//     const countArr = result.map(item => item.length);
//     return Math.max(...countArr);
// }

// console.log(repetitions("ATTCGGGA")); 


/* ------------------------------------------------------------------------------------------------------------------- */


// const increaseArray = (arr) => {
//     let result = 0;

//     for(let i=1;i<arr.length;i++) {
//         if(arr[i-1] > arr[i]) {
//             result += (arr[i-1] - arr[i]);
//             arr[i] = arr[i - 1];
//         }
//     }

//     return result;
// }

// console.log(increaseArray([3,2,5,1,7]));


/* ------------------------------------------------------------------------------------------------------------------- */


var convert = function(s, numRows) {
    const resultArr = [];
    let currentArr = [];
    let count = 0;
    let num = numRows;

    for(let i=0; i<s.length; i++) {
        count++;
        if(count === numRows) {
            currentArr.push(s[i]);
            resultArr.push(currentArr);
        }else if(count < numRows){
            currentArr.push(s[i]);
            if(i === s.length - 1) {
                resultArr.push(currentArr);
            }
        }
        else {
            currentArr = [];
            num -= 1;
            for(let j=1; j<=numRows; j++) {
                if(j !== num) {
                    currentArr.push("");
                }else currentArr.push(s[i]);
            }

            resultArr.push(currentArr);

            if(num === 2) {
                count = 0;
                currentArr = [];
                num = numRows;
            }
        }
    }

    return resultArr;
};

console.log(convert("PAYPALISHIRING", 4));


/* ------------------------------------------------------------------------------------------------------------------- */