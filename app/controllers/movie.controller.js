const Movie = require("../models/movie.model.js");

// Create and Save a new Movie
exports.create = (req, res) => {
  
};

// Retrieve all Movies from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Movie with a movieId
exports.findOne = (req, res) => {
  
};

// Update a Movie identified by the movieId in the request
exports.update = (req, res) => {
  
};

// Delete a Movie with the specified movieId in the request
exports.delete = (req, res) => {
  
};

// Delete all Movies from the database.
exports.deleteAll = (req, res) => {
  
};


// Implementation

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Movie
    const movie = new Movie({
      title: req.body.title,
      director: req.body.director,
      genre: req.body.genre
    });
  
    // Save Movie in the database
    Movie.create(movie, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Movie."
        });
      else res.send(data);
    });
  };

 // Retrieve all objects
 // Retrieve all Movies from the database:
  
  exports.findAll = (req, res) => {
    Movie.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving movies."
        });
      else res.send(data);
    });
  };


  // Retrieve a single object
 // Find a single Movie with a movieId:
  
  exports.findOne = (req, res) => {
    Movie.findById(req.params.movieId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Movie with id ${req.params.movieId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Movie with id " + req.params.movieId
          });
        }
      } else res.send(data);
    });
  };

 // Update an object
 // Update a Movie identified by the movieId in the request:
  
  exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Movie.updateById(
      req.params.movieId,
      new Movie(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Movie with id ${req.params.movieId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Movie with id " + req.params.movieId
            });
          }
        } else res.send(data);
      }
    );
  };


 // Delete an object
 // Delete a Movie with the specified movieId in the request:
  
  exports.delete = (req, res) => {
    Movie.remove(req.params.movieId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Movie with id ${req.params.movieId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Movie with id " + req.params.movieId
          });
        }
      } else res.send({ message: `Movie was deleted successfully!` });
    });
  };


  // Delete all objects
 //  Delete all Movies from the database:
  
  exports.deleteAll = (req, res) => {
    Movie.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all movies."
        });
      else res.send({ message: `All Movies were deleted successfully!` });
    });
  };