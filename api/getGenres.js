function getGenres(req, res) {
  var db = require('../utils/db');

  var genre = require('../models/genre')(db);
  genre.findAll().then(genres => {
    res.json({status: 'OK', result: genres});
  }).catch(e => {
    res.json({status: 'ERROR', error: e});
  });
}

module.exports = getGenres;
