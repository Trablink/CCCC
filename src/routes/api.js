const express = require('express');

const partnerController = require('../controllers/partnerController');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', (req, res) => {
  return res.status(200).getFile('../client/template.html');
});

router.post('/addPartner', partnerController.addPartners, (req, res) =>
  res.status(200).json({})
);

module.exports = router;
