'use strict';


let personalMoviDB = {
  count: 0,
  movies:{},
  actors:{},
  genres:[],
  privat: true,

  start: function() {
    
    personalMoviDB.count = +prompt('Сколько фильмов вы уже посмотрели?',''); 

    while (personalMoviDB.count == '' || personalMoviDB.count == null || isNaN(personalMoviDB.count)) {
      personalMoviDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
    }
  },

  writeYourGenres: function(){
   for ( let i = 1; i < 4; i++) {
     let a = prompt( `Ваш любимый жанр под номером ${i}`, '');

     if ( a !== '' && a !== null && isNaN(a)) {
     personalMoviDB.genres.push(a);
     } else {
       i--;
     };
    }; 
    
  // let a = prompt("Введите любимые жанры через запятую" , "");
  // while ( a == '' || a == null) {
  //   a = prompt("Введите любимые жанры через запятую" , "")
  // }
  //   personalMoviDB.genres = a.split(',');
  //   personalMoviDB.genres.forEach((item,index) =>
  //   console.log(`Любимый жанр #${index + 1} - это ${item}` ));
    
  },

  rememberMyFilms:function() {
    for ( let i = 0; i < 2; i++) {
      const a = ('' + prompt('какие фильмы это были?','')).trim(),
            b = ('' + prompt('Какую оценку поставите этому фильму?','')).trim();

      if( a !== "null" && b !== "null" && a !== '' && b !== '' && a.length < 50 ) {
          personalMoviDB.movies[a] = b;
          console.log('Done');
      } else {
          console.log('Error');
          i--;
      }; 
    }
  }, 

  detectPersonalLevel: function() { 
    let massege = '';

    if ( personalMoviDB.count < 10 ) {
      massege = 'Просмотренно слишком мало фильмов!';
    } else if ( personalMoviDB.count < 30 ) {
      massege = 'Вы классический зритель!' ;
    } else if ( personalMoviDB.count > 30 ) {
      massege = 'Вы киноман!';
    } else {
      'Произошла ошибка';
    };

    alert(massege);
  },

  toggleVisibleMyDB: function() {
    if (personalMoviDB.privat == false){
      personalMoviDB.privat = true;
    } else {
      personalMoviDB.privat = false;
    };
  },

  showMyDB: function() {
    if (personalMoviDB.privat == false) {
      console.log(personalMoviDB);
    }
  },
  
};

personalMoviDB.start();

personalMoviDB.writeYourGenres();

personalMoviDB.rememberMyFilms();

personalMoviDB.detectPersonalLevel();

personalMoviDB.toggleVisibleMyDB();

personalMoviDB.showMyDB();

