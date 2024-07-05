const express = require('express');
const { createReferral, getReferrals } = require('../controllers/referralController');

const router = express.Router();

router.post('/referrals', createReferral);
router.get('/referrals', getReferrals);

module.exports = router;