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