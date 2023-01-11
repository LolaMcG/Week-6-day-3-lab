const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getFilmTitles = function(){
  return this.films.map(function(film) {
    return film.title
  })
}

Cinema.prototype.filterByGenre = function(genre){
  return this.films.filter(film => {
    return film.genre === genre
  })
}


Cinema.prototype.totalFilmsRunTime = function(){
  return this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length
  }, 0)
}

Cinema.prototype.filmByTitle = function(title){
  return this.films.find(film => {
    return film.title === title
  })
}


Cinema.prototype.filmsFromYear = function(year){
  return this.films.some(film => {
    return film.year === year
  })
}

Cinema.prototype.overLength = function(length){
  return this.films.every(film => {
    return film.length > 90
  })
}

module.exports = Cinema;
