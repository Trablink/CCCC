const { url } = require('inspector');
const Attributes = require('../db/attributes.sql');
const Partners = require('../db/partners.sql');
const Ratings = require('../db/ratings_scale.sql');
const User = require('../db/users.sql');

const db = url('./localhost/database/'); // HOW THE HELL DO I DO THIS?????????????

const partnerController = {};

partnerController.getPartners = (req, res, next) => {
  console.log('PartnerController.getPartners ENTERED');
  const getPartnersQuery =
    'SELECT u._id, u.name, p.name AS partnerName, a.* AS attributes, r.scale AS ratings FROM users u LEFT OUTER JOIN partners p ON p._id = u._id LEFT OUTER JOIN attributes a ON a._id = p._id LEFT JOIN ratings_scale rs ON rs._id = a.* ORDER BY p._id;';
  db.query(getPartnersQuery)
    .then((data) => {
      const arr = data.rows;
      res.locals.partners = arr;
    })
    .catch((err) => {
      console.log('ERR: error in partnerController.getPartners');
      next({ log: err, message: 'error in partnerController.getPartners' });
    })
    .then(() => {
      next();
    });
};

partnerController.addPartners = (req, res, next) => {
  console.log('PartnerController.addPartners ENTERED');
  fetch(data) //FETCH FROM INPUT
    .then((data) => {
      /*ADD DATA TO DATABASE*/
    })
    .catch((err) => {
      console.log('ERR: error in partnerController.addPartners');
      next({ log: err, message: 'error in partnerController.addPartners' });
    })
    .then(() => {
      next();
    });
};

module.exports = partnerController;
