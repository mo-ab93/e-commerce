const router = require('express').Router();


router.get('/', (req, res) => {
  const names = ['Hami', 'Ahmed', 'Mohammed', 'Mustafa'];
  res.json(names);
});


module.exports = router;