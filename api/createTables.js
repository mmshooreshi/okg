function createTables(req, res) {
  const db = require('../utils/db');

  require('../models/user')(db);
  require('../models/genre')(db);
  require('../models/dialogueText')(db);
  require('../models/dialogue')(db);
  require('../models/verificationCode')(db);
  require('../models/admin')(db);

  db.sync().then(() => {
    res.json({status: 'OK'});
  }).catch(e => {
    res.json({status: 'ERROR', error: e});
  });
}

module.exports = createTables;
