
// let dateToday = new Date(); // Current date time and day 

// const d = new Date("September 29, 2025 11:13:00 monday");

// console.log(dateToday.toDateString());
// console.log(dateToday.toString());
// console.log(dateToday);
// console.log(dateToday.toUTCString());
// console.log(dateToday.toISOString());

/*
    toLocaleString()
    - Formats both date AND time according to locale.
    - Syntax: date.toLocaleString([locales], [options])

    Example:
    const date = new Date(2024, 8, 29, 14, 30, 45); // Sept 29, 2024, 2:30:45 PM
    console.log(date.toLocaleString()); // "9/29/2024, 2:30:45 PM"

    For specific locals:
    console.log(date.toLocaleString('en-US')); // "9/29/2024, 2:30:45 PM"
    

    toLocaleDateString()
    - Formats only the DATE part (no time).
    - Syntax: date.toLocaleDateString([locales], [options])
    
    Example:
    const date = new Date(2024, 8, 29, 14, 30, 45);
    console.log(date.toLocaleDateString()); // "9/29/2024"

    For specific locals:
    console.log(date.toLocaleDateString('en-US')); // "9/29/2024"


    toLocaleTimeString()
    - Formats only the TIME part (no date).
    - Syntax: date.toLocaleTimeString([locales], [options])

    Example:
    const date = new Date(2024, 8, 29, 14, 30, 45);
    console.log(date.toLocaleTimeString()); // "2:30:45 PM"
    

*/

/*
// Date Get Methods
console.log(dateToday.getFullYear()); // get the full year
console.log(dateToday.getMonth()); // get month
console.log(dateToday.getDate());
console.log(dateToday.getHours());
console.log(dateToday.getMinutes());
console.log(dateToday.getSeconds());
console.log(dateToday.getMilliseconds());
console.log(dateToday.getTime());
*/


/*
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date("2021-03-25");
let month = months[d.getMonth()];
console.log(d.getMonth());

console.log(month);

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;
let years = Math.round(Date.now() / year);
console.log(years);
*/


// Date Set Methods

// setFullYear()
// const d = new Date("January 01, 2025");
// d.setFullYear(2020);
// console.log(d);

// const e = new Date("January 01, 2025");
// e.setFullYear(2020, 11, 3);
// console.log(e);

// // setMonth()
// const f = new Date("January 01, 2025");
// f.setMonth(11);
// console.log(f);

// // setDate()
// const g = new Date("January 01, 2025");
// g.setDate(15);
// console.log(g);

// // setHours()
// const h = new Date("January 01, 2025");
// h.setHours(22);
// console.log(h);

// // setMinutes()
// const i = new Date("January 01, 2025");
// i.setMinutes(30);
// console.log(i);

// // setSeconds()
// const j = new Date("January 01, 2025");
// j.setSeconds(30);
// console.log(j);

/*
1. Display Current Date and Time. Get the current date and time and display it in a readable format.
Clue: Gagamit ng ibang method, nilagay ko sa taas :) Wala kase sa w3 schools sorry na agad :P
*/

    // let now = new Date();
    // console.log("Current Date and Time:", now.toLocaleString());


/*
2. Given a date, extract and display the year, month, day, hours, minutes, and seconds separately.
*/

    // let date = new Date();

    // console.log("Year:", date.getFullYear());
    // console.log("Month:", date.getMonth());
    // console.log("Day:", date.getDate());
    // console.log("Hours:", date.getHours());
    // console.log("Minutes:", date.getMinutes());
    // console.log("Seconds:", date.getSeconds());

/*
3. Create a program that takes a date and returns what day of the week it is (Monday, Tuesday, etc.).
*/

    // function getDayOfWeek(dateInput) {
    //     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    //     let d = new Date(dateInput);
    //     return days[d.getDay()];
    // }

    // console.log(getDayOfWeek("2025-09-6"));

/*
4. Convert a month number (0-11) to its full name (January, February, etc.).
*/

    // function getMonthName(monthNumber) {
    //     const months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

    //     let d = new Date();
    //     d.setMonth(monthNumber);

    //     return months[d.getMonth()];
    // }

    // console.log(getMonthName(8));
/*
5. Create a date object for your birthday and display it in different formats.
*/

    // function displayBirthday(year, month, day) {
        
    //     let bday = new Date(year, month - 1, day);

    //     console.log(bday.toString());
    //     console.log(bday.toDateString());    
    //     console.log(bday.toLocaleString());
    //     console.log(bday.toLocaleDateString());
    //     console.log(bday.toLocaleTimeString());
    //     console.log(bday.toISOString());
    // }

    // displayBirthday(2002, 11, 9);

/*
6. Get and display only the current year.
*/

    // function getCurrentYear() {
    //     let today = new Date();
    //     return today.getFullYear();
    // }


    // console.log("Current Year:", getCurrentYear());

/*
7. Check if one date is before, after, or the same as another date.
*/

    // let date1 = new Date(2025, 8, 29);
    // let date2 = new Date(2025, 8, 29);

    // if (date1 < date2) {
    //         console.log("Date1 is before Date2");
    //     } else if (date1 > date2) {
    //         console.log("Date1 is after Date2");
    //     } else {
    //         console.log("Both dates are the same");
    //     }

/*
8. Given a month and year, calculate how many days are in that month.
*/

    // function daysInMonth(month, year) {
        
    //     if (month == 2) { 
    //         if ((year % 4 == 0 && year % 400 === 0)) {
    //             return 29;
    //         } else {
    //             return 28;
    //         }
    //     } 
    //     else if (month == 4 || month == 6 || month == 9 || month == 11) {
    //         return 30;
    //     } 
    //     else {
    //         return 31;
    //     }
    // }

    // console.log(daysInMonth(2, 2023));

/*
9. Determine if a given year is a leap year or not.
*/

    // function isLeapYear(year) {
    //     if ((year % 4 == 0 && year % 400 == 0)) {
    //             console.log(`${year} is a leap year`);
    //         } else {
    //             console.log(`${year} is not a leap year`);
    //         }
    //     }

    // isLeapYear(2023);
/*
10. Calculate how many hours, minutes, and seconds remain until midnight.
*/

    // let today = new Date();

    // let midnight = new Date();
    // midnight.setHours(24, 0, 0, 0);

    // let diff = midnight - today;

    // let hours = Math.floor(diff / (1000 * 60 * 60));
    // let minutes = Math.floor((diff / (1000 * 60)) % 60);
    // let seconds = Math.floor((diff / 1000) % 60);

    // console.log("Hours:", hours);
    // console.log("Minutes:", minutes);
    // console.log("Seconds:", seconds);


