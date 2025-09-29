
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

/*
2. Given a date, extract and display the year, month, day, hours, minutes, and seconds separately.
*/

/*
3. Create a program that takes a date and returns what day of the week it is (Monday, Tuesday, etc.).
*/

/*
4. Convert a month number (0-11) to its full name (January, February, etc.).
*/

/*
5. Create a date object for your birthday and display it in different formats.
*/

/*
6. Get and display only the current year.
*/

/*
7. Check if one date is before, after, or the same as another date.
*/

/*
8. Given a month and year, calculate how many days are in that month.
*/

/*
9. Determine if a given year is a leap year or not.
*/

/*
10. Calculate how many hours, minutes, and seconds remain until midnight.
*/

