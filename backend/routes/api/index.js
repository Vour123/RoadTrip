const router = require('express').Router();

router.post('/test', function(req,res) {
    res.json({requestsBody: req.body});
  });

module.exports = router;