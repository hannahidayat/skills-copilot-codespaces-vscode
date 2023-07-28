// Create web server 
// 1. npm init
// 2. npm install express --save
// 3. npm install body-parser --save
// 4. npm install ejs --save

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;
var comments = [
    {name: 'Huy', content: 'Hello'},
    {name: 'Hoa', content: 'Hi'},
    {name: 'Hung', content: 'Hey'},
    {name: 'Hieu', content: 'Hihi'}
];

// Set up template engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Set up static files
app.use(express.static('public'));

// Set up parser for POST
app.use(bodyParser.urlencoded({ extended: false }));

// Home page
app.get('/', function(req, res) {
    res.render('home');
});

// Comments page
app.get('/comments', function(req, res) {
    res.render('comments', {comments: comments});
});

// New comment page
app.get('/comments/new', function(req, res) {
    res.render('newcomment');
});

// Post new comment
app.post('/comments', function(req, res) {
    comments.push(req.body);
    res.redirect('/comments');
});

app.listen(port, function() {
    console.log('Server is listening on port ' + port);
});