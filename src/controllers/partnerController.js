const { url } = require('inspector');

const db = require('../server/CCCCmodel');

const partnerController = {};

partnerController.getPartners = (req, res, next) => {
  console.log('PartnerController.getPartners ENTERED');
  const getPartnersQuery =
    'SELECT u.name AS user, pd.name AS partner, a.attribute AS attribute, rs.number AS rating FROM attribute_assignment aa LEFT OUTER JOIN users u ON aa.user_id = u._id LEFT OUTER JOIN partner_details pd ON aa.partner_id = pd._id LEFT OUTER JOIN attributes a ON aa.attributes_id = a._id LEFT OUTER JOIN ratings_scale rs ON aa.ratings_id = rs._id WHERE aa.user_id = 1 ORDER BY pd.name;';

  db.query(getPartnersQuery)
    .then((data) => {
      const arr = data.rows;
      arr.forEach((e) => {
        if (typeof e['rating'] !== Number) {
          e['rating'] = 1;
        }
      });
      res.locals.partners = arr;
      next();
    })

    .catch((err) => {
      console.log('ERR: error in partnerController.getPartners');
      next({ log: err, message: 'error in partnerController.getPartners' });
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
