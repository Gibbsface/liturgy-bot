const d = new Date();

//based on the date, we need the following constants:
    //day out of 31
    //day out of 7 (not always the day of the week)
    //day out of 365 (leap year)
    //parity of week (even/odd out of 52)

//get day for 31 cycle
    //easy calculation
const cycle_31 = d.getDate();

//calculate day for 7 cycle
    //I know this looks weird, but it cycles 1-7 instead of 0-6
const cycle_7 = 1 + ((cycle_31-1) % 7);

//calculate day for 365 cycle
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

    //Finally, assign cycle 365
const cycle_365 = raw_day_of_year;

//calculate week parity
const week_parity = cycle_31 % 2;

//print all
console.log("Today is: " + d);
console.log("Day of the month: " + cycle_31);
console.log("Day of the 'week': " + cycle_7);
console.log("Day of the year: " + cycle_365);
console.log("Week parity: " + week_parity);
console.log("End of test\n");

