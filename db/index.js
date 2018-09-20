const { Pool } = require('pg')

// Pool to connect with the db
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


// If the connection work, a list of books will apair
pool.connect(function(err) {
    if (err) throw err;
    pool.query("SELECT * FROM ouvrage", function (err, result, fields) {
      if (err) throw err;
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
