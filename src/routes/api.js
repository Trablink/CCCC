const express = require('express');
const path = require('path');

const partnerController = require('../controllers/partnerController');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/partners', partnerController.getPartners, (req, res) => {
  // console.log(`CORRECT RES`, res.locals.partners);
  return res.status(200).json(res.locals.partners);
});

router.post('/addPartner', partnerController.addPartners, (req, res) =>
  res.status(200).json({})
);

router.get('/', (req, res) => {
  console.log(`ENTERING GET ROUTER in api.js`);
  // const sendFile = '../client/template.html';
  return res
    .status(200)
    .sendFile(path.join(__dirname, '../client/template.html'));
});

module.exports = router;
