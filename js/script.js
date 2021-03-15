'use strict';

const personalMovieDB = {
    count:0,
    movies: {} ,
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while(personalMovieDB.count==""||personalMovieDB.count==null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },

    rememberMyFilms: function(){
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
    },

    detectPersonalLevel: function(){
        if(personalMovieDB.count<10){
            console.log("Просмотрено мало фильмов");
        }else if(personalMovieDB.count>=10&&personalMovieDB.count<30){
            console.log("Вы класический зритель");
        }else if(personalMovieDB.count>=30){
            console.log("Вы киноман");
        }else{
            console.log("Произошла ошибка");
        }
    },

    showMyDb: function(hiden) {
        if(!hiden){
            console.log(personalMovieDB);
        }
    },

    writeYourGeres: function(){
        for(let i = 1; i <= 3; i++){
            personalMovieDB.genres[i - 1]=prompt(`Ваш любимый жанр под номером ${i}`,"");
            if(personalMovieDB.genres[i-1]==""||personalMovieDB.genres[i-1]==null){
               i--;
            }
        }
        personalMovieDB.genres.forEach(function(item,i){
            console.log(`Любимый жанр ${i+1} это - ${item}`);
        });
    },

    tooggleVisibleMyDB: function(){
        if(personalMovieDB.privat==true){
            personalMovieDB.privat=false;
        }else{
            personalMovieDB.privat=true;
        }
        console.log(`Значение поменялось на: ${personalMovieDB.privat} ` );
    }
};

//personalMovieDB.start();
//personalMovieDB.rememberMyFilms();
//personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGeres();
//personalMovieDB.showMyDb(personalMovieDB.privat);
//personalMovieDB.tooggleVisibleMyDB();
