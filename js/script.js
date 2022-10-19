'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '').trim();
        if (isNaN(personalMovieDB.count) || personalMovieDB.count == null || personalMovieDB.count == '') {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '').trim();
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Какой фильм вы смотрели в последний раз', '').trim(),
                b = prompt('Какую оценку дадите просмотренному фильму', '').trim();
            if (a != null && b != null && a.length < 50 && b.length < 50 && a != '' & b != '') {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectMyFilmLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотров довольно мало');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Не могу разобраться.Попробуйте еще');
        }
    },
    showMyDb: function (hidden) {
        if (hidden !== true) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            if (personalMovieDB.genres === null || personalMovieDB.genres === '') {
                i--;
            } else {
                personalMovieDB.genres[i - 1] = prompt(`Ваш любимы жанр под номером : ${i}`);
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр №:${i+1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat === 'false') {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    },

};