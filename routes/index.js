let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Home' });
});

router.get('/about', (req, res, next) => {
  res.render('index', { title: 'About' });
});

router.get('/favouriteThings', (req, res, next) => {
  res.render('index', { title: 'FavouriteThings' });
});

router.get('/products', (req, res, next) => {
  res.render('index', { title: 'Products' });
});

router.get('/services', (req, res, next) => {
  res.render('index', { title: 'Services' });
});

module.exports = router;
