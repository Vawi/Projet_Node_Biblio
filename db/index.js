const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'p7',
    password: 'OPC',
    port: 5432,
  })

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

pool.connect(function(err) {
    if (err) throw err;
    // if connection is successful
    pool.query("SELECT * FROM ouvrage", function (err, result, fields) {
      // if any error while executing above query, throw error
      if (err) throw err;
      // if there is no error, you have the result
      console.log(result);
    });
  });
  

module.exports = {
    query: (text, params, callback) => {
      const start = Date.now()
      return pool.query(text, params, (err, res) => {
        const duration = Date.now() - start
        console.log('executed query', { text, duration, rows: res.rowCount })
        callback(err, res)
      })
    }
  }
