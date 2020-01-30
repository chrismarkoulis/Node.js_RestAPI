const sql = require("./db.js");

//constructor

const Movie = function (movie) {
    this.title = movie.title;
    this.director = movie.director;
    this.genre = movie.genre;
};

Movie.create = (newMovie, result) => {
    sql.query("INSERT INTO movies SET ?", newMovie, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null,res);
            return;
        }
        console.log("created movie: ", {id: res.insertId, ...newMovie});
        result(null, { id: res.insertId, ...newMovie });
    });
};

Movie.findById = (movieId, result) => {
    sql.query(`SELECT * FROM movies WHERE id = ${movieId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found movie: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Movie with the id
      result({ kind: "not_found" }, null);
    });
  };
  
  Movie.getAll = result => {
    sql.query("SELECT * FROM movies", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("movies: ", res);
      result(null, res);
    });
  };
  
  Movie.updateById = (id, movie, result) => {
    sql.query(
      "UPDATE movies SET title = ?, director = ?, genre = ? WHERE id = ?",
      [movie.title, movie.director, movie.genre, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found movie with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated movie: ", { id: id, ...movie});
        result(null, { id: id, ...movie});
      }
    );
  };
  
  Movie.remove = (id, result) => {
    sql.query("DELETE FROM movies WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found movie with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted movie with id: ", id);
      result(null, res);
    });
  };
  
  Movie.removeAll = result => {
    sql.query("DELETE FROM movies", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`deleted ${res.affectedRows} movies`);
      result(null, res);
    });
  };
  
  module.exports = Movie;


