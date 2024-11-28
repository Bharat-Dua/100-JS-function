//* 31.countPageViews

//? Write a function named countPageViews that receives 3 parameters:

// pageViews - an Array of objects describing views of our page. Each object contains the number of views from a particular country, at a particular time and has the following properties:

// date - a Date
// country - a string representing a country code
// count - a number
// country - a string representing a country code

// interval - an object with 2 properties, startDate and endDate - each of them Dates

// The function should return the number of page views from that country between those 2 dates (inclusive).

const pageViews = [
  { date: new Date("2023-05-10T15:30:00"), country: "RO", count: 104 },
  { date: new Date("2023-05-05T15:30:00"), country: "USA", count: 151 },
  { date: new Date("2023-05-07T15:30:00"), country: "RO", count: 67 },
  { date: new Date("2023-05-10T15:30:00"), country: "CA", count: 89 },
  { date: new Date("2023-05-12T17:30:00"), country: "RO", count: 500 },
];
const interval = {
  startDate: new Date("2023-05-01T15:30:00"),
  endDate: new Date("2023-05-12T15:30:00"),
};
function countPageViews(pageViews, country, interval) {
  const { startDate, endDate } = interval;
  return pageViews
    .filter(
      (view) =>
        view.country === country &&
        view.date >= startDate &&
        view.date <= endDate
    )
    .reduce((total, view) => total + view.count, 0);
}

export { countPageViews };

const result = countPageViews(pageViews, "RO", interval);
console.log(result);
