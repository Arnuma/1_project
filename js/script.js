'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
for (let i = 0; i < 2; i++) {
    const a = prompt('Какой фильм вы смотрели в последний раз', ''),
        b = prompt('Какую оценку дадите просмотренному фильму', '');
    if (a != null && b != null && a.length < 50 && b.length < 50 && a != '' & b != '') {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}
if (personalMovieDB.count < 10) {
    console.log('Просмотров довольно мало');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Не могу разобраться.Попробуйте еще');
}

console.log(personalMovieDB);