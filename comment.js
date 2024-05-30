// create web server and listen to port 3000
// create a home page with a form to input a comment
// create a comments page to display all comments

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// comments page
app.get('/comments', (req, res) => {
    fs.readFile(__dirname + '/comments.txt', 'utf8', (err, data) => {
        if (err) {
            res.send('No comments yet!');
        } else {
            res.send(data);
        }
    });
});

// post comment
app.post('/', (req, res) => {
    const comment = req.body.comment;
    fs.appendFile(__dirname + '/comments.txt', comment + '\n', (err) => {
        if (err) {
            res.send('Error saving comment');
        } else {
            res.redirect('/comments');
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});