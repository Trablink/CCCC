const { Pool } = require('pg');

const PG_URI =
  'postgres://kjnlyrzb:vnnRIoFBeowOuW_d2DPygy0-6AntBdFj@hansken.db.elephantsql.com/kjnlyrzb';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
