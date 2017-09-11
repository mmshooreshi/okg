function getDialoguesByGenreId(req, res) {
  var db = require('../utils/db');

  var dialogue = require('../models/dialogue')(db);
  dialogue.findAll({
    where: {genreId: parseInt(req.params.genreId)}
  }).then(dialogues => {
    res.json({status: 'OK', result: dialogues});
  }).catch(e => {
    res.json({status: 'ERROR', error: e});
  });
}

module.exports = getDialoguesByGenreId;
