const Router = require('express-promise-router')

const db = require('../db')


app.get('/:id', (req, res, next) => {
    db.query('SELECT * FROM users WHERE id = $1', [id], (err, res) => {
      if (err) {
        return next(err)
      }
      res.send(res.rows[0])
    })
  })

app.get((req, res, next ) => {
    db.query('SELECT * FROM ouvrage'); 
})
