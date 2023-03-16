const router = require('express').Router();
const rateLimit = require('express-rate-limit')

const getLimiter = rateLimit({
	windowMs: 1 * 60 * 1000,
	max: 2,
	message:
		'Get request limit exceeded',
	standardHeaders: true,
	legacyHeaders: false,
})

const {
    getScanInfo, saveCurrentScanInfo
  } = require('../controllers/region');

router.get('/:regionNum', getLimiter, getScanInfo);
router.post('/:regionNum', saveCurrentScanInfo);

module.exports = router;
