const router = require('express').Router();
const {
    getScanInfo, saveCurrentScanInfo
  } = require('../controllers/region');

router.get('/:regionNum', getScanInfo);
router.post('/:regionNum', saveCurrentScanInfo);

module.exports = router;
