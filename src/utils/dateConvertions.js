// function getMonthAndYear(dateString) {
//     const date = new Date(dateString);
//
//     if (isNaN(date)) {
//         console.error("Invalid date:", dateString);
//         return "Invalid Date";
//     }
//
//     const options = { year: 'numeric', month: 'long' };
//     return date.toLocaleDateString('en-US', options);
// }
//
// function getMonthRange(startDate, endDate) {
//     const startMonthYear = getMonthAndYear(startDate);
//     const endMonthYear = getMonthAndYear(endDate);
//
//     if (startMonthYear === "Invalid Date" || endMonthYear === "Invalid Date") {
//         return "Invalid date range";
//     }
//
//     return `${startMonthYear} - ${endMonthYear}`;
// }
