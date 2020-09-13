// Extended Weekends

// If the first day of the month is a Friday, it is likely that the month will have an Extended Weekend. That is, it could have five Fridays, five Saturdays and five Sundays. In this Kata, you will be given a start year and an end year. Your task will be to find months that have extended weekends and return:

// - The first and last month in the range that has an extended weekend
// - The number of months that have extended weekends in the range, inclusive of start year and end year.

// Solution 1

const EXTENDED_MONTHS = [0, 2, 4, 6, 7, 9, 11];

function solve(a, b) {
  let range = [];
  for (; a <= b; a++) {
    range = range.concat(
      EXTENDED_MONTHS.map((m) => new Date(a, m, 1)).filter(
        (d) => d.getDay() === 5
      )
    );
  }

  return [
    range[0].toLocaleString("en-us", { month: "short" }),
    range[range.length - 1].toLocaleString("en-us", { month: "short" }),
    range.length,
  ];
}

// Solution 2

const calendars = {
  0: { months: 1, firstMonth: "Dec", lastMonth: "Dec" },
  1: { months: 0 },
  2: { months: 1, firstMonth: "Mar", lastMonth: "Mar" },
  3: { months: 1, firstMonth: "Aug", lastMonth: "Aug" },
  4: { months: 1, firstMonth: "May", lastMonth: "May" },
  5: { months: 2, firstMonth: "Jan", lastMonth: "Oct" },
  6: { months: 1, firstMonth: "Jul", lastMonth: "Jul" },
  7: { months: 0 },
  8: { months: 1, firstMonth: "Mar", lastMonth: "Mar" },
  9: { months: 1, firstMonth: "Aug", lastMonth: "Aug" },
  10: { months: 1, firstMonth: "May", lastMonth: "May" },
  11: { months: 1, firstMonth: "Oct", lastMonth: "Oct" },
  12: { months: 2, firstMonth: "Jan", lastMonth: "Jul" },
  13: { months: 1, firstMonth: "Dec", lastMonth: "Dec" },
};

function Year(y) {
  this.year = y;

  this.isLeap = function () {
    // A leap year is every 4 years, but not every 100 years, then again every 400 years.
    return this.year % 4 == 0 && (this.year % 100 != 0 || this.year % 400 == 0);

    // check if February has 29 days
    //return new Date(this.year, 2, 0).getDate() == 29; // this is slightly slower
  };

  this.firstDay = function () {
    return new Date(this.year, 0).getDay(); // 0-6 (Mon-Sun)
  };

  // Yes, true is 1 and false is 0 for javascript math.
  this.calendar = calendars[this.firstDay() + this.isLeap() * 7];
}

function solve(a, b) {
  const firstYear = new Year(a);
  const lastYear = new Year(b);
  const firstMonth = firstYear.calendar.months
    ? firstYear.calendar.firstMonth
    : new Year(a + 1).calendar.firstMonth;
  const lastMonth = lastYear.calendar.months
    ? lastYear.calendar.lastMonth
    : new Year(b - 1).calendar.lastMonth;

  let count = 0;
  for (let i = a; i <= b; i++) count += new Year(i).calendar.months;

  return [firstMonth, lastMonth, count];
}
