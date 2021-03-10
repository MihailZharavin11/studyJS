'use strict';

let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while(numberOfFilms==""||numberOfFilms==null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        const a = prompt("Один из последних просмотренных фильмов?", "");
        const b = prompt("На сколько онцените его?", "");
        if(a!=null&&b!=null&&a!=""&&a.length<50&&b!=""){
            personalMovieDB.movies[a]=b;
            console.log("done");
        }else{
            console.log("error");
            i--;
        }
    }
}

function detectPersonalLevel(){
    if(personalMovieDB.count<10){
        console.log("Просмотрено мало фильмов");
    }else if(personalMovieDB.count>=10&&personalMovieDB.count<30){
        console.log("Вы класический зритель");
    }else if(personalMovieDB.count>=30){
        console.log("Вы киноман");
    }else{
        console.log("Произошла ошибка");
    }
}

function showMyDb(hiden){
    if(!hiden){
        console.log(personalMovieDB);
    }
}

function writeYourGeres(){
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1]=prompt(`Ваш любимый жанр под номером ${i}`,"");
    }
}

start();

const personalMovieDB = {
    count:numberOfFilms,
    movies: {} ,
    actors: {},
    genres: [],
    privat: false
};

rememberMyFilms();
detectPersonalLevel();
writeYourGeres();
showMyDb(personalMovieDB.privat);
