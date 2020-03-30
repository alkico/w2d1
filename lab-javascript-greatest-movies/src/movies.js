/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    if (movies.length === 0) return 0;
    const avgRate = movies.reduce(function (acc, val) {
        // if (!val.rate) val.rate = 0;
        return acc + (val.rate || 0);
    }, 0) / movies.length;
    return +(avgRate.toFixed(2));
}


// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    const dramaMovies = movies.filter(function (movie) {
        if (movie.genre.indexOf("Drama") !== -1) {
            return true;
        }
        // return movie.genre.indexOf("Drama") !== -1;
    });

    const avg = ratesAverage(dramaMovies);
    return avg;

    // return ratesAverage(movies.filter(movie => movie.genre.includes('Drama')));
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByYear(array) {
    const sortedArray = array.slice().sort(function (a, b) {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            return a.title.localeCompare(b.title);
        }
    });
    return sortedArray;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
    const filteredMovies = movies.filter(
        movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );

    return filteredMovies.length;
}
// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    return movies.map(function (movie) {
        return movie.title;
    }).sort(function (a, b) {
        return a.localeCompare(b)
    }).slice(0, 20);
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// easier solution
// function convertHours(duration) {
//   let totalTime = 0;
//   let hours = 0;
//   let minutes = 0;

//   const time = duration.split(" ");

//   if (time.length >= 2) {
//     hours = parseInt(time[0]);
//     minutes = parseInt(time[1]);
//   } else {
//     // if (time[0].indexOf("min") !== -1) {
//     if (time[0].includes("min")) {
//       minutes = parseInt(time[0]);
//       // } else if (time[0].indexOf("h") !== -1) {
//     } else if (time[0].includes("h")) {
//       hours = parseInt(time[0]);
//     }
//   }

//   totalTime = hours * 60 + minutes;
//   return totalTime;
// }

// function turnHoursToMinutes(movies) {
//   const newMovies = movies.map(function(movie) {
//     const newMovie = { ...movie };

//     newMovie.duration = convertHours(movie.duration);

//     return newMovie;
//   });

//   return newMovies;
// }

function turnHoursToMinutes(movies) {
    return movies.map(function (movie) {
        let convertedDuration = 0;
        if (movie.duration.includes('h')) {
            convertedDuration += Number(movie.duration.slice(0, movie.duration.indexOf('h'))) * 60;
        }
        if (movie.duration.includes('min')) {
            convertedDuration += Number(movie.duration.slice(movie.duration.indexOf(' ') + 1, movie.duration.indexOf('m')));
        }
        return { ...movie, duration: convertedDuration };
    });
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average


// using arrow functions
// const bestYearAvg = function (movies) {
//     if (!movies.length) return null;
//     const best = movies.reduce((best, movie) => {
//         let average = ratesAverage(movies.filter(m => m.year === movie.year));
//         if (average > best.rate || (average === best.rate && movie.year < best.year)) {
//             best.year = movie.year;
//             best.rate = average;
//         }
//         return best;
//     }, {
//         year: null,
//         rate: null
//     });

//     return `The best year was ${best.year} with an average rate of ${best.rate}`;
// }

// without arrow functions
function bestYearAvg(movies) {
    if (!movies.length) return null;
    const best = movies.reduce(function (best, movie) {
        let average = ratesAverage(movies.filter(function (m) {
            return m.year === movie.year
        }));
        if (average > best.rate || (average === best.rate && movie.year < best.year)) {
            best.year = movie.year;
            best.rate = average;
        }
        return best;
    }, {
        year: null,
        rate: null
    });

    return `The best year was ${best.year} with an average rate of ${best.rate}`;
}


// more explicit without reduce and using sort() to find the best 

// const bestYearAvg = ar => {
//     if (!ar.length) return null;
//     const averageRatingsPerYear = [...new Set(ar.map(movie => movie.year))].map(year => ({
//         year,
//         rate: ratesAverage(ar.filter(movie => movie.year === year))
//     }));

//     const best = averageRatingsPerYear.sort((a, b) => b.rate - a.rate === 0 ? a.year - b.year : b.rate - a.rate)[0];
//     return `The best year was ${best.year} with an average rate of ${best.rate}`;
// }