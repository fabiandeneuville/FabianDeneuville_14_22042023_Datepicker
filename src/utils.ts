/**
 * Days short names
 */
export const WEEK_DAYS = {
    Sunday: "Sun",
    Monday: "Mon",
    Tuesday: "Tue",
    Wednesday: "Wed",
    Thursday: "Thu",
    Friday: "Fri",
    Saturday: "Sat"
};

/**
 * Months short names
 */
export const CALENDAR_MONTHS = {
    January: "Jan",
    February: "Feb",
    March: "Mar",
    April: "Apr",
    May: "May",
    June: "Jun",
    July: "Jul",
    August: "Aug",
    September: "Sep",
    October: "Oct",
    November: "Nov",
    December: "Dec"
};

/**
 * Number of weeks to display in calendar set to 6 to allow calendar to show the last week of the previous month and the first week of the next month
 */
export const CALENDAR_WEEKS = 6;

/**
 * Function de add a 0 prefix when number length is shorter than 2
 * @param {number} value day or month index (example: 2 for february)
 * @param {number} length expected length (2)
 * @returns {string} day index with 0 prefix if necessary
 */
export const addZero = (value: number, length: number): string => {
    return `${value}`.padStart(length, '0');
};

/**
 * Function to get the number of days of a given month for a given year (leap years included)
 * @param {number} month month index (example: 8 for August)
 * @param {number} year year (example 2023)
 * @returns {number} number of days in month
 */
export const getMonthNumberOfDays = (month: number, year: number): number => {
    let numberOfDays: number | null = null;
    const monthsWith30days = [4, 6, 9, 11];
    const leapYear: boolean = year % 4 === 0;

    if(month === 2 && leapYear){
        numberOfDays = 29;
    } else if (month === 2 && !leapYear){
        numberOfDays = 28;
    } else if (monthsWith30days.includes(month)){
        numberOfDays = 30;
    } else {
        numberOfDays = 31
    }
    return numberOfDays;
};

/**
 * Function to get month first day for a given year (1 for sunday, 2 for monday ...)
 * @param {number} month month index
 * @param {number} year year (example 2023)
 * @returns {number} month first day index (example : 3 for tuesday)
 */
export const getMonthFirstDay = (month: number, year: number): number => {
    return +(new Date(`${year}-${addZero(month, 2)}-01`).getDay()) + 1;
};

/**
 * Function to check if date is correctly formated
 * @param {Date} date date
 * @returns {boolean} is date ? true or false
 */
export const isDate = (date: Date): boolean => {
    return Object.prototype.toString.call(date) === '[object Date]';
};

/**
 * Funtion to check if date exists and if date as a correct numeric value
 * @param {Date} date date
 * @returns {boolean} is valid date ? true or false
 */
export const isValidDate = (date: Date): boolean => {
    return date && !Number.isNaN(date.valueOf());
};

interface monthObject {
    month: number,
    year: number
}

/**
 * Function to get previous month (and the year of previous month)
 * @param {number} month month index
 * @param {number} year year
 * @returns {monthObject} previous month object (month index + year)
 */
export const getPreviousMonth = (month: number, year: number): monthObject => {
    const previousMonth = month > 1 ? month - 1 : 12;
    const previousMonthYear = month > 1 ? year : year - 1;
    return {
        month: previousMonth,
        year: previousMonthYear
    };
};

/**
 * Function to get next month (and the year of next month)
 * @param {number} month month index 
 * @param {number } year year 
 * @returns {monthObject} next month object (month index + year)
 */
export const getNextMonth = (month: number, year: number): monthObject => {
    const nextMonth = month < 12 ? month + 1 : 1;
    const nextMonthYear = month < 12 ? year : year + 1;
    return {
        month: nextMonth,
        year: nextMonthYear
    };
};

/**
 * Function that returns an array of dates as array
 * @param {number} month - month as number
 * @param {number} year - full year (example 2023)
 * @returns {[number, string, string][]} array of dates as array
 */
export const calendarBuilder = (month: number, year: number): [number, string, string][] => {

    const currentMonthDays: number = getMonthNumberOfDays(month, year);
    const monthFirstDay: number = getMonthFirstDay(month, year);
    const daysFromPreviousMonth: number = monthFirstDay - 1;
    const daysFromNextMonth: number = (CALENDAR_WEEKS * 7) - (daysFromPreviousMonth + currentMonthDays);
    const previousMonth: monthObject = getPreviousMonth(month, year);
    const nextMonth: monthObject = getNextMonth(month, year);
    const previousMonthDays: number = getMonthNumberOfDays(previousMonth.month, previousMonth.year);
    const previousMonthDates: [number, string, string][] = [...new Array(daysFromPreviousMonth)].map((_, index): [number, string, string]  => {
        const day: number = index + 1 + (previousMonthDays - daysFromPreviousMonth);
        return [ 
            previousMonth.year, 
            addZero(previousMonth.month, 2), 
            addZero(day, 2) 
        ];
    });
    const currentMonthDates: [number, string, string][] = [...new Array(currentMonthDays)].map((_, index): [number, string, string] => {
        const day: number = index + 1;
        return [year, addZero(month, 2), addZero(day, 2)];
    });
    const nextMonthDates: [number, string, string][] = [...new Array(daysFromNextMonth)].map((_, index): [number, string, string] => {
        const day: number = index + 1;
        return [
            nextMonth.year,
            addZero(nextMonth.month, 2),
            addZero(day, 2)
        ];
    });
    return [...previousMonthDates, ...currentMonthDates, ...nextMonthDates];
};

/**
 * Function to convert previously created date as array to a date as string
 * @param {[number, string, string]} date date as an array
 * @returns {string} date as a string
 */
export const getDateISO = (date: [number, string, string]): string => {
    return [
        date[0],
        date[1],
        date[2]
    ].join('-');
};