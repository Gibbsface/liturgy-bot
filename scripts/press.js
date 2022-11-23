const d = new Date();

//based on the date, we need the following constants:
    //day out of 366 (leap year)
    //day out of 31
    //day out of 7 (not always the day of the week)
    //parity of week (even/odd out of 52)


//get day for 31 cycle
    //easy calculation
const cycle_31 = d.getDate();

//calculate day for 7 cycle
    //I know this looks weird, but it cycles 1-7 instead of 0-6
const cycle_7 = 1 + ((cycle_31-1) % 7);

//calculate day for 366 cycle
// TODO

//Need to check if leap year
//if leap year, calc as normal (366)
//OR if not leap year and before March 1, also calc as normal
//else if not leap year and after Feb 28, then add 1 to normal dates




//print all
console.log("Today is: " + d);
console.log("Day of the month: " + cycle_31);
console.log("Day of the 'week': " + cycle_7);
//console.log("Day of the year: " + cycle_366);
//console.log("Week parity: " + week_parity);
console.log("End of test\n");
