const express = require('express');
const router = express.Router();

const burger = require('../models/burger');

router.get('/', (req, res) => {
  burger.selectAll(function(data) {
    res.render('home', {
      burgers: data
    });
  });
});

router.post('/burgers/add', (req, res) => {
  burger.insertOne(
    ['burger_name', 'devoured'],
    [req.body.burger_name, false],
    function(result) {
      res.redirect('/');
    }
  );
});

router.put('/burgers/:id', (req, res) => {
  let condition = 'id = ' + req.params.id;

  burger.updateOne({ devoured: true }, condition, function(result) {
    if (result.changedRows === 0) {
      res.status(404).send('Something broke!');
    } else {
      res.status(200).send('Ok');
    }
  });
});

module.exports = router;
