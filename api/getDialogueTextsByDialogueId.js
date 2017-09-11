function getDialogueTextsByDialogueId(req, res) {
  var db = require('../utils/db');

  var dialogueText = require('../models/dialogueText')(db);
  dialogueText.findAll({
    where: {genreId: parseInt(req.params.dialogueId)}
  }).then(dialogueTexts => {
    res.json({status: 'OK', result: dialogueTexts});
  }).catch(e => {
    res.json({status: 'ERROR', error: e});
  });
}

module.exports = getDialogueTextsByDialogueId;
