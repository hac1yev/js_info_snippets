// DATE TASKS


// const date = new Date('2024-08-26');

// const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// function nextWeekday(date, weekday) {
//     const dateWeekDay = date.getDay();
//     const indexOfInputWeekDay = dayOfWeek.indexOf(weekday); 
    
//     const dateMilliSeconds = date.getTime();
//     const milliseconds = (indexOfInputWeekDay - dateWeekDay) * (24 * 60 * 60 * 1000);

//     return new Date(dateMilliSeconds + milliseconds).toISOString().slice(0,10);
// };

// console.log(nextWeekday(date, 'Friday'));


/* -------------------------------------------------------------------------------------------------------------------- */


// function lastDayOfMonth(date) {
//     const newDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
//     return newDate;
// }

// const date = new Date('2024-02-15');
// console.log(lastDayOfMonth(date)); 


/* -------------------------------------------------------------------------------------------------------------------- */


// const getWeekNumber = (date) => {
//     const startOfYear = new Date(date.getFullYear(), 0, 1);
//     const milliseconds = date - startOfYear;

//     return Math.ceil(milliseconds / (1000 * 60 * 60 * 24 * 7));
// };

// // Example
// const date = new Date('2024-08-26');
// console.log(getWeekNumber(date)); 


/* -------------------------------------------------------------------------------------------------------------------- */


// const myPromise = new Promise((resolve, reject) => {
//     fetch('https://my.api.mockaroo.com/players.json?key=281cec00')
//       .then(response => {
//         if (response.ok) {
//           return response.json(); 
//         } else {
//           reject("Failed to fetch data");
//         }
//       })
//       .then(data => resolve(data)) 
//       .catch(error => reject(error)); 
//   });
  
//   myPromise
//     .then(result => console.log(result)) 
//     .catch(err => console.log(err)); 


/* -------------------------------------------------------------------------------------------------------------------- */


// const info = {
//   name: 'Ilkin',
//   surname: 'Haciyev',
//   age: 24,
// };

// const archive = {
//   firstName: {
//     key: "name",
//     value: info.name
//   },
//   lastName: {
//     key: "surname",
//     value: info.surname
//   }
// };

// const proxyObj = new Proxy(info, {
//   get: (target,prop) => {
//     if(prop in archive) {
//       console.warn(
//         `${prop} is deprecated.`,
//         `Use ${archive[prop].key} instead.`
//       );
//       return archive[prop].value;
//     }

//     return target[prop];
//   }
// });

// console.log(proxyObj.firstName);


/* -------------------------------------------------------------------------------------------------------------------- */


// const user = {
//   name: 'Ilkin',
//   age: 24
// };

// const proxyObj = new Proxy(user, {
//   set(target,prop,value) {
//     if(value < 0) {
//       throw new Error("Age can not be negative");
//     }
//     target[prop] = value;
//     return true;
//   }
// });

// try {
//   proxyObj.age = -5;
// } catch (e) {
//   console.error(e.message);
// }

// console.log(proxyObj.age);


/* -------------------------------------------------------------------------------------------------------------------- */


// const apiResponse = {
//   data: {
//     user: {
//       name: "Michael",
//       age: 28,
//     },
//   },
//   status: 200,
// };

// const apiProxy = new Proxy(apiResponse, {
//   get(target, prop) {
//     if (prop === "status" && target[prop] !== 200) {
//       console.warn("API Yanıtında bir hata var!");
//     }
//     return target[prop];
//   },
//   set(target, prop, value) {
//     console.log(`API yanıtı değiştirildi: ${prop} = ${value}`);
//     target[prop] = value;
//     return true;
//   },
// });

// console.log(apiProxy.data.user.name);
// apiProxy.status = 500; 
// console.log(apiProxy.status);


/* -------------------------------------------------------------------------------------------------------------------- */


// function hello(name) {
//     let phrase = `Hello ${name}.`;

//     say(phrase);
// }

// function say(phrase) {
//     alert(phrase);
// }

// hello("Ilkin");


/* -------------------------------------------------------------------------------------------------------------------- */


// const mars = {
//     name: "Mars",
//     getName: function() {
//         return function() {
//             return this;
//         }
//     }
// };
// console.log(mars.getName()());


/* -------------------------------------------------------------------------------------------------------------------- */


// let arr = [1,2,3,4,5];

// const [a1,a2] = arr;

// console.log(a1,a2);

// const [,,arr3,,arr5] = arr;

// console.log(arr3,arr5);

// const [arr1, ...rest] = arr;

// console.log(rest);


/* -------------------------------------------------------------------------------------------------------------------- */


// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],

//   showList() {
//     return function A() {
//       console.log(this);
//     }  
//   }
// };

// group.showList()(); // window object


/* -------------------------------------------------------------------------------------------------------------------- */


// RECURSIONS

// function factorial(n) {
//   if(n == 1) {
//     return n;
//   }else{
//     return n * factorial(n-1);
//   }
// };

// console.log(factorial(3));


// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// console.log(pow(3,4));


// function fibonacci(n) {
//   if (n == 1) {
//     return 0;
//   } else if (n == 2) {
//     return 1;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   };
// }
// console.log(fibonacci(3));


// const sumOfDigits = (num) => {
//     if(num === 0) return 0;
//     return (num % 10) + sumOfDigits(Math.floor(num / 10));
// };

// console.log(sumOfDigits(1234));


// const isPalindrome = (str) => {
//     if (str.length <= 1) return true;
//     if (str[0] !== str[str.length - 1]) return false;
//     return isPalindrome(str.slice(1, str.length - 1));
// };

// console.log(isPalindrome("rratarr"));


/* -------------------------------------------------------------------------------------------------------------------- */


// function printNumbersInterval(from, to) {
//     let current = from;
    
//     const intervalId = setInterval(() => {
//       console.log(current);
//       if (current === to) {
//         clearInterval(intervalId); 
//       }
//       current++;
//     }, 1000); 
// }
  
// printNumbersInterval(1, 5);


// function printNumbersTimeout(from, to) {
//     let current = from;
  
//     function go() {
//       console.log(current);
//       if (current < to) {
//         current++;
//         setTimeout(go, 1000); 
//       }
//     }
  
//     go(); 
// }
  
// printNumbersTimeout(1, 5);


/* -------------------------------------------------------------------------------------------------------------------- */


// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
// }
  
// let user = {
//     name: 'John',
  
//     loginOk() {
//       console.log(`${this.name} logged in`);
//     },
  
//     loginFail() {
//       console.log(`${this.name} failed to log in`);
//     },
  
// };
  
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));


/* -------------------------------------------------------------------------------------------------------------------- */


// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
// }
  
// let user = {
//     name: 'John',
  
//     login(result) {
//       alert( this.name + (result ? ' logged in' : ' failed to log in') );
//     }
// };
  
// askPassword(user.login.bind(user,true), user.login.bind(user,false)); 


/* -------------------------------------------------------------------------------------------------------------------- */


// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
  
//     showList() {
//       this.students.forEach(
//         student => alert(this.title + ': ' + student)   // this is window object
//       );
//     }
// };
  
// group.showList();


// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
  
//     showList() {
//       this.students.forEach(function(student){
//         alert(this.title + ': ' + student) // this is group object
//       });
//     }
// };
  
// group.showList();


/* -------------------------------------------------------------------------------------------------------------------- */


// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true  
// };
  
// rabbit.__proto__ = animal;

// console.log(rabbit.eats);


// let animal = {
//     eats: true,
//     walk() {
//       console.log("Animal walk");
//     }
// };
  
// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };
  
// rabbit.walk();


// let animal = {
//     eats: true,
//     walk() {
//       console.log("sasdssad");
      
//     }
// };
  
// let rabbit = {
//     __proto__: animal
// };
  
// rabbit.walk = function() {
//     console.log("Rabbit! Bounce-bounce!");
// };
  
// rabbit.walk(); 


// let user = {
//   name: "John",
//   surname: "Smith",

//   set fullName(value) {        
//     [this.name, this.surname] = value.split(" ");
//   },

//   get fullName() {        
//     return `${this.name} ${this.surname}`;
//   }
// };

// let admin = {
//   __proto__: user,
//   isAdmin: true
// };
  
// admin.fullName; 
  
// admin.fullName = "Alice Cooper"; 
  
// console.log(admin.fullName);
// console.log(user.fullName); 


/* ------------------------------------------------------------------------------------------------------------------- */


// const user = {
//   name: "John",
//   age: 20,
// };

// const proxyObj = new Proxy(user, {
//   set(target, prop, value) {
//     if(prop === 'age' && value < 20) {
//       throw new Error('age can not be lower than 20!');
//     }

//     target[prop] = value;
//     return true;
//   }
// });

// proxyObj.age = 22;

// console.log(user);


/* ------------------------------------------------------------------------------------------------------------------- */


// const u = {
//   name: 'Ilkin',
//   surname: 'Haciyev',

//   set fullname(value) {
//     [this.name, this.surname] = value.split(" ");
//   },

//   get fullname() {
//     return `${this.name} ${this.surname}`;
//   },

//   set age(value) {
//     if(value < 18) {
//       throw new Error("age can not be lower than 18!");
//     }

//     this.age = value;
//   },

//   get age() {
//     return this.age;
//   }
// }

// u.age = 17;

// console.log(u);

// console.log(u.age);


/* ------------------------------------------------------------------------------------------------------------------- */


// const user = {
//   name: 'Ilkin',
//   surname: 'Haciyev',
// };

// const person = {
//   name: 'Cvvv',
//   surname: 'dhiewr',
//   __proto__: user,
// }

// user.__proto__.fullname = function() {
//   return `${this.name} ${this.surname}`
// }

// console.log(person.fullname());


/* ------------------------------------------------------------------------------------------------------------------- */


// const obj = {
//   name: 'Alice',
//   age: 25
// };

// const proxyObj = new Proxy(obj, {
//   set(target, prop, value) {
//     throw new Error("Cannot modify an immutable object");
//   },
//   deleteProperty(target,prop) {
//     throw new Error("Cannot delete properties from an immutable object");
//   }
// });

// delete proxyObj.age;
// proxyObj.age = 34;

/* ------------------------------------------------------------------------------------------------------------------- */


// const array = [10, 20, 30, 40, 50];

// const negativeArrayProxy = new Proxy(array, {
//   get(target, prop) {
//     if(prop < 0) {
//       target[prop] = target[target.length + +prop]
//     }

//     return target[prop];
//   }
// });

// console.log(negativeArrayProxy[-1]);


/* ------------------------------------------------------------------------------------------------------------------- */


// const cacheHandler = {
//   apply(target, thisArg, args) {    
//     const key = JSON.stringify(args);
//     if (!target.cache) {
//       target.cache = {};
//     }
//     if (target.cache[key]) {
//       console.log("Returning from cache:", key);
//       return target.cache[key];
//     }
//     const result = target.apply(thisArg, args);
//     target.cache[key] = result;
//     console.log("Caching result for:", key);
//     return result;
//   }
// };

// function expensiveFunction(x, y) {
//   console.log("Computing...");
//   return x * y;
// }

// const cachedExpensiveFunction = new Proxy(expensiveFunction, cacheHandler);

// const binded = cachedExpensiveFunction.bind({ name: 'myContext' });
// console.log(binded(21,2));
// console.log(binded(21,2));


/* ------------------------------------------------------------------------------------------------------------------- */


// function Person() {
//     this.email = "ilkinhaciyev@gmail.com";
//     this.password = "hilkin08"; 
//     this.age = 24;
// };
  
// Person.prototype.fullname = function(name,surname) {
//     return `${name} ${surname}`;
// };

// const person1 = new Person();
// const person2 = new Person();
    
// console.log(person1.fullname("Ilkin", "Haciyev"));
// console.log(person2.fullname("Cavid", "Ferzeliyev"));
  
  
/* ------------------------------------------------------------------------------------------------------------------- */
  
  
// const obj = {
//     name: 'Elvin',
//     surname: 'Cabbarli',
//     age: 24
// };

// obj.__proto__.fullName = function(){
//     return `${this.name} ${this.surname}`
// } 

// console.log(obj.fullName());

  
/* ------------------------------------------------------------------------------------------------------------------- */


// class User {
//     constructor(name) {
//       this.name = name;
//     }
  
//     sayHi() {
//       console.log(this.name);
//     }

// };
  
// let user = new User("John");
// console.log(user);


// class Animal {
//     constructor(type) {
//       this.type = type;
//     }
  
//     makeSound() {
//       console.log('Some generic sound...');
//     }
// }
  
// class Dog extends Animal {
//     constructor(name) {
//       super('Dog');
//       this.name = name;
//     }
  
//     bark() {
//       console.log('Woof! Woof!');
//     }
// }
  
// const dog = new Dog('Buddy');
// dog.makeSound(); 
// dog.bark();      
  

/* ------------------------------------------------------------------------------------------------------------------- */


// const promise = new Promise((resolve,reject) => {
//     const fetchData = async () => {
//         try {
//             const response = await fetch("https://my.api.mockaroo.com/home_category.json?key=281cec00");
//             const data = await response.json();
//             resolve(data);
//         }catch (error) {
//             reject(error);
//         }
//     }

//     fetchData();
// })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));


// function delay(ms) {
//     const promise = new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, ms);
//     });

//     return promise;
// }
  
// delay(3000).then(() => alert('runs after 3 seconds'));


// new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       reject(new Error("Whoops!"))
//     }, 1000);
// }).catch((err) => console.log(err));

/* ------------------------------------------------------------------------------------------------------------------- */


// const str = `(function(){
//     return 40;
// })()`;

// const result = eval(str);

// console.log(result);


// const numStr = `34 + 43`; 

// console.log(eval(numStr));


/* ------------------------------------------------------------------------------------------------------------------- */


// const specificDateTime = new Date();
// console.log(specificDateTime.toDateString()); //  Thu Nov 28 2024
// console.log(specificDateTime.toLocaleString()); //  28.11.2024 16:01:11
// console.log(specificDateTime.toTimeString()); //  16:01:18 GMT+0400 (Azerbaycan Standart Saati)
// console.log(specificDateTime.toISOString()); //  2024-11-28T12:01:28.184Z
// console.log(specificDateTime.toJSON()); //  2024-11-28T12:01:35.960Z
// console.log(specificDateTime.toLocaleDateString()); //  28.11.2024
// console.log(specificDateTime.toLocaleTimeString()); //  16:01:48
// console.log(specificDateTime.toTimeString()); //  16:01:57 GMT+0400 (Azerbaycan Standart Saati)
// console.log(specificDateTime.toUTCString()); //  Thu, 28 Nov 2024 12:02:02 GMT


/* ------------------------------------------------------------------------------------------------------------------- */


// const person = {
//     name: 'Ilkin',
//     surname: 'Haciyev',
//     fullName: function() {
//         return this.name + " " + this.surname
//     }
// };

// const person2 = Object.create(person);
// person2.name = "Həsən";
// person2.surname = "Beyandir";
// console.log(person2.fullName()); // Həsən Beyandir


/* ------------------------------------------------------------------------------------------------------------------- */


// function longestCommonPrefix(strs) {
//     let str = "";
//     strs.sort((a,b) => a.localeCompare(b));
//     const first = strs[0];
//     const last = strs.at(-1);
//     for(let i=0; i<first.length; i++) {
//         if(first[i] === last[i]) {
//             str += first[i];
//         }else break;
//     }

//     return str;
// };

// console.log(longestCommonPrefix(["flower","flow","flight"]));


/* ------------------------------------------------------------------------------------------------------------------- */


// const promise = new Promise((resolve,reject) => {
//     fetch('https://my.api.mockaroo.com/home_category.json?key=281cec00')
//         .then((res) => resolve(res))
//         .catch((err) => reject(err))
// })
//     .then((res) => {
//         (async function () {
//             try {
//                 const reader = res.body.getReader();
                
//                 while(true) {
//                     const { done, value } = await reader.read();
                    
//                     if(done) {
//                         break;
//                     }

//                     console.log(value);
//                 }
//             } catch (error) {
//                 console.log(error);
                
//             }
//         })()
//     })
//     .catch((err) => err);


/* ------------------------------------------------------------------------------------------------------------------- */


const promiseAllSettle = Promise.allSettled([
    fetch('https://my.api.mockaroo.com/home_collections.json?key=281cec00'),
    fetch('https://my.api.mockaroo.com/home_category.json?key=281cec00')
]).then((res) => {    
    res.forEach((item) => {
        const {value} = item;
        getData(value);
    })
}); 

async function getData(res) {
    try {
        const data = await res.json();
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
}


/* ------------------------------------------------------------------------------------------------------------------- */