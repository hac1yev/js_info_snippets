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


const user = {
  name: 'Ilkin',
  age: 24
};

const proxyObj = new Proxy(user, {
  set(target,prop,value) {
    if(value < 0) {
      throw new Error("Age can not be negative");
    }
    target[prop] = value;
    return true;
  }
});

try {
  proxyObj.age = -5;
} catch (e) {
  console.error(e.message);
}

console.log(proxyObj.age);


/* -------------------------------------------------------------------------------------------------------------------- */