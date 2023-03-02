const router = require('express').Router();
const regions = require('./regions')

router.use('/regions', regions);

module.exports = router;