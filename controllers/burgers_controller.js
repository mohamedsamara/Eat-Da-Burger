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

router.post('/add', (req, res) => {
  burger.insertOne(['burger_name', 'devoured'], ['test', true], function(
    result
  ) {
    console.log(result);
    res.redirect('/');
  });
});

router.put('/edit/:id', (req, res) => {
  let condition = 'id = ' + req.params.id;

  console.log('condition', condition);

  burger.updateOne({ devoured: true }, condition, function(result) {
    console.log('result', result);
  });
});

module.exports = router;
