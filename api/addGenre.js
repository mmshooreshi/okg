function addGenre(req, res) {
  const db = require('../utils/db');

  var genre = require('../models/genre')(db);

  genre.create({
      title: req.params.title,
      image: req.params.image,
  }).then(() => {
    res.json({status: 'OK'});
  }).catch(e => {
    res.json({status: 'ERROR', error: e});
  });
}

module.exports = addGenre;
