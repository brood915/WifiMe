/* GET 'home' page */
module.exports.homelist = (req, res) =>{
  res.render('index', { title: 'WifyMe' });
};

/* GET 'Location info' page */
module.exports.locationInfo = (req, res) => {
  res.render('index', { title: 'WifyMe: Location' });
};

/* GET 'Add review' page */
module.exports.addReview = (req, res) => {
res.render('index', { title: 'WifyMe: Add a review' });
};