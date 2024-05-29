//create web server 
    const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//use body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//set view engine
app.set('view engine', 'ejs');

//set public folder
app.use(express.static('public'));

//include routes
const home = require('./routes/home');
const comment = require('./routes/comment');

//use routes
app.use('/', home);
app.use('/comment', comment);

//listen port
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
}); 
// Path: home.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Home Page', message: 'Welcome to the home page!' });
});

module.exports = router; 
// Path: comment.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('comment', { title: 'Comment Page', message: 'Welcome to the comment page!' });
});

module.exports = router; 
// Path: views/index.ejs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= title %></title>
</head>
<body>
    <h1><%= title %></h1>
    <p><%= message %></p>
</body>
</html> 
// Path: views/comment.ejs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= title %></title>
</head>
<body>
    <h1><%= title %></h1>
    <p><%= message %></p>
</body>
</html> 
 Now, run the server using the following command: 
 node app.js 
 Open your browser and navigate to  http://localhost:3000  to see the home page.