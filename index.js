const numberOfMovies = +prompt('How many movies have you already watched?', ''); 
//since the answer from user will be a number we put the + sign in front of prompt
const personalMovieDB = {
    count : numberOfMovies,
    movies:{},
    actors:{},
    ganres:[],
    privat: false
};

const a = prompt ('What was one of the latest moviest you have watched?', ''),
      b = prompt('How would you rate it?', ''),
      c = prompt ('What was one of the latest moviest you have watched?', ''),
      d = prompt('How would you rate it?', '');

      personalMovieDB.movies[a] = b;
      //here will be a -answer for question a, and b - answer for question b
      personalMovieDB.movies[c] = d;
      //here will be c -answer for question c, and d - answer for question d
      console.log(personalMovieDB);