
// for (let i = 1980; i <= 2050; i++){
//     var d = new Date(i, 0);
//     var year = d.getFullYear();
//     var isLeap = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);

//     console.log("Year " + i);

//     if(isLeap){
//         console.log(" IS a leap\n\n");
//     }
//     else{
//         console.log(" is NOT a leap\n\n");
//     }
// }

const d = new Date("12/31/2020");
// console.log(d);

// const d_year = new Date(d.getFullYear(), 0, 0);
// console.log(d_year);

// console.log(d.getTime());
// console.log(d_year.getTime());

// const diff = d.getTime() - d_year.getTime();
// console.log(diff);

// const day_of_year = Math.floor((diff) / 1000 / 60 / 60 / 24);
// console.log(day_of_year);

const test = (s) => {
    const d = new Date(s);
    //calculate day for 366 cycle
    //First, get raw day of year
    const year_start = new Date(d.getFullYear(), 0, 0, 0 ,0);
    var raw_day_of_year = Math.floor((d.getTime()-year_start.getTime()) / 1000 / 60 / 60 / 24);

    //Next, check isLeap
    const year = d.getFullYear();
    const isLeap = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    
    //adjust for leap year and leap day
    if(isLeap && raw_day_of_year > 60){
        raw_day_of_year--;
    } else if(isLeap && raw_day_of_year == 60){
        raw_day_of_year = 0;
    }

    
    const cycle_365 = raw_day_of_year;
    return cycle_365;
}

console.log("Testing a leap year:")
var test_year = "2020";
console.log(test("1/1/" + test_year));
console.log(test("2/27/" + test_year));
console.log(test("2/28/" + test_year));
console.log(test("2/29/" + test_year));
console.log(test("3/1/" + test_year));
console.log(test("3/2/" + test_year));
console.log(test("12/31/" + test_year));

console.log("\n\nTesting a regular year:")
var test_year = "2022";
console.log(test("1/1/" + test_year));
console.log(test("2/27/" + test_year));
console.log(test("2/28/" + test_year));
console.log(test("3/1/" + test_year));
console.log(test("3/2/" + test_year));
console.log(test("12/31/" + test_year));

