
/*
 * GET home page.
 */

 module.exports = function(app) {
  app.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
  });
  app.get('/nswbmw', function (req, res) {
  res.send('hello,world!');
});

};
