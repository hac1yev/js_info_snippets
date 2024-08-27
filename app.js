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